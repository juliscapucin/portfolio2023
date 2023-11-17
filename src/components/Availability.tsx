import { useTextReveal } from '@/hooks';
import { useRef } from 'react';

type Props = {
 variant?: string;
 modalOpen?: boolean;
};

export default function Availability({ variant, modalOpen }: Props) {
 const textRef = useRef(null);

 useTextReveal(textRef, variant, modalOpen);

 return (
  <div className='flex flex-col justify-center items-center'>
   <span className='block text-headlineSmall'>Available December 2023</span>
   <a
    href='mailto:hello@juliscapucin.com'
    className='text-displaySmall font-normal overflow-hidden'
   >
    <span ref={textRef}>Say Hi :)</span>
   </a>
  </div>
 );
}
