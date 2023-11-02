import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { SplitText } from 'gsap/SplitText';
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
  <p
   ref={textRef}
   className='mt-96 mb-96 mx-4 text-titleLarge md:text-headlineSmall'
  >
   I&apos;m a Front-End Developer with a broad background in Graphic and Digital
   Design. Since 2000 I&apos;ve been designing meaningful, memorable, and
   communicative work for companies and professionals worldwide. Commitment to
   visual excellence and engineering performance is part of my DNA.
  </p>
 );
}
