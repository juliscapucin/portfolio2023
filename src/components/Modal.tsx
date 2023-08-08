'use client';

import { useModalContext } from '@/context';

interface ModalProps {
 top?: boolean;
 right?: boolean;
 bottom?: boolean;
 left?: boolean;
 children: React.ReactNode;
 containerClass?: string;
}

export default function Modal({
 top,
 right,
 bottom,
 left,
 children,
 containerClass,
}: ModalProps) {
 const { modalOpen, setModalOpen, updateModalOpen } = useModalContext();

 return (
  <aside
   className={`dark:bg-colorBlack border dark:border-colorWhite fixed top-0 p-8 z-50 transition-transform ${
    modalOpen ? 'translate-y-1/2' : 'translate-y-full'
   } ${containerClass}`}
  >
   <button className='absolute top-8 right-8' onClick={updateModalOpen}>
    X
   </button>
   {children}
  </aside>
 );
}
