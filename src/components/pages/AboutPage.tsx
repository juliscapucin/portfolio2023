'use client';

import Image from 'next/image';

import { useRef } from 'react';
import { usePageContext } from '@/context';
import { Footer, Expertise } from '@/components';
import { GridDiv, Marquee, Title } from '@/components/ui';
import {
 useElementReveal,
 useEnterTransitionDirection,
 useFakeParallax,
 useMediaQuery,
} from '@/hooks';
import { breakpoints } from '@/constants';

type AboutData = {
 title: string;
 description: string;
 content1: [{ _key: string; children: { text: string }[] }];
 content2: [{ children: { text: string }[] }];
 coverImage: string;
 services: string[];
};

export default function AboutPage({ data }: { data: AboutData }) {
 const { pageRef } = usePageContext();
 const imageWrapperRef = useRef(null);
 const parallaxRef = useRef(null);

 // Set breakpoint for mobile/desktop (values are in constants.ts)
 const breakpoint = useMediaQuery(breakpoints.desktop);

 useEnterTransitionDirection(pageRef);
 useElementReveal(imageWrapperRef.current, false, 0.8);
 useFakeParallax(parallaxRef.current, breakpoint);

 return (
  data && (
   <div ref={pageRef} className='page about-page pt-64'>
    <div ref={parallaxRef}>
     {/* Title */}
     <Title title={data.title} />
     <div className='lg:grid grid-cols-12'>
      {/* Image */}
      <div
       ref={imageWrapperRef}
       className='col-span-6 aspect-square overflow-clip relative mt-4 mb-8 lg:mb-0'
      >
       {/* Need to add mask class here for useElementReveal hook */}
       <div className='mask absolute top-0 left-0 w-full h-full bg-primary z-20'></div>
       <Image
        src='/juli.avif'
        alt='photo'
        className='h-32 w-full object-cover border border-primary' //add border to avoid halo around image
        sizes='(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw'
        fill
        priority
       />
      </div>
      <div className='col-span-1'></div>
      <div className='col-span-4'>
       {/* Subtitle */}
       <p className='text-titleLarge md:text-headlineSmall col-span-5 mt-16 lg:mt-4'>
        {data.description}
       </p>

       {/* Paragraphs */}
       <div className='mt-32'>
        {data.content1.map((paragraph) => (
         <p key={paragraph._key}>{paragraph.children[0].text}</p>
        ))}
       </div>
      </div>

      {/* Marquee */}
      <GridDiv
       divClass='col-span-full row-span-1 flex items-center py-16 mt-48 lg:mt-64'
       top={true}
      >
       <Marquee speed={150}>
        <h2 className='text-displaySmall xl:text-displayMedium font-normal whitespace-nowrap px-4'>
         Design & Web Development Design & Web Development
        </h2>
        <h2 className='text-displaySmall xl:text-displayMedium font-normal whitespace-nowrap px-4'>
         Design & Web Development Design & Web Development
        </h2>
       </Marquee>
      </GridDiv>

      {/* Expertise */}
      <Expertise />

      {/* Heads up */}
      <GridDiv divClass='col-span-12 mt-64' top={true}>
       <p className='w-1/2 m-auto my-64 text-titleLarge md:text-headlineSmall text-center'>
        {data.content2[0].children[0].text}
       </p>
      </GridDiv>
     </div>
     {/* <Experience experience={experience} /> */}
     <Footer />
    </div>
   </div>
  )
 );
}
