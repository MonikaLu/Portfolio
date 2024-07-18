import { lusitana } from '@/app/ui/fonts';
import LatestInvoices from '@/app/ui/home/latest-invoices';
import Image from 'next/image';

export default async function Page() {
  return (
    <main className="min-h-screen">
      <div className="flex h-full w-full flex-col items-center justify-center gap-x-5 lg:flex-row">
        <div className="w-full flex-shrink-0 lg:w-auto">
          <Image
            src="/monika_luu_profile.png"
            width={500}
            height={500}
            alt="Picture of the author"
            className="h-full w-full"
          />
        </div>
        <div className="flex h-full flex-col items-center overflow-auto border-2 border-solid border-emerald-600 p-5">
          <h1 className={`${lusitana.className} text-3xl`}>Monika Luu</h1>
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
