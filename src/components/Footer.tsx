import Link from 'next/link';
import { GridDiv, SocialLinks } from '.';

import { footer } from '@/constants';
import Availability from './Availability';

export default function Footer() {
 return (
  <GridDiv
   top={true}
   divClass={`px-8 py-16 lg:grid grid-cols-12 max-w-desktop`}
  >
   {/* White Space */}
   <div className='col-span-1'></div>
   <nav className='lg:grid grid-cols-7 col-span-7'>
    {/* Nav Column */}
    <div className='col-span-3 lg:grid grid-cols-3'>
     <div className={`col-span-2 flex flex-col`}>
      <span>{footer.title}</span>
      {/* Nav Links */}
      {footer.links.map((link) => {
       return (
        <GridDiv
         bottom={true}
         divClass={`relative max-h-32 min-h-32 flex justify-start items-start`}
         key={link.id}
        >
         <Link className='block h-11 group overflow-hidden' href={link.url}>
          {/* Animated Label */}
          <div className='flex flex-col justify-start items-start group-hover:-translate-y-1/2 transition'>
           <span className='font-headline text-headlineSmall uppercase text-secondary'>
            {link.label}
           </span>
           <span className='font-headline text-headlineSmall uppercase text-secondary'>
            {link.label}
           </span>
          </div>
         </Link>
        </GridDiv>
       );
      })}
     </div>
    </div>

    {/* Social Column */}
    <div className={`col-span-2 flex flex-col mt-16 lg:mt-0`}>
     <SocialLinks />
    </div>

    {/* White Space */}
    <div className='col-span-1'></div>
   </nav>

   {/* Availability / Contact */}
   <Availability />
  </GridDiv>
 );
}
