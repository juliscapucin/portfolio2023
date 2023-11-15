'use client';

import { useModalContext } from '@/context';
import { Copyright, FooterLinks } from '@/components';
import { GridDiv } from '@/components/ui';
import { ButtonClose } from '@buttons/.';
import Availability from './Availability';

export default function ContactModal() {
 const { modalOpen, setModalOpen, updateModalOpen } = useModalContext();

 return (
  <aside
   className={`w-full max-w-desktop h-1/2 bg-primary fixed top-full mx-auto z-20 transition-transform ${
    modalOpen ? '-translate-y-full' : ''
   }`}
  >
   <GridDiv
    divClass='block lg:flex justify-between items-center h-full p-8 relative'
    top={true}
   >
    <div className='absolute top-8 right-8' onClick={updateModalOpen}>
     <ButtonClose action={() => updateModalOpen} />
    </div>
    <div className='lg:w-2/12'>
     <FooterLinks apiRoute={'socials'} />
    </div>

    <div className='mb-16 lg:mb-0 overflow-hidden'>
     <Availability />
    </div>
    <Copyright />
   </GridDiv>
  </aside>
 );
}
