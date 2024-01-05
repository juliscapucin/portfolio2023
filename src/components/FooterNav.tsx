'use client';

import { useEffect, useRef, useState } from 'react';

import { AnimatedLinkLabel, GridDiv } from '@/components/ui';
import { useLinkReveal } from '@/hooks';

import { usePageContext } from '@/context';
import { NavLink } from '@/types';

type Props = {
 variant: string; //to animate differently
 modalOpen?: boolean;
};

export default function FooterNav({ variant, modalOpen }: Props) {
 const [data, setData] = useState<NavLink[] | null>(null);
 const wrapperRef = useRef(null);

 const { transitionOnClick } = usePageContext();

 //  Fetch data from api Route Handler (api/...)
 useEffect(() => {
  const fetchData = async () => {
   const response = await fetch(`/api/navbar`);
   const data = await response.json();

   setData(data.items);
  };

  fetchData();
 }, []);

 // Animation on scroll
 useLinkReveal(wrapperRef, variant, modalOpen);

 return (
  <>
   {data && (
    <div ref={wrapperRef} className='overflow-hidden'>
     {data.map((link) => {
      if (!link.slug && !link.url) return;

      return (
       <GridDiv
        bottom={true}
        divClass='relative max-h-32 min-h-32 flex justify-start items-start'
        key={link.order}
       >
        <button
         className='block h-11 group overflow-hidden'
         // onClick={() => transitionOnClick(link)}
        >
         <AnimatedLinkLabel title={link.label} />
        </button>
       </GridDiv>
      );
     })}
    </div>
   )}
  </>
 );
}
