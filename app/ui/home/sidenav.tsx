import NavLinks from '@/app/ui/home/nav-links';
import { signOut } from '@/auth';

export default function NavBar() {
  return (
    <div className="flex w-full flex-row justify-end">
      <NavLinks />
      <form
        action={async () => {
          'use server';
          await signOut();
        }}
      >
        <button className="flex h-[48px] w-[85px] items-center justify-center gap-2 px-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600">
          <p>Sign Out</p>
        </button>
      </form>
    </div>
  );
}
