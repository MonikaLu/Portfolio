'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import NavLinks from '@/app/ui/home/nav-links';

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex w-full flex-row justify-between gap-x-5 px-5">
      <Link
        href="/home"
        className="flex items-center px-5 text-2xl hover:underline"
      >
        <h1 className="md:block">Monika Luu</h1>
      </Link>

      <div className="flex items-center md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-md p-1 hover:bg-emerald-300 focus:outline-none focus:ring-2 focus:ring-emerald-500"
        >
          <Bars3Icon className="h-6 w-6" />
        </button>
      </div>
      <div
        className={`fixed inset-y-0 left-0 z-20 w-64 transform bg-white p-5 transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0 border-r-2 border-solid border-emerald-100' : '-translate-x-full'} md:relative md:flex md:flex-grow md:translate-x-0 md:justify-end md:bg-transparent md:p-0`}
      >
        <div className="flex flex-col items-end md:hidden">
          <button
            onClick={() => setIsOpen(false)}
            className="rounded-md p-1 hover:bg-emerald-300 focus:outline-none focus:ring-2 focus:ring-emerald-500"
          >
            <XMarkIcon className="h-6 w-6" />
          </button>
        </div>
        <NavLinks />
      </div>
    </div>
  );
}
