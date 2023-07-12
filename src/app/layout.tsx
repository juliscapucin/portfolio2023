import { Header } from '@/components';
import '@/styles/styles.css';
import { Inter } from 'next/font/google';

//don't get what this is, figure out later
// const inter = Inter({ subsets: ['latin'] });

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
   <body
    className={`relative m-10 mt-0 max-w-[2000px] font-text font-extralight bg-colorBlack text-colorWhite mx-auto`}
   >
    <Header />
    {children}
   </body>
  </html>
 );
}
