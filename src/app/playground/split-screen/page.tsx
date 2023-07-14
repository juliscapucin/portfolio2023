'use client';

import Image from 'next/image';
import { createRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { GSDevTools } from 'gsap/GSDevTools';
import { SplitText } from 'gsap/SplitText';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(GSDevTools, SplitText, ScrollTrigger);

export default function Page() {
 const title = createRef<HTMLHeadingElement>();
 const left = createRef<HTMLDivElement>();
 const right = createRef<HTMLDivElement>();
 const left2 = createRef<HTMLDivElement>();
 const right2 = createRef<HTMLDivElement>();
 const animation = gsap.timeline({});

 useEffect(() => {
  const split = new SplitText(title.current, { type: 'chars' });

  animation.from(split.chars, {
   opacity: 0,
   y: 50,
   ease: 'back(1)',
   stagger: {
    from: 'start', //try "center" and "edges"
    each: 0.02,
   },
  });
  GSDevTools.create({ animation: animation });
 }, [title]);

 useEffect(() => {
  ScrollTrigger.create({
   trigger: left.current,
   start: 'top top',
   end: 'bottom bottom',
   scrub: true,
   pin: right.current,
  });
 }, [left, right]);

 useEffect(() => {
  ScrollTrigger.create({
   trigger: right2.current,
   start: 'top top',
   end: 'bottom bottom',
   scrub: true,
   pin: left2.current,
  });
 }, [left2, right2]);

 return (
  <main>
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
       Use ScrollTrigger to create progress indicators that visualize the user's
       progress on a page. Highlighting sections, updating navigation menus, or
       triggering animations based on the scroll progress can all be achieved
       with ease.
      </p>
     </article>
     <article>
      <h2>Responsive and Adaptive Animations</h2>
      <p>
       ScrollTrigger seamlessly adapts to different screen sizes and
       orientations. You can create animations that respond to the user's
       scrolling behavior while providing a consistent and optimized experience
       across devices.
      </p>
     </article>
    </div>
    <div ref={right} className='w-1/2 flex-1/2'>
     <div className='relative h-screen w-full'>
      <Image
       src='/pool.avif'
       alt='photo'
       className='object-cover'
       sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
       fill
      />
     </div>
    </div>
   </section>
   <section className='flex gap-32'>
    <div ref={left2} className='w-1/2 flex-1/2'>
     <div className='relative h-screen w-full'>
      <Image
       src='/pool.avif'
       alt='photo'
       className='object-cover'
       sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
       fill
      />
     </div>
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
       Use ScrollTrigger to create progress indicators that visualize the user's
       progress on a page. Highlighting sections, updating navigation menus, or
       triggering animations based on the scroll progress can all be achieved
       with ease.
      </p>
     </article>
     <article>
      <h2>Responsive and Adaptive Animations</h2>
      <p>
       ScrollTrigger seamlessly adapts to different screen sizes and
       orientations. You can create animations that respond to the user's
       scrolling behavior while providing a consistent and optimized experience
       across devices.
      </p>
     </article>
    </div>
   </section>
  </main>
 );
}
