import '@/app/ui/global.css';
import { lusitana } from '@/app/ui/fonts';
import { Metadata } from 'next';
import MenuHeader from '@/app/ui/home/header';

export const metadata: Metadata = {
  title: { default: 'Monika Luu Portfolio', template: '%s | Portfolio' },
  description:
    'The official personal portfolio of Monika Luu, built with App Router of Next.js.',
  metadataBase: new URL('https://monikaluu.vercel.app/'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${lusitana.className} antialiased`}>
        <MenuHeader />
        {children}
      </body>
    </html>
  );
}
