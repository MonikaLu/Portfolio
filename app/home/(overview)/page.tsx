import { lusitana } from '@/app/ui/fonts';
import LatestInvoices from '@/app/ui/home/latest-invoices';
import Image from 'next/image';

export default async function Page() {
  return (
    <main>
      <div className="flex w-full items-center justify-between">
        <h1 className={`${lusitana.className} text-3xl`}>Monika Luu</h1>
        <Image
          src="/monika_luu_profile.png"
          width={500}
          height={500}
          alt="Picture of the author"
        />
      </div>
      <LatestInvoices />
    </main>
  );
}
