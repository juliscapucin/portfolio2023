'use client';

import Image from 'next/image';

import { usePathname } from 'next/navigation';

import { usePageContext } from '@/context';
import { Footer, Services } from '@/components';
import { Title } from '@/components/ui';
import { useEnterTransitionDirection } from '@/hooks';

type AboutData = {
 title: string;
 description: string;
 content1: [{ _key: string; children: { text: string }[] }];
 content2: [{ children: { text: string }[] }];
 coverImage: string;
 services: string[];
};

export default function AboutPage({ data }: { data: AboutData }) {
 useEnterTransitionDirection();

 return (
  <>
   {data ? (
    <div className={`page about-page`}>
     <div className='md:grid grid-cols-12 my-32'>
      <div className='col-span-5 aspect-square overflow-hidden relative mb-8 lg:mb-0'>
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
       <Title title={data.title} />

       {/* Subtitle */}
       <p className='text-titleLarge md:text-headlineSmall col-span-3 mt-4 lg:mt-0'>
        {data.description}
       </p>
       <div className='col-span-2'></div>

       {/* Paragraphs */}
       <div className='col-span-2'></div>
       <div className='col-span-3 mt-32'>
        {data.content1.map((paragraph) => (
         <p key={paragraph._key}>{paragraph.children[0].text}</p>
        ))}
       </div>

       {/* Heads up */}
       <p className='col-span-3 mt-32'>{data.content2[0].children[0].text}</p>
      </div>
      <div className='col-span-1'></div>
     </div>
     <Services services={data.services} />
     {/* <Experience experience={experience} /> */}
     <Footer />
    </div>
   ) : (
    <h1>loading...</h1>
   )}
  </>
 );
}
