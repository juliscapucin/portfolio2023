'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { SplitText } from 'gsap/SplitText';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { animateSplitText } from '@/animations';
import { GridDiv } from '@/components/ui';

interface SectionTitleProps {
 title: string;
}

export default function SectionTitle({ title }: SectionTitleProps) {
 const textRef = useRef(null);

 useEffect(() => {
  if (!textRef.current) return;

  gsap.registerPlugin(SplitText);
  gsap.registerPlugin(ScrollTrigger);

  // Create a new SplitText instance
  const splitText = new SplitText(textRef.current, {
   type: 'words, chars, lines',
  });

  // Create timeline + start scrollTrigger
  const tl = gsap.timeline({
   scrollTrigger: {
    trigger: textRef.current,
    start: 'top 80%',
    //onEnter, onLeave, onEnterBack, onLeaveBack
    onEnter: () => {
     animateSplitText(textRef.current!);
    },
    onLeaveBack: () => {
     gsap.set(textRef.current, { opacity: 0 });
    },
   },
  });
 }, [textRef]);

 return (
  <GridDiv top={true}>
   <div className='h-full w-full flex justify-start items-center overflow-hidden'>
    <h2
     ref={textRef}
     className='text-displaySmall md:text-displayMedium lg:text-displayLarge ml-4 opacity-0'
    >
     {title}
    </h2>
   </div>
  </GridDiv>
 );
}
