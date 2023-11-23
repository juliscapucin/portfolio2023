'use client';

import Image from 'next/image';

import { useRef } from 'react';
import { Footer, Services } from '@/components';
import { Title } from '@/components/ui';
import { useElementReveal, useEnterTransitionDirection } from '@/hooks';

type AboutData = {
 title: string;
 description: string;
 content1: [{ _key: string; children: { text: string }[] }];
 content2: [{ children: { text: string }[] }];
 coverImage: string;
 services: string[];
};

export default function AboutPage({ data }: { data: AboutData }) {
 const pageRef = useRef(null);
 const imageWrapperRef = useRef(null);

 useEnterTransitionDirection(pageRef);
 useElementReveal(imageWrapperRef, 0.8);

 return (
  data && (
   <div ref={pageRef} className='page about-page pt-64'>
    {/* Title */}
    <Title title={data.title} />
    <div className='lg:grid grid-cols-12'>
     {/* Image */}
     <div
      ref={imageWrapperRef}
      className='col-span-6 aspect-square overflow-hidden relative mt-4 mb-8 lg:mb-0'
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
      <p className='text-titleLarge md:text-headlineSmall col-span-5 mt-4'>
       {data.description}
      </p>

      {/* Paragraphs */}
      <div className='mt-32'>
       {data.content1.map((paragraph) => (
        <p key={paragraph._key}>{paragraph.children[0].text}</p>
       ))}
      </div>
     </div>
     {/* Heads up */}
     <p className='col-start-4 col-span-6 my-64 text-titleLarge md:text-headlineSmall text-center'>
      {data.content2[0].children[0].text}
     </p>
    </div>
    {/* <Services services={data.services} /> */}
    {/* <Experience experience={experience} /> */}
    <Footer />
   </div>
  )
 );
}
