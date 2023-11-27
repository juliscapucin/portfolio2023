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
 const dayOfMonth = currentDate.toLocaleDateString('en-US', { day: 'numeric' });
 const month = currentDate.toLocaleDateString('en-US', { month: 'long' });
 const time = currentDate.toLocaleTimeString('en-US');

 return (
  <div className='flex flex-col text-titleMedium mt-16 md:mt-4 lg:mt-2 ml-2 mb-16 md:col-span-4 lg:col-span-3 xlg:col-span-1 max-w-[250px]'>
   <span>Location: Amsterdam</span>
   <span className='h-[1px] bg-secondary'></span>
   <span>
    {dayOfWeek} | {dayOfMonth} {month}
   </span>
   <span className='h-[1px] bg-secondary'></span>
   <span>{time}</span>
   <span className='h-[1px] bg-secondary'></span>
  </div>
 );
}

export default Status;
