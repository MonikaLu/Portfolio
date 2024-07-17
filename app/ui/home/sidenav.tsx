import NavLinks from '@/app/ui/home/nav-links';
import { signOut } from '@/auth';

export default function NavBar() {
  return (
    <div className="flex w-full flex-row items-center gap-3 px-3 py-4 md:px-2">
      <NavLinks />
      <form
        action={async () => {
          'use server';
          await signOut();
        }}
      >
        <button className="flex h-[48px] w-[100px] items-center justify-center gap-2 px-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600">
          <div className="hidden md:block">Sign Out</div>
        </button>
      </form>
    </div>
  );
}
