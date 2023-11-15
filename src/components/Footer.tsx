'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Availability, Copyright, FooterLinks } from '@/components';
import { GridDiv } from '@/components/ui';

type NavbarData = {
 items: { title: string; slug: string; _key: string }[];
};

export default function Footer() {
 return (
  <GridDiv
   top={true}
   divClass='pt-32 pb-16 lg:px-4 lg:grid grid-cols-12 max-w-desktop'
  >
   <nav className='col-span-3'>
    {/* Nav Column */}

    {/* Social Column */}
    <div className='flex flex-col mt-16'>
     <FooterLinks apiRoute={'navbar'} />
    </div>
    <div className='flex flex-col mt-16'>
     <FooterLinks apiRoute={'socials'} />
    </div>
   </nav>

   {/* Availability / Contact */}
   <div className='col-start-7 col-span-6 flex flex-col justify-between lg:items-end mt-32 lg:mt-0 gap-32'>
    <Availability />

    {/* Copyright */}
    <Copyright />
   </div>
  </GridDiv>
 );
}
