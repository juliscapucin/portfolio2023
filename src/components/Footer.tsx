import Link from 'next/link';
import { GridDiv } from '.';

import { footer } from '@/constants';

export default function Footer() {
 return (
  <GridDiv
   top={false}
   right={true}
   bottom={true}
   left={true}
   divClass={`px-8 py-16 lg:grid grid-cols-12`}
  >
   {/* White Space */}
   <div className='col-span-1'></div>
   <nav className='lg:grid grid-cols-7 col-span-7'>
    {/* Nav Column */}
    {footer.map((item, index) => {
     return (
      <div className='col-span-3 lg:grid grid-cols-3' key={item.id}>
       <div
        className={`col-span-2 flex flex-col ${index > 0 && 'mt-16 lg:mt-0'}`}
       >
        <span>{item.title}</span>
        {/* Nav Links */}
        {item.links.map((link) => {
         return (
          <GridDiv
           bottom={true}
           divClass={`relative max-h-32 min-h-32 flex justify-start items-start`}
           key={link.id}
          >
           <Link className='block h-11 group overflow-hidden' href={link.url}>
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
       </div>

       {/* White Space */}
       <div className='col-span-1' key={index}></div>
      </div>
     );
    })}
   </nav>
   {/* Availability / Contact */}
   <div className='col-span-3 flex flex-col items-start mt-16 lg:mt-0'>
    <span className='text-headlineSmall'>Available November 2023</span>
    <a href='mailto:hello@juliscapucin.com' className='text-displaySmall'>
     Say Hi :)
    </a>
   </div>
  </GridDiv>
 );
}
