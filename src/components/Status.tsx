import { useEffect, useState } from 'react';

function Status() {
 const [currentDate, setCurrentDate] = useState(new Date());

 useEffect(() => {
  const intervalId = setInterval(() => {
   setCurrentDate(new Date());
  }, 1000); // Update every second

  return () => {
   clearInterval(intervalId);
  };
 }, []);

 const dayOfWeek = currentDate.toLocaleDateString('en-US', { weekday: 'long' });
 const time = currentDate.toLocaleTimeString('en-US');

 return (
  <div className='flex flex-col text-titleMedium mt-2 ml-2 col-span-2 xlg:col-span-1'>
   <span>Amsterdam</span>
   <span className='h-[1px] bg-secondary'></span>
   <span>{dayOfWeek}</span>
   <span className='h-[1px] bg-secondary'></span>
   <span>{time}</span>
   <span className='h-[1px] bg-secondary'></span>
  </div>
 );
}

export default Status;
