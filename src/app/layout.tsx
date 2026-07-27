import type { Metadata } from 'next';
import './globals.css';
import { Providers } from '@/providers';
import { inter, manrope } from './fonts';

export const metadata: Metadata = {
  title: 'FFIB 2.0',
  description: 'Football Federation Management Platform',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${manrope.variable} h-full antialiased`}>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
