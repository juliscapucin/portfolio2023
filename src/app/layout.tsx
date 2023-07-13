import { Header } from '@/components';
import { ContextProvider } from '@/context';

import '@/styles/styles.css';

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
    <ContextProvider>
     <Header />
     <div className='header-spacer h-16'></div>
     {children}
    </ContextProvider>
   </body>
  </html>
 );
}
