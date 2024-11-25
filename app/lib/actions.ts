'use server';

import { Technology } from '@prisma/client';
import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { z } from 'zod';

const FormSchema = z.object({
  id: z.string(),
  technologies: z.array(z.nativeEnum(Technology), {
    invalid_type_error: 'Please select a valid technology',
  }),
  fromDate: z.string(),
  toDate: z.string(),
  description: z.string(),
  customerName: z.string(),
  projectName: z.string(),
  image_url: z.string(),
});

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
    description: formData.get('description'),
    customerName: formData.get('customerName'),
    image_url: formData.get('image_url'),
    fromDate: formData.get('fromDate'),
    toDate: formData.get('toDate'),
    technologies: formData.getAll('technologies'),
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
    await prisma.project.create({
      data: {
        projectName,
        description,
        customerName,
        image_url,
        fromDate: new Date(fromDate),
        toDate: new Date(toDate),
        technologies,
      },
    });
  } catch (error) {
    console.error('Database Error:', error);
    return {
      message: 'Database Error: Failed to Create Project',
    };
  }

  revalidatePath('/home/projects');
  redirect('/home/projects');
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
