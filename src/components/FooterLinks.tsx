'use client';

import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import Link from 'next/link';

import { GridDiv } from '@/components/ui';
import { useLinkReveal } from '@/hooks';

type SocialsData = {
 title: string;
 items: [{ title: string; slug?: string; url?: string; _key: string }];
};

export default function FooterLinks({ apiRoute }: { apiRoute: string }) {
 const [data, setData] = useState<SocialsData | null>(null);
 const wrapperRef = useRef(null);

 //  Fetch data from api Route Handler (api/socials)
 useEffect(() => {
  const fetchData = async () => {
   const response = await fetch(`/api/${apiRoute}`);
   const data = await response.json();

   setData(data);
  };

  fetchData();
 }, []);

 useLinkReveal(wrapperRef);

 return (
  <>
   {data && (
    <div ref={wrapperRef} className='overflow-hidden'>
     <span>{data.title}</span>
     {data.items.map((link) => {
      if (!link.slug && !link.url) return;
      const url = link.slug ? link.slug : link.url;

      return (
       <GridDiv
        bottom={true}
        divClass='relative max-h-32 min-h-32 flex justify-start items-start'
        key={link._key}
       >
        <Link
         className='block h-11 group overflow-hidden'
         href={url!}
         target='_blank'
        >
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
   )}
  </>
 );
}
