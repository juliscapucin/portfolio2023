import { useMemo, useRef } from 'react';

import { useTextReveal } from '@/hooks';
import { CopyEmailButton } from './buttons';

type Props = {
 availability?: string;
 variant?: string;
 modalOpen?: boolean;
};

export default function Availability({
 variant,
 modalOpen,
 availability,
}: Props) {
 const textRef = useRef(null);

 const getNextMonth = useMemo(() => {
  const currentDate = new Date();
  return new Date(currentDate.getFullYear(), currentDate.getMonth() + 1);
 }, []);

 const parseStringToDate = (dateString: string) => {
  const parts = dateString.split(' ');
  if (parts.length === 2) {
   const month = new Date(`${parts[0]} 1, 1970`).getMonth();
   const year = parseInt(parts[1], 10);
   return new Date(year, month);
  }
  return getNextMonth;
 };

 const furtherAvailability = useMemo(() => {
  const formatMonth = (date: Date) =>
   `${date.toLocaleString('default', {
    month: 'long',
   })} ${date.getFullYear()}`;

  // If there is no availability, return the next month
  if (!availability) {
   return formatMonth(getNextMonth);
  }

  // If there is availability, check if it is in the next month
  const cmsDate = parseStringToDate(availability);
  return cmsDate.getTime() < getNextMonth.getTime()
   ? formatMonth(getNextMonth)
   : formatMonth(cmsDate);
 }, [availability, getNextMonth]);

 useTextReveal(textRef, variant, modalOpen);

 return (
  <div className='flex flex-col justify-center items-center'>
   <span className='block text-headlineSmall'>
    Available {furtherAvailability}
   </span>
   <div className='overflow-hidden h-28 group'>
    <a
     href='mailto:hello@juliscapucin.com'
     className='flex flex-col text-displaySmall md:group-hover:-translate-y-1/2 transition-transform duration-200'
    >
     <span ref={textRef} className='font-medium'>
      Say Hi :)
     </span>
     <span className='font-medium'>Say Hi :)</span>
    </a>
   </div>
   <CopyEmailButton />
  </div>
 );
}
