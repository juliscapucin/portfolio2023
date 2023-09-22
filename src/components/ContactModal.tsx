'use client';

import { useModalContext } from '@/context';
import { SocialLinks } from '.';
import { ButtonClose } from '@buttons/.';
import Availability from './Availability';

export default function ContactModal() {
 const { modalOpen, setModalOpen, updateModalOpen } = useModalContext();

 return (
  <aside
   className={`w-full max-w-desktop h-1/2 bg-primary fixed top-full mx-auto px-8 z-20 transition-transform ${
    modalOpen ? '-translate-y-full' : ''
   }`}
  >
   <div className='block lg:grid grid-cols-12 items-center border border-secondary h-full p-16 relative'>
    <div className='absolute top-8 right-8' onClick={updateModalOpen}>
     <ButtonClose action={() => updateModalOpen} />
    </div>
    <div className='col-span-2'></div>
    <div className='mb-16 lg:mb-0 col-span-3 overflow-hidden'>
     <Availability />
    </div>
    <div className='col-span-1'></div>
    <div className='col-span-3'>
     <SocialLinks />
    </div>
   </div>
  </aside>
 );
}
