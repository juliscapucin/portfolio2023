'use client';

import { useModalContext } from '@/context';

export default function ContactModal() {
 const { modalOpen, setModalOpen, updateModalOpen } = useModalContext();

 return (
  <aside
   className={`w-full max-w-desktop h-1/2 dark:bg-colorBlack border dark:border-colorWhite fixed top-full mx-8 p-8 z-20 transition-transform ${
    modalOpen ? '-translate-y-full' : ''
   }`}
  >
   <button className='absolute top-8 right-8' onClick={updateModalOpen}>
    X
   </button>
   <h2>Hello</h2>
  </aside>
 );
}
