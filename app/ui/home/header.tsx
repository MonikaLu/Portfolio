import Menu from './menu';

export default function NavBar() {
  return (
    <>
      <div className="flex w-full flex-row justify-end gap-x-5 border-b-2 border-solid bg-emerald-50 px-5 py-5">
        <Menu />
        <form>
          <button className="flex h-[48px] w-[90px] items-center justify-center gap-2 px-3 text-base font-medium hover:underline">
            <p>Sign Out</p>
          </button>
        </form>
      </div>
    </>
  );
}
