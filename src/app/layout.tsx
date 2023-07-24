import { Header, Modal } from '@/components';
import { ModalContextProvider, TransitionContextProvider } from '@/context';

import '@/styles/styles.css';

export const metadata = {
 title: 'Juli Scapucin',
 description: 'Front-End Developer based in Amsterdam',
};

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
     <TransitionContextProvider>
      <main className='relative'>
       {props.children}
       {props.shallowPage}
      </main>
     </TransitionContextProvider>
     <Modal containerClass={`w-full h-screen`}>
      <h1>Hello</h1>
     </Modal>
    </body>
   </ModalContextProvider>
  </html>
 );
}
