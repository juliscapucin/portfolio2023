'use client';

import { use, useEffect, useState } from 'react';
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

 useEffect(() => {
  if (!element) return;

  gsap.set(element, {
   x: '184px',
  });
 }, [element]);

 useEffect(() => {
  if (!element) return;

  if (open) {
   setAddBackground(true);
   gsap.to(element, {
    duration: 0.5,
    x: '0px',
    ease: 'expo.out',
   });
  } else {
   gsap.to(element, {
    duration: 0.5,
    x: '184px',
    ease: 'expo.out',
    onComplete: () => {
     setAddBackground(false);
    },
   });
  }
 }, [open]);

 return { open, addBackground, toggle };
}
