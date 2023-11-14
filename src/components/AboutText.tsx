import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { SplitText } from 'gsap/dist/SplitText';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function AboutText() {
 const textRef = useRef(null);

 useEffect(() => {
  gsap.registerPlugin(SplitText);
  gsap.registerPlugin(ScrollTrigger);

  // Create a new SplitText instance
  const splitText = new SplitText(textRef.current, {
   type: 'words,chars, lines',
  });

  // Create timeline + start scrollTrigger
  const tl = gsap.timeline({
   scrollTrigger: {
    trigger: textRef.current,
    start: 'top 80%',
    toggleActions: 'play none none reverse',
   },
  });

  // Animate each line
  tl.fromTo(
   splitText.lines,
   { opacity: 0, y: 50 },
   { opacity: 1, y: 0, stagger: 0.1 }
  );
 }, []);

 return (
  <section className='lg:grid grid-cols-12 my-64'>
   <p
    ref={textRef}
    className='col-start-3 col-span-8 text-titleLarge md:text-headlineSmall'
   >
    I&apos;m a Front-End Developer with a broad background in Graphic and
    Digital Design. Commitment to visual excellence and engineering performance
    is part of my DNA.
   </p>
  </section>
 );
}
