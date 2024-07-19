import LatestInvoices from '@/app/ui/home/latest-invoices';
import Image from 'next/image';

export default async function Page() {
  return (
    <main className="flex min-h-screen flex-col justify-center">
      <div className="flex h-full w-full flex-col items-center justify-center gap-5 p-5 lg:flex-row lg:items-start">
        <div className="w-full flex-shrink-0 border-2 border-solid border-emerald-400 lg:w-auto">
          <Image
            src="/monika_luu_profile.png"
            width={500}
            height={500}
            alt="Picture of the author"
            className="h-auto w-full lg:h-full"
          />
        </div>
        <div className="border-5 flex flex-col items-center overflow-auto border-2 border-solid border-emerald-600 p-5 lg:h-auto lg:flex-1 lg:justify-center">
          <h1 className="text-3xl">I&apos;m Monika Luu</h1>
          <h2>Developer</h2>
          <p className="py-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Faucibus
            purus in massa tempor nec feugiat nisl pretium fusce. Massa enim nec
            dui nunc mattis enim ut tellus elementum. Sit amet mattis vulputate
            enim nulla aliquet. Id donec ultrices tincidunt arcu non. Purus in
            mollis nunc sed id semper risus in hendrerit. Ipsum dolor sit amet
            consectetur adipiscing elit ut aliquam purus. Et pharetra pharetra
            massa massa ultricies mi. Facilisis sed odio morbi quis commodo odio
            aenean sed adipiscing. Et netus et malesuada fames ac turpis egestas
            sed tempus. Quam quisque id diam vel quam.
          </p>
        </div>
      </div>
      <LatestInvoices />
    </main>
  );
}
