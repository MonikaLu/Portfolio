'use server';

import { signIn } from '@/auth';
import { sql } from '@vercel/postgres';
import { AuthError } from 'next-auth';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { z } from 'zod';

const FormSchema = z.object({
  id: z.string(),
  technologies: z.enum(['java', 'react'], {
    invalid_type_error: 'Please select a valid technology',
  }),
  fromDate: z.string(),
  toDate: z.string(),
  description: z.string(),
  customerName: z.string(),
  projectName: z.string(),
  image_url: z.string(),
});

// const CreateInvoice = FormSchema.omit({ id: true });

const CreateProject = FormSchema.omit({ id: true });

export type State = {
  errors?: {
    technologies?: string[];
    fromDate?: string[];
    toDate?: string[];
    description?: string[];
    customerName?: string[];
    projectName?: string[];
    image_url?: string[];
  };
  message?: string | null;
};

export async function createProject(prevState: State, formData: FormData) {
  const validatedFields = CreateProject.safeParse({
    projectName: formData.get('projectName'),
    description: formData.get('formData'),
    customerName: formData.get('customerName'),
    image_url: formData.get('image_url'),
    fromDate: formData.get('fromDate'),
    toDate: formData.get('toDate'),
    technologies: formData.get('technologies'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing fields. Failed to Create Project',
    };
  }

  const {
    projectName,
    description,
    customerName,
    image_url,
    fromDate,
    toDate,
    technologies,
  } = validatedFields.data;

  try {
    await sql`
    INSERT INTO projects (projectName,
    description,
    customerName,
    image_url,
    fromDate,
    toDate,
    technologies,)
    VALUES (${projectName}, ${description}, ${customerName}, ${image_url}, ${fromDate}, ${toDate}, ${technologies})
  `;
  } catch (error) {
    return {
      message: 'Database Error: Failed to Create Project',
    };
  }

  revalidatePath('/home/projects');
  redirect('/home/projects');
}

// export async function createInvoice(prevState: State, formData: FormData) {
//   const validatedFields = CreateInvoice.safeParse({
//     customerId: formData.get('customerId'),
//     amount: formData.get('amount'),
//     status: formData.get('status'),
//   });

//   if (!validatedFields.success) {
//     return {
//       errors: validatedFields.error.flatten().fieldErrors,
//       message: 'Missing fields. Failed to Create Invoice',
//     };
//   }
//   const { customerId, amount, status } = validatedFields.data;
//   const amountInCents = amount * 100;
//   const date = new Date().toISOString().split('T')[0];

//   try {
//     await sql`
//   INSERT INTO invoices (customer_id, amount, status, date)
//   VALUES (${customerId}, ${amountInCents}, ${status}, ${date})
// `;
//   } catch (error) {
//     return {
//       message: 'Database Error: Failed to Create Invoice',
//     };
//   }

//   revalidatePath('/home/invoices');
//   redirect('/home/invoices');
// }

const UpdateInvoice = FormSchema.omit({ id: true });

export async function updateInvoice(
  id: string,
  prevState: State,
  formData: FormData,
) {
  const validatedFields = UpdateInvoice.safeParse({
    customerId: formData.get('customerId'),
    amount: formData.get('amount'),
    status: formData.get('status'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing fields. Failed to update Invoice',
    };
  }
  // const { customerId, amount, status } = validatedFields.data;

  // const amountInCents = amount * 100;

  // try {
  //   await sql`
  //   UPDATE invoices
  //   SET customer_id = ${customerId}, amount = ${amountInCents}, status = ${status}
  //   WHERE id = ${id}`;
  // } catch (error) {
  //   return {
  //     message: 'Database Error: Failed to Edit Invoice',
  //   };
  // }

  revalidatePath('/home/invoices');
  redirect('/home/invoices');
}

export async function deleteInvoice(id: string) {
  try {
    await sql`DELETE FROM invoices WHERE id = ${id}`;
  } catch (error) {
    return {
      message: 'Database Error: Failed to Delete Invoice',
    };
  }
  revalidatePath('/home/invoices');
}

export async function authenticate(
  prevState: string | undefined,
  formData: FormData,
) {
  try {
    await signIn('credentials', formData);
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return 'Invalid credentials.';
        default:
          return 'Something went wrong.';
      }
    }
    throw error;
  }
}
