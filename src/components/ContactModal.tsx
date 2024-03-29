'use client';

import { useEffect, useRef } from 'react';

import { useModalContext } from '@/context';
import { Availability, Copyright, SocialLinks } from '@/components';
import { GridDiv } from '@/components/ui';
import { ButtonClose } from '@buttons/.';

export default function ContactModal() {
 const { modalOpen, setModalOpen, updateModalOpen } = useModalContext();
 const modalRef = useRef<HTMLDivElement>(null);

 // Close modal on escape
 useEffect(() => {
  if (!modalOpen) return;

  const closeOnEscape = (e: KeyboardEvent) => {
   if (e.key === 'Escape') setModalOpen(false);
  };

  window.addEventListener('keydown', closeOnEscape);

  return () => {
   window.removeEventListener('keydown', closeOnEscape);
  };
 }, [modalOpen]);

 // Close modal on outside click
 useEffect(() => {
  if (!modalRef.current || !modalOpen) return;

  const modalElement = modalRef.current;

  const handleClickOutside = (e: MouseEvent) => {
   if (!modalElement.contains(e.target as Node)) {
    setModalOpen(false);
   }
  };

  window.addEventListener('mousedown', handleClickOutside);

  return () => {
   window.removeEventListener('mousedown', handleClickOutside);
  };
 }, [modalRef, modalOpen]);

 return (
  <aside
   ref={modalRef}
   className={`w-full max-w-desktop h-1/2 bg-primary fixed top-full mx-auto px-8 border-0 z-20 transition-transform ${
    modalOpen ? '-translate-y-full' : ''
   }`}
  >
   <GridDiv divClass='lg:flex justify-between items-center h-full p-8 border-t-[1px] border-secondary'>
    <div className='absolute top-8 right-0' onClick={updateModalOpen}>
     <ButtonClose action={() => updateModalOpen} />
    </div>
    <div className='ml-16 lg:w-2/12'>
     <SocialLinks variant={'modal'} modalOpen={modalOpen} />
    </div>

    <div className='mb-16 lg:mb-0 mr-16 overflow-hidden'>
     <Availability variant='modal' modalOpen={modalOpen} />
    </div>
   </GridDiv>
  </aside>
 );
}
