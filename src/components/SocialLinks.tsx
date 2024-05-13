'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

import { AnimatedLinkLabel, GridDiv } from '@/components/ui';
import { useLinkReveal } from '@/hooks';

type SocialsData = {
 title: string;
 items: [{ title: string; slug?: string; url?: string; _key: string }];
};

type Props = {
 variant: string; //to animate differently
 modalOpen?: boolean;
};

export default function SocialLinks({ variant, modalOpen }: Props) {
 const [data, setData] = useState<SocialsData | null>(null);
 const wrapperRef = useRef(null);

 //  Fetch data from api Route Handler (api/...)
 useEffect(() => {
  const fetchData = async () => {
   const response = await fetch(`/api/socials`);
   const data = await response.json();

   setData(data);
  };

  fetchData();
 }, []);

 // Animation on scroll
 useLinkReveal(wrapperRef, variant, modalOpen);

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
        divClass='relative h-16 flex justify-start items-center'
        key={link._key}
       >
        <Link
         className='block h-11 group overflow-hidden'
         href={url!}
         target='_blank'
        >
         <AnimatedLinkLabel title={link.title} />
        </Link>
       </GridDiv>
      );
     })}
    </div>
   )}
  </>
 );
}
