'use client';

import { use, useEffect, useState } from 'react';
import gsap from 'gsap';

export function useToggle(
 initialState: boolean,
 element: HTMLDivElement | null
) {
 const [open, setOpen] = useState(initialState);
 const [addBackground, setAddBackground] = useState(false);
 const translateX = open ? '0px' : '184px';

 const toggle = () => {
  setOpen(!open);
 };

 useEffect(() => {
  if (!element) return;

  gsap.set(element, {
   x: translateX,
   opacity: 1,
  });
 }, [element]);

 useEffect(() => {
  if (!element) return;

  if (open) {
   setAddBackground(true);
   gsap.to(element, {
    duration: 0.5,
    x: translateX,
    ease: 'expo.out',
   });
  } else {
   gsap.to(element, {
    duration: 0.5,
    x: translateX,
    ease: 'expo.out',
    onComplete: () => {
     setAddBackground(false);
    },
   });
  }
 }, [open]);

 return { open, addBackground, toggle };
}
