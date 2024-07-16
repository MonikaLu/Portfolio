import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: { default: 'Monika Luu Portfolio', template: '%s | Portfolio' },
  description:
    'The official personal portfolio of Monika Luu, built with App Router of Next.js.',
  metadataBase: new URL('https://portfolio-cyan-seven-70.vercel.app/'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
