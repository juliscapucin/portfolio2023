'use client';

import { forwardRef, useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

type GridDivProps = {
 top?: boolean;
 right?: boolean;
 bottom?: boolean;
 left?: boolean;
 children?: React.ReactNode;
 divClass?: string;
 offsetStart?: string;
 animationDelay?: number;
};

export const GridDiv = forwardRef(function GridDiv(
 { top, right, bottom, left, children, divClass, offsetStart }: GridDivProps,
 ref: React.Ref<HTMLDivElement>,
) {
 const lineTopRef = useRef<HTMLDivElement>(null);
 const lineRightRef = useRef<HTMLDivElement>(null);
 const lineBottomRef = useRef<HTMLDivElement>(null);
 const lineLeftRef = useRef<HTMLDivElement>(null);

 useLayoutEffect(() => {
  if (
   !lineTopRef.current ||
   !lineRightRef.current ||
   !lineBottomRef.current ||
   !lineLeftRef.current
  )
   return;

  const ctx = gsap.context(() => {
   gsap.set(lineTopRef.current, { xPercent: -100 });
   gsap.set(lineBottomRef.current, { xPercent: -100 });
   gsap.set(lineLeftRef.current, { yPercent: -100 });
   gsap.set(lineRightRef.current, { yPercent: -100 });

   const tl = gsap.timeline({
    scrollTrigger: {
     trigger: lineTopRef.current,
     start: `top ${offsetStart ? offsetStart : '100'}%`,
     //onEnter, onLeave, onEnterBack, onLeaveBack
     toggleActions: 'play none none none',
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
     '-=1',
    );
  });

  return () => ctx.revert();
 }, [offsetStart]);

 const borderColor = (isVisible?: boolean) =>
  isVisible ? 'bg-secondary z-5' : 'bg-transparent z-0';

 const lines = [
  {
   key: 'top',
   show: top,
   className: 'absolute top-0 left-0 h-px w-full',
   ref: lineTopRef,
  },
  {
   key: 'right',
   show: right,
   className: 'absolute top-0 right-0 w-px h-full',
   ref: lineRightRef,
  },
  {
   key: 'bottom',
   show: bottom,
   className: 'absolute bottom-0 left-0 h-px w-full',
   ref: lineBottomRef,
  },
  {
   key: 'left',
   show: left,
   className: 'absolute top-0 left-0 w-px h-full',
   ref: lineLeftRef,
  },
 ] as const;

 return (
  <div className={`grid-element relative overflow-clip ${divClass}`} ref={ref}>
   {lines.map((line) => (
    <div
     key={line.key}
     ref={line.ref}
     className={`${line.className} ${borderColor(line.show)}`}
    ></div>
   ))}
   {children}
  </div>
 );
});
