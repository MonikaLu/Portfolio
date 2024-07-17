import NavLinks from '@/app/ui/home/nav-links';
import { signOut } from '@/auth';
import Link from 'next/link';

export default function NavBar() {
  return (
    <>
      <div className="flex w-full flex-row justify-end gap-x-5 px-5 py-5">
        <Link href="/home" className="flex px-5 py-3 text-2xl hover:underline">
          <h1 className="md:block">Monika Luu</h1>
        </Link>
        <div className="flex flex-grow justify-end">
          <NavLinks />
        </div>

        <form
          action={async () => {
            'use server';
            await signOut();
          }}
        >
          <button className="flex h-[48px] w-[90px] items-center justify-center gap-2 px-3 text-base font-medium hover:bg-emerald-200 hover:underline">
            <p>Sign Out</p>
          </button>
        </form>
      </div>
    </>
  );
}
