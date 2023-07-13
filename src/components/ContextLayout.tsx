'use client';

import { Header, Modal } from '@/components';
import { useCustomContext } from '@/context';

export default function ContextLayout({
 children,
}: {
 children: React.ReactNode;
}) {
 return (
  <body
   className={`relative m-10 mt-0 max-w-[2000px] font-text font-extralight bg-colorBlack text-colorWhite mx-auto overflow-hidden`}
  >
   <Header />
   <div className='header-spacer h-16'></div>
   {children}
   <Modal containerClass={`w-full h-screen`}>
    <h1>Hello</h1>
   </Modal>
  </body>
 );
}
