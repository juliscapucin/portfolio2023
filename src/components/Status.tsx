import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import gsap from 'gsap';

function Status() {
 const [currentDate, setCurrentDate] = useState(new Date());
 const statusWrapperRef = useRef<HTMLDivElement>(null);

 useEffect(() => {
  const intervalId = setInterval(() => {
   setCurrentDate(new Date());
  }, 1000); // Update every second

  return () => {
   clearInterval(intervalId);
  };
 }, []);

 useLayoutEffect(() => {
  let ctx = gsap.context(() => {
   gsap.from('.line', {
    xPercent: -100,
    duration: 1,
    delay: 0.3,
    ease: 'expo4.out',
    stagger: 0.25,
   });
  });

  return () => {
   ctx.revert();
  };
 }, [statusWrapperRef]);

 const dayOfWeek = currentDate.toLocaleDateString('en-US', { weekday: 'long' });
 const dayOfMonth = currentDate.toLocaleDateString('en-US', { day: 'numeric' });
 const month = currentDate.toLocaleDateString('en-US', { month: 'long' });
 const time = currentDate.toLocaleTimeString('en-US');

 return (
  <div
   ref={statusWrapperRef}
   className='flex flex-col text-titleMedium mt-16 md:mt-4 lg:mt-2 ml-2 mb-16 lg:mb-0 md:col-span-4 lg:col-span-3 xlg:col-span-1 max-w-[250px] overflow-clip'
  >
   <span>Location: Amsterdam</span>
   <span className='line h-[1px] bg-secondary'></span>
   <span>
    {dayOfWeek} | {dayOfMonth} {month}
   </span>
   <span className='line h-[1px] bg-secondary'></span>
   <span>{time}</span>
   <span className='line h-[1px] bg-secondary'></span>
  </div>
 );
}

export default Status;
