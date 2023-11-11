'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { SplitText } from 'gsap/dist/SplitText';
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
  <GridDiv divClass='h-full w-full overflow-hidden' top={true}>
   <h2
    ref={textRef}
    className='text-displaySmall md:text-displayMedium lg:text-displayLarge mt-16 lg:mt-64 lg:ml-4 opacity-0'
   >
    {title}
   </h2>
  </GridDiv>
 );
}
