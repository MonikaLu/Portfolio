import bcrypt from 'bcrypt';
import { db } from '@vercel/postgres';
import {
  invoices,
  customers,
  revenue,
  users,
  // projects,
  // technologies,
} from '../lib/placeholder-data';

const client = await db.connect();

async function seedUsers() {
  await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
  await client.sql`
    CREATE TABLE IF NOT EXISTS users (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      email TEXT NOT NULL UNIQUE,
      password TEXT NOT NULL
    );
  `;

  const insertedUsers = await Promise.all(
    users.map(async (user) => {
      const hashedPassword = await bcrypt.hash(user.password, 10);
      return client.sql`
        INSERT INTO users (id, name, email, password)
        VALUES (${user.id}, ${user.name}, ${user.email}, ${hashedPassword})
        ON CONFLICT (id) DO NOTHING;
      `;
    }),
  );

  return insertedUsers;
}

// async function seedProjects() {
//   await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

//   await client.sql`
//   CREATE TABLE IF NOT EXISTS projects (
//   id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
//   projectName VARCHAR(255) NOT NULL,
//   customerName VARCHAR(255) NOT NULL,
//   image_url VARCHAR(255) NOT NULL,
//   description VARCHAR(255) NOT NULL,
//   technologies ENUM('JavaScript', 'React', 'Java', 'Django', 'MangoDB', 'Angular') NOT NULL,
//   fromDate DATE NOT NULL,
//   toDate DATE NOT NULL
//   );`;

//   await client.sql`CREATE TABLE IF NOT EXISTS technologies (
//     id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
//     name ENUM('JavaScript', 'React', 'Java', 'Django', 'MongoDB', 'Angular') NOT NULL
//   );`;
//   await client.sql`CREATE TABLE IF NOT EXISTS project_technologies (
//     project_id UUID REFERENCES projects(id) ON DELETE CASCADE,
//     technology_id UUID REFERENCES technologies(id) ON DELETE CASCADE,
//     PRIMARY KEY (project_id, technology_id)
//   );`;

//   const insertedProjects = await Promise.all(
//     projects.map(async (project) => {
//       client.sql`
//     INSERT INTO projects (id, projectName, customerName, image_url, description, technologies, fromDate, toDate)
//     VALUES (${project.id}, ${project.projectName},${project.customerName},${project.image_url},${project.description}, ARRAY [${project.technologies.join()}], ${project.fromDate},${project.toDate})
//     RETURNING id;
//     `;
//       await Promise.all(
//         project.technologies.map(async (technology) => {
//           const insertedTechnologies = await client.sql`
//                INSERT INTO technologies (name)
//                 VALUES (${technology})
//                 ON CONFLICT (name) DO NOTHING
//                 RETURNING id, name;
//             `;
//         }),
//       );
//     }),
//   );
// }

async function seedInvoices() {
  await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

  await client.sql`
    CREATE TABLE IF NOT EXISTS invoices (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      customer_id UUID NOT NULL,
      amount INT NOT NULL,
      status VARCHAR(255) NOT NULL,
      date DATE NOT NULL
    );
  `;

  const insertedInvoices = await Promise.all(
    invoices.map(
      (invoice) => client.sql`
        INSERT INTO invoices (customer_id, amount, status, date)
        VALUES (${invoice.customer_id}, ${invoice.amount}, ${invoice.status}, ${invoice.date})
        ON CONFLICT (id) DO NOTHING;
      `,
    ),
  );

  return insertedInvoices;
}

async function seedCustomers() {
  await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

  await client.sql`
    CREATE TABLE IF NOT EXISTS customers (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      email VARCHAR(255) NOT NULL,
      image_url VARCHAR(255) NOT NULL
    );
  `;

  const insertedCustomers = await Promise.all(
    customers.map(
      (customer) => client.sql`
        INSERT INTO customers (id, name, email, image_url)
        VALUES (${customer.id}, ${customer.name}, ${customer.email}, ${customer.image_url})
        ON CONFLICT (id) DO NOTHING;
      `,
    ),
  );

  return insertedCustomers;
}

async function seedRevenue() {
  await client.sql`
    CREATE TABLE IF NOT EXISTS revenue (
      month VARCHAR(4) NOT NULL UNIQUE,
      revenue INT NOT NULL
    );
  `;

  const insertedRevenue = await Promise.all(
    revenue.map(
      (rev) => client.sql`
        INSERT INTO revenue (month, revenue)
        VALUES (${rev.month}, ${rev.revenue})
        ON CONFLICT (month) DO NOTHING;
      `,
    ),
  );

  return insertedRevenue;
}

export async function GET() {
  try {
    await client.sql`BEGIN`;
    await seedUsers();
    await seedCustomers();
    await seedInvoices();
    await seedRevenue();
    await client.sql`COMMIT`;

    return Response.json({ message: 'Database seeded successfully' });
  } catch (error) {
    await client.sql`ROLLBACK`;
    return Response.json({ error }, { status: 500 });
  }
}
