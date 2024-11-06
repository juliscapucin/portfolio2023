import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import gsap from 'gsap';

const timeZone = 'Europe/Amsterdam';

function Status() {
 const [dateTime, setDateTime] = useState({ day: '', date: '', time: '' });
 const statusWrapperRef = useRef<HTMLDivElement>(null);

 useEffect(() => {
  const updateDateTime = () => {
   const now = new Date();
   const day = new Intl.DateTimeFormat('en-US', {
    timeZone,
    weekday: 'long',
   }).format(now);
   const date = new Intl.DateTimeFormat('en-US', {
    timeZone,
    day: 'numeric',
    month: 'long',
   }).format(now);
   const time = new Intl.DateTimeFormat('en-US', {
    timeZone,
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
   }).format(now);

   setDateTime({ day, date, time });
  };

  updateDateTime(); // Set initial date and time
  const intervalId = setInterval(updateDateTime, 1000); // Update every second

  return () => clearInterval(intervalId);
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

 return (
  <div
   ref={statusWrapperRef}
   className='flex flex-col text-titleMedium mt-16 md:mt-4 lg:mt-2 ml-2 mb-16 lg:mb-0 md:col-span-4 lg:col-span-3 xlg:col-span-1 max-w-[250px] overflow-clip'
  >
   <span>Location: Amsterdam</span>
   <span className='line h-[1px] bg-secondary'></span>
   <span>
    {dateTime.day} | {dateTime.date}
   </span>
   <span className='line h-[1px] bg-secondary'></span>
   <span>{dateTime.time}</span>
   <span className='line h-[1px] bg-secondary'></span>
  </div>
 );
}

export default Status;
