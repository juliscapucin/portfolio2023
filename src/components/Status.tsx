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
  <div className='flex flex-col'>
   <span>Amsterdam</span>
   <span className='h-[1px] bg-colorBlack dark:bg-colorWhite'></span>
   <span>{dayOfWeek}</span>
   <span className='h-[1px] bg-colorBlack dark:bg-colorWhite'></span>
   <span>{time}</span>
   <span className='h-[1px] bg-colorBlack dark:bg-colorWhite'></span>
  </div>
 );
}

export default Status;
