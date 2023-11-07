'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import {
 Availability,
 Copyright,
 SocialLinks,
 ThemeSwitcher,
} from '@/components';
import { GridDiv } from '@/components/ui';

type NavbarData = {
 items: { title: string; slug: string; _key: string }[];
};

export default function Footer() {
 const [data, setData] = useState<NavbarData | null>(null);

 //  Fetch data from api Route Handler (api/navbar)
 useEffect(() => {
  const fetchData = async () => {
   const response = await fetch('/api/navbar');
   const data = await response.json();
   setData(data);
  };

  fetchData();
 }, []);

 return (
  <GridDiv
   top={true}
   divClass={`px-8 py-64 lg:grid grid-cols-12 max-w-desktop`}
  >
   <nav className='col-span-3'>
    {/* Nav Column */}

    {/* Nav Links */}
    <div className='flex flex-col'>
     <span>Explore</span>
     {data &&
      data.items.map((link) => {
       return (
        <GridDiv
         bottom={true}
         divClass={`relative max-h-32 min-h-32 flex justify-start items-start`}
         key={link._key}
        >
         <Link className='block h-11 group overflow-hidden' href={link.slug}>
          {/* Animated Label */}
          <div className='flex flex-col justify-start items-start group-hover:-translate-y-1/2 transition'>
           <span className='font-headline text-headlineSmall uppercase text-secondary'>
            {link.title}
           </span>
           <span className='font-headline text-headlineSmall uppercase text-secondary'>
            {link.title}
           </span>
          </div>
         </Link>
        </GridDiv>
       );
      })}
    </div>
    {/* Social Column */}
    <div className='flex flex-col mt-16'>
     <SocialLinks />
    </div>
   </nav>

   {/* Availability / Contact */}
   <div className='col-start-9 col-span-4 flex flex-col items-start mt-32 lg:mt-0 gap-32'>
    <Availability />

    <ThemeSwitcher />
   </div>

   {/* Copyright */}
   <Copyright />
  </GridDiv>
 );
}
