import { Header } from '@/components';
import '@/styles/styles.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
 title: 'Juli Scapucin',
 description: 'Front-End Developer based in Amsterdam',
};

export default function RootLayout({
 children,
}: {
 children: React.ReactNode;
}) {
 return (
  <html lang='en'>
   <body className={inter.className}>
    <Header />
    <main>{children}</main>
   </body>
  </html>
 );
}
