import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';
import Form from '@/app/ui/projects/create-form';

export default async function Page() {
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Projects', href: '/home/projects' },
          {
            label: 'Create Project',
            href: '/home/projects/create',
            active: true,
          },
        ]}
      />
      <Form />
    </main>
  );
}
