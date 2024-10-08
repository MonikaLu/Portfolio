'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import { FolderIcon } from '@heroicons/react/24/outline';

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  {
    name: 'Invoices',
    href: '/home/invoices',
  },
  { name: 'Customers', href: '/home/customers' },
  {
    name: 'Projects',
    href: '/home/projects',
  },
];

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          className={clsx(
            'flex h-[48px] items-center gap-2 p-3 text-base font-medium hover:bg-emerald-200 hover:underline md:flex-none md:justify-start md:p-2 md:px-3',
            {
              'bg-emerald-200': pathname === link.href,
            },
          )}
        >
          <FolderIcon className="h-5 w-5" />
          <p className="md:block">{link.name}</p>
        </Link>
      ))}
    </>
  );
}
