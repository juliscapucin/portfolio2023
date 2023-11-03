'use client';

import { use, useEffect, useState } from 'react';
import gsap from 'gsap';

export function useToggle(
 initialState: boolean,
 element: HTMLDivElement | null
) {
 const [open, setOpen] = useState(initialState);

 const toggle = () => {
  setOpen(!open);
 };

 useEffect(() => {
  if (!element) return;
  gsap.set(element, {
   x: '195px',
  });
 }, [element]);

 useEffect(() => {
  if (!element) return;

  if (open) {
   gsap.to(element, {
    duration: 0.5,
    x: '0px',
    ease: 'expo.out',
   });
  } else {
   gsap.to(element, {
    duration: 0.5,
    x: '195px',
    ease: 'expo.out',
   });
  }
 }, [open]);

 return { open, toggle };
}
