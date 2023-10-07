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

  // Define animations
  const tl = gsap.timeline();

  // Animate the characters
  tl
   .set(splitText.lines, {
    opacity: 0,
    y: 50,
   })
   .to(splitText.lines, {
    opacity: 1,
    y: 0,
    stagger: 0.1,
   });

  // Create a ScrollTrigger
  ScrollTrigger.create({
   trigger: textRef.current,
   start: 'top 90%',
   end: 'bottom 20%',
   toggleActions: 'play reverse play reverse',
   // On Enter,
   // On Leave: When the element leaves the viewport,
   // On Enter Backwards: When scrolling back up and the element re-enters the viewport,
   // On Leave Backwards: When scrolling back up and the element leaves the viewport again.
   immediateRender: true, // Ensure the animation plays immediately
   onEnter: () => {
    console.log('enter');
    tl.play(); // Play the animation when the element enters the viewport
   },
   onLeave: () => {
    console.log('leave');
    tl.reverse(); // Reverse the animation when the element leaves the viewport
   },
  });
 }, [textRef.current]);

 return (
  <p
   ref={textRef}
   className='mt-16 mx-4 text-headlineSmall md:text-headlineMedium'
  >
   I’m a Front-End Developer with a broad background in Graphic and Digital
   Design. Since 2000 I've been designing meaningful, memorable, and
   communicative work for companies and professionals worldwide. Commitment to
   visual excellence and engineering performance is part of my DNA.
  </p>
 );
}
