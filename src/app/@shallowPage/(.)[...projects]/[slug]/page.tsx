'use client';

import Image from 'next/image';
import { CustomImage, ShallowPage } from '@/components';
import { createRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Page({ params }: any) {
 const title = createRef<HTMLHeadingElement>();
 const left = createRef<HTMLDivElement>();
 const right = createRef<HTMLDivElement>();
 const left2 = createRef<HTMLDivElement>();
 const right2 = createRef<HTMLDivElement>();

 useEffect(() => {
  ScrollTrigger.create({
   scroller: '.scroll-trigger',
   trigger: left.current,
   start: 'top top',
   end: 'bottom bottom',
   scrub: true,
   pin: right.current,
  });
 }, [left, right]);

 useEffect(() => {
  ScrollTrigger.create({
   scroller: '.scroll-trigger',
   trigger: right2.current,
   start: 'top top',
   end: 'bottom bottom',
   scrub: true,
   pin: left2.current,
  });
 }, [left2, right2]);

 return (
  <ShallowPage>
   {/* Project header */}
   <section className='relative w-screen h-screen'>
    <div className={`relative h-full w-full overflow-hidden`}>
     <Image
      src='/pool.avif'
      alt='photo'
      className='object-cover '
      sizes='(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw'
      fill
      priority
     />
    </div>
   </section>
   <section className='px-8 py-16 bg-colorWhite dark:bg-colorBlack'>
    <h1 className='text-7xl'>{params.slug} intercepted</h1>
    <p>
     Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae impedit
     obcaecati temporibus cum. Laudantium ad voluptatem consequuntur. Omnis
     quasi, accusamus optio ab aliquid deleniti ut. Ipsam excepturi nam vitae
     sit.
    </p>
    <p>
     Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae impedit
     obcaecati temporibus cum. Laudantium ad voluptatem consequuntur. Omnis
     quasi, accusamus optio ab aliquid deleniti ut. Ipsam excepturi nam vitae
     sit.
    </p>
   </section>
   {/* Split screen */}
   <section className='bg-colorWhite dark:bg-colorBlack'>
    <section className='flex gap-32'>
     <div
      ref={left}
      className='w-1/2 flex-1/2 [&>article]:h-screen [&>article>h2]:text-3xl [&>article>h2]:mb-8'
     >
      <div className='h-screen flex justify-start items-center'>
       <h1 className='text-7xl' ref={title}>
        GSAP ScrollTrigger
       </h1>
      </div>
      <article>
       <h2>Scroll-based Animations</h2>
       <p>
        Easily animate elements as they enter or exit the viewport, or trigger
        animations at specific scroll positions. From simple fade-ins to complex
        parallax effects, ScrollTrigger gives you full control over the timing
        and behavior of your animations.
       </p>
      </article>
      <article>
       <h2>Pinning and Sticky Elements</h2>
       <p>
        Create elements that remain fixed on the screen while the user scrolls.
        Perfect for creating immersive headers, navigation menus, or sidebars
        that stay in view and provide interactive functionality.
       </p>
      </article>
      <article>
       <h2>Scroll-based Progress Indicators</h2>
       <p>
        Use ScrollTrigger to create progress indicators that visualize the users
        progress on a page. Highlighting sections, updating navigation menus, or
        triggering animations based on the scroll progress can all be achieved
        with ease.
       </p>
      </article>
      <article>
       <h2>Responsive and Adaptive Animations</h2>
       <p>
        ScrollTrigger seamlessly adapts to different screen sizes and
        orientations. You can create animations that respond to the users
        scrolling behavior while providing a consistent and optimized experience
        across devices.
       </p>
      </article>
     </div>
     <div ref={right} className='w-1/2 flex-1/2'>
      <div className='relative h-screen w-full'>
       <CustomImage
        src='/pool.avif'
        alt='pool photo'
        height='h-screen'
        width='w-full'
       />
      </div>
     </div>
    </section>
    <section className='flex gap-32'>
     <div ref={left2} className='w-1/2 flex-1/2'>
      <CustomImage
       src='/pool.avif'
       alt='pool photo'
       height='h-screen'
       width='w-full'
       divClass='absolute top-0 left-0'
      />
      <CustomImage
       src='/pool2.avif'
       alt='pool photo'
       height='h-screen'
       width='w-full'
       divClass='absolute top-0 left-0'
      />
      <CustomImage
       src='/bus.avif'
       alt='pool photo'
       height='h-screen'
       width='w-full'
       divClass='absolute top-0 left-0'
      />
      <CustomImage
       src='/door.avif'
       alt='pool photo'
       height='h-screen'
       width='w-full'
       divClass='absolute top-0 left-0'
      />
      <CustomImage
       src='/parking.avif'
       alt='pool photo'
       height='h-screen'
       width='w-full'
       divClass='absolute top-0 left-0'
      />
     </div>
     <div
      ref={right2}
      className='w-1/2 flex-1/2 [&>article]:h-screen [&>article>h2]:text-3xl [&>article>h2]:mb-8'
     >
      <div className='h-screen flex justify-start items-center'>
       <h1 className='text-7xl' ref={title}>
        GSAP ScrollTrigger
       </h1>
      </div>
      <article>
       <h2>Scroll-based Animations</h2>
       <p>
        Easily animate elements as they enter or exit the viewport, or trigger
        animations at specific scroll positions. From simple fade-ins to complex
        parallax effects, ScrollTrigger gives you full control over the timing
        and behavior of your animations.
       </p>
      </article>
      <article>
       <h2>Pinning and Sticky Elements</h2>
       <p>
        Create elements that remain fixed on the screen while the user scrolls.
        Perfect for creating immersive headers, navigation menus, or sidebars
        that stay in view and provide interactive functionality.
       </p>
      </article>
      <article>
       <h2>Scroll-based Progress Indicators</h2>
       <p>
        Use ScrollTrigger to create progress indicators that visualize the users
        progress on a page. Highlighting sections, updating navigation menus, or
        triggering animations based on the scroll progress can all be achieved
        with ease.
       </p>
      </article>
      <article>
       <h2>Responsive and Adaptive Animations</h2>
       <p>
        ScrollTrigger seamlessly adapts to different screen sizes and
        orientations. You can create animations that respond to the users
        scrolling behavior while providing a consistent and optimized experience
        across devices.
       </p>
      </article>
     </div>
    </section>
   </section>
  </ShallowPage>
 );
}
