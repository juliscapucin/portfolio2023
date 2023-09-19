'use client';

import { useModalContext } from '@/context';
import { SocialLinks } from '.';
import ButtonClose from '@buttons/ButtonClose';

export default function ContactModal() {
 const { modalOpen, setModalOpen, updateModalOpen } = useModalContext();

 return (
  <aside
   className={`w-full max-w-desktop h-1/2 bg-colorWhite dark:bg-colorBlack fixed top-full mx-auto px-8 z-20 transition-transform ${
    modalOpen ? '-translate-y-full' : ''
   }`}
  >
   <div className='border border-colorBlack dark:border-colorWhite h-full p-8 relative'>
    <div className='absolute top-8 right-8' onClick={updateModalOpen}>
     <ButtonClose action={() => updateModalOpen} />
    </div>
    <SocialLinks />
   </div>
  </aside>
 );
}
