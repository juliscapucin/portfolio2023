import { useRef, useEffect } from 'react';
import gsap from 'gsap';

type Props = {
 text: string;
 textStyle?: string;
 speed?: number;
};

const ProjectLabelMarquee = ({ text, textStyle, speed = 100 }: Props) => {
 const marqueeRef = useRef(null);

 useEffect(() => {
  if (!marqueeRef.current) return;

  const element = marqueeRef.current as HTMLDivElement;
  if (!element) return;

  const elementWidth = element.offsetWidth;

  // Calculate the duration based on the width of the element and the speed
  const duration = elementWidth / speed;

  const tl = gsap.timeline({ repeat: -1, defaults: { ease: 'linear' } });

  tl.fromTo(element, { xPercent: 0 }, { xPercent: -50, duration: duration });

  // Cleanup the GSAP animation on component unmount
  return () => {
   tl.revert();
  };
 }, [marqueeRef]);

 return (
  <div className='overflow-hidden flex-1 relative'>
   <div ref={marqueeRef} className={`flex flex-nowrap w-fit ${textStyle}`}>
    <span className='block whitespace-nowrap px-1'>
     . {text} . {text} . {text} . {text}{' '}
    </span>
    <span className='block whitespace-nowrap px-1'>
     . {text} . {text} . {text} . {text}{' '}
    </span>
   </div>
  </div>
 );
};

export default ProjectLabelMarquee;
