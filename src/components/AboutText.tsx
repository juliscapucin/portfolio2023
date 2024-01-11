import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { SplitText } from 'gsap/dist/SplitText';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useWindowResize } from '@/hooks';

export default function AboutText() {
 const textRef = useRef<HTMLParagraphElement | null>(null);

 const { width } = useWindowResize();

 useEffect(() => {
  if (!textRef.current) return;

  gsap.registerPlugin(SplitText);
  gsap.registerPlugin(ScrollTrigger);

  // Create a new SplitText instance
  const splitText = new SplitText(textRef.current, {
   type: 'lines',
  });

  let ctx = gsap.context(() => {});

  ctx.add(() => {
   // Create timeline + start scrollTrigger
   let tl = gsap.timeline({
    scrollTrigger: {
     trigger: textRef.current,
     start: 'top 50%',
     toggleActions: 'play none none reverse',
    },
    onComplete: () => {
     tl.revert();
    },
   });

   // Animate each line
   tl.fromTo(
    splitText.lines,
    { opacity: 0, yPercent: 200 },
    { opacity: 1, yPercent: 0, stagger: 0.2, ease: 'back.out(1)' }
   );
  });

  return () => {
   console.log('unmount');
   ctx.revert();
  };
 }, [width, textRef]);

 return (
  <section className='xl:grid grid-cols-12 my-64'>
   <p
    ref={textRef}
    className='ml-auto mr-0 xl:ml-0 xl:mr-auto max-w-1/2 col-start-7 col-span-5 text-titleMedium sm:text-headlineMedium'
   >
    I&apos;m a Front-End Developer with a broad background in Graphic and
    Digital Design. Commitment to visual excellence and engineering performance
    is part of my DNA.
   </p>
  </section>
 );
}
