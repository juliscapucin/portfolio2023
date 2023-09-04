import localFont from 'next/font/local';

import { Header, Modal } from '@/components';
import { ModalContextProvider, PageContextProvider } from '@/context';

import '@/styles/styles.css';

export const metadata = {
 title: 'Juli Scapucin',
 description: 'Front-End Developer based in Amsterdam',
};

// const myFont = localFont({
//  src: [
//   {
//    path: '/fonts/n27-bold-webfont.woff2',
//   },
//  ],
// });

export default function RootLayout(props: {
 children: React.ReactNode;
 shallowPage: React.ReactNode;
}) {
 return (
  <html lang='en'>
   <ModalContextProvider>
    <body
     className={`relative mt-0 max-w-[2000px] font-text font-extralight bg-colorBlack text-colorWhite mx-auto overflow-hidden`}
    >
     <Header />
     <PageContextProvider>
      <main className={`mt-16`}>
       <div className='transition-fullscreen w-screen h-screen top-0 left-0 fixed z-10 hidden pointer-events-none'></div>
       {props.children}
       {props.shallowPage}
      </main>
     </PageContextProvider>
     <Modal containerClass={`w-full h-screen`}>
      <h1>Hello</h1>
     </Modal>
    </body>
   </ModalContextProvider>
  </html>
 );
}
