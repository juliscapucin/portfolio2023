import { useEffect, useState } from 'react';
import Link from 'next/link';

import { GridDiv } from '@/components/ui';

type SocialsData = {
 title: string;
 items: [{ title: string; url: string; _key: string }];
};

export default function SocialLinks() {
 const [data, setData] = useState<SocialsData | null>(null);

 //  Fetch data from api Route Handler (api/socials)
 useEffect(() => {
  const fetchData = async () => {
   const response = await fetch('/api/socials');
   const data = await response.json();
   setData(data);
  };

  fetchData();
 }, []);

 return (
  <>
   {data ? (
    <>
     <span>{data.title}</span>
     {data.items.map((link) => {
      return (
       <GridDiv
        bottom={true}
        divClass={`relative max-h-32 min-h-32 flex justify-start items-start`}
        key={link._key}
       >
        <Link
         className='block h-11 group overflow-hidden'
         href={link.url}
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
    </>
   ) : (
    <h1>Loading...</h1>
   )}
  </>
 );
}
