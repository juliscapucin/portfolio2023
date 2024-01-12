'use client';

import { forwardRef, useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

type GridDivProps = {
 top?: boolean;
 right?: boolean;
 bottom?: boolean;
 left?: boolean;
 children?: React.ReactNode;
 divClass?: string;
 offsetStart?: string;
};

export const GridDiv = forwardRef(function GridDiv(
 { top, right, bottom, left, children, divClass, offsetStart }: GridDivProps,
 ref: React.Ref<HTMLDivElement>
) {
 const lineTopRef = useRef<HTMLDivElement>(null);
 const lineRightRef = useRef<HTMLDivElement>(null);
 const lineBottomRef = useRef<HTMLDivElement>(null);
 const lineLeftRef = useRef<HTMLDivElement>(null);

 let ctx = gsap.context(() => {});

 useLayoutEffect(() => {
  if (
   !lineTopRef.current ||
   !lineRightRef.current ||
   !lineBottomRef.current ||
   !lineLeftRef.current
  )
   return;

  gsap.registerPlugin(ScrollTrigger);

  ctx.add(() => {
   gsap.set(lineTopRef.current, { xPercent: -100 });
   gsap.set(lineBottomRef.current, { xPercent: -100 });
   gsap.set(lineLeftRef.current, { yPercent: -100 });
   gsap.set(lineRightRef.current, { yPercent: -100 });

   const tl = gsap.timeline({
    scrollTrigger: {
     trigger: lineTopRef.current,
     start: `top ${offsetStart ? offsetStart : '100'}%`,
     //onEnter, onLeave, onEnterBack, onLeaveBack
     toggleActions: 'play none none reverse',
    },
   });

   tl
    .to([lineTopRef.current, lineBottomRef.current], {
     xPercent: 0,
     duration: 1,
     delay: 0.2,
     ease: 'expo.out',
     stagger: 0.3,
    })
    .to(
     [lineLeftRef.current, lineRightRef.current],
     {
      yPercent: 0,
      duration: 1,
      ease: 'expo.out',
      stagger: 0.5,
     },
     '-=1'
    );
  });

  return () => {
   ctx.revert();
  };
 }, [lineTopRef, lineRightRef, lineBottomRef, lineLeftRef]);

 return (
  <div className={`grid-element relative overflow-clip ${divClass}`} ref={ref}>
   {top ? (
    <div
     ref={lineTopRef}
     className='line absolute top-0 left-0 h-[1px] w-full bg-secondary z-5'
    ></div>
   ) : (
    <div
     ref={lineTopRef}
     className='line-transparent absolute top-0 left-0 h-[1px] w-full bg-primary z-0'
    ></div>
   )}
   {right ? (
    <div
     ref={lineRightRef}
     className='line absolute top-0 right-0 w-[1px] h-full bg-secondary z-5'
    ></div>
   ) : (
    <div
     ref={lineRightRef}
     className='line-transparent absolute top-0 right-0 w-[1px] h-full bg-primary z-0'
    ></div>
   )}
   {bottom ? (
    <div
     ref={lineBottomRef}
     className='line absolute bottom-0 left-0 h-[1px] w-full bg-secondary z-5'
    ></div>
   ) : (
    <div
     ref={lineBottomRef}
     className='line-transparent absolute bottom-0 left-0 h-[1px] w-full bg-primary z-0'
    ></div>
   )}
   {left ? (
    <div
     ref={lineLeftRef}
     className='line absolute top-0 left-0 w-[1px] h-full bg-secondary z-5'
    ></div>
   ) : (
    <div
     ref={lineLeftRef}
     className='line-transparent absolute top-0 left-0 w-[1px] h-full bg-primary z-0'
    ></div>
   )}
   {children}
  </div>
 );
});
