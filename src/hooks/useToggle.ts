'use client';

import { useLayoutEffect, useState } from 'react';
import gsap from 'gsap';

export function useToggle(
   initialState: boolean,
   element: HTMLDivElement | null
) {
   const [open, setOpen] = useState(initialState);
   const [addBackground, setAddBackground] = useState(false);

   const toggle = () => {
      setOpen(!open);
   };

   useLayoutEffect(() => {
      if (!element) return;

      gsap.set(element, {
         xPercent: 83,
         opacity: 1,
      });
   }, [element]);

   useLayoutEffect(() => {
      if (!element) return;

      if (open) {
         setAddBackground(true);
         gsap.to(element, {
            duration: 0.5,
            xPercent: 0,
            ease: 'expo.out',
         });
      } else {
         gsap.to(element, {
            duration: 0.5,
            xPercent: 83,
            ease: 'expo.out',
            onComplete: () => {
               setAddBackground(false);
            },
         });
      }
   }, [open]);

   return { open, addBackground, toggle };
}
