import { Header, Modal } from '@/components';
import { ModalContextProvider, TransitionContextProvider } from '@/context';

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
   <ModalContextProvider>
    <body
     className={`relative m-8 mt-0 max-w-[2000px] font-text font-extralight bg-colorBlack text-colorWhite mx-auto overflow-hidden`}
    >
     <Header />
     <div className='header-spacer h-16'></div>
     <TransitionContextProvider>
      <main className='p-8'>{children}</main>
     </TransitionContextProvider>
     <Modal containerClass={`w-full h-screen`}>
      <h1>Hello</h1>
     </Modal>
    </body>
   </ModalContextProvider>
  </html>
 );
}
