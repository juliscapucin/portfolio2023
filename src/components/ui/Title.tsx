import { animateSplitText } from '@/animations';
import { useEffect, useRef } from 'react';

type TitleProps = {
 title: string;
 margin?: boolean;
};

export default function Title({ title, margin }: TitleProps) {
 const titleRef = useRef(null);

 useEffect(() => {
  if (titleRef.current) {
   animateSplitText(titleRef.current);
  }
 }, [titleRef.current]);

 return (
  <div className='overflow-hidden col-span-5'>
   <h1
    ref={titleRef}
    className={`${
     margin && 'mt-64'
    } text-displaySmall md:text-displayMedium lg:text-displayLarge whitespace-nowrap`}
   >
    {title}
   </h1>
  </div>
 );
}