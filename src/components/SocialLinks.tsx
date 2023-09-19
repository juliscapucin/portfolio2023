import Link from 'next/link';

import { socials } from '@/constants';
import { GridDiv } from '.';

export default function SocialLinks() {
 return (
  <>
   <span>{socials.title}</span>
   {socials.links.map((link) => {
    return (
     <GridDiv
      bottom={true}
      divClass={`relative max-h-32 min-h-32 flex justify-start items-start`}
      key={link.id}
     >
      <Link
       className='block h-11 group overflow-hidden'
       href={link.url}
       target='_blank'
      >
       {/* Animated Label */}
       <div className='flex flex-col justify-start items-start group-hover:-translate-y-1/2 transition'>
        <span className='font-headline text-headlineSmall uppercase text-colorBlack dark:text-colorWhite'>
         {link.label}
        </span>
        <span className='font-headline text-headlineSmall uppercase text-colorBlack dark:text-colorWhite'>
         {link.label}
        </span>
       </div>
      </Link>
     </GridDiv>
    );
   })}
  </>
 );
}
