'use client';

import { useEffect } from 'react';
import Image from 'next/image';

import { usePathname } from 'next/navigation';

import { animateToLeft, animateToRight } from '@/animations/pageTransitions';
import { about, navLinks } from '@/constants';
import { usePageContext } from '@/context';
import { Footer, Experience, Services } from '@/components';

export default function Page() {
 const pathname = usePathname();
 const { previousPage, updatePreviousPage } = usePageContext();
 const { title, paragraph1, paragraph2, slug, experience } = about;

 useEffect(() => {
  const actualPage = navLinks.filter(
   (element) => element.slug === pathname.slice(1)
  );

  const previousPageId = navLinks.filter(
   (element) => element.slug === previousPage
  ) || [{ id: 0 }];

  if (
   (actualPage &&
    previousPageId &&
    actualPage[0]?.id > previousPageId[0]?.id) ||
   previousPage === 'home'
  ) {
   animateToLeft(`${slug}-page`);
  } else {
   animateToRight(`${slug}-page`);
  }

  updatePreviousPage(pathname.slice(1));
 }, []);

 return (
  <div className={`${slug}-page opacity-0`}>
   <div className='xl:grid grid-cols-12 my-32'>
    <div className='col-span-5 aspect-square overflow-hidden relative'>
     <Image
      src='/juli.avif'
      alt='photo'
      className='h-32 w-full object-cover'
      sizes='(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw'
      fill
      priority
     />
    </div>
    <div className='col-span-1'></div>
    <div className='col-span-5 md:grid grid-cols-5'>
     {/* Title */}
     <h1 className='text-displaySmall md:text-displayMedium lg:text-displayLarge col-span-5 whitespace-nowrap'>
      {title}
     </h1>

     {/* Subtitle */}
     <p className='text-titleLarge md:text-headlineSmall col-span-3'>
      Im a Front-End Developer with a broad background in Graphic and Digital
      Design. Since 2000 Ive been designing meaningful, memorable, and
      communicative work for companies and professionals worldwide. Commitment
      to visual excellence and engineering performance is part of my DNA.
     </p>
     <div className='col-span-2'></div>

     {/* Paragraphs */}
     <div className='col-span-2'></div>
     <div className='col-span-3 mt-32'>
      <p>
       My clients range from acclaimed brands, art professionals, design
       organisations and editorial platforms, to independent businesses,
       nonprofits and philanthropies.
      </p>
      <p>
       As an individual, I value arts and culture, education and design, free
       expression and social progress. I strive to partner with organisations
       and professionals I trust and admire, to craft brands and products that
       are an enhancement of our lives, not a distraction from it.
      </p>
      <p>
       As a member of a team, I like to actively get involved in its work and
       mission. The same as I build long-lasting products for your clients, I
       believe in building long-lasting partnerships with my job providers.
      </p>
      <p>
       I’m currently freelancing full-time, so if you would like to discuss a
       specific project or simply want to say hi, drop me a line.
      </p>
     </div>

     {/* Heads up */}
     <p className='col-span-3 mt-32'>{paragraph2}</p>
    </div>
    <div className='col-span-1'></div>
   </div>
   <Services project={about} />
   <Experience experience={experience} />
   <Footer />
  </div>
 );
}
