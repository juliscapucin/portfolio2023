import { useTextReveal } from '@/hooks';
import { useRef } from 'react';
import { CopyEmailButton } from './buttons';

type Props = {
 variant?: string;
 modalOpen?: boolean;
};

export default function Availability({ variant, modalOpen }: Props) {
 const textRef = useRef(null);

 useTextReveal(textRef, variant, modalOpen);

 return (
  <div className='flex flex-col justify-center items-center'>
   <span className='block text-headlineSmall'>Available January 2024</span>
   <div className='overflow-hidden h-28 group'>
    <a
     href='mailto:hello@juliscapucin.com'
     className='flex flex-col text-displaySmall font-normal md:group-hover:-translate-y-1/2 transition-transform duration-200'
    >
     <span ref={textRef}>Say Hi :)</span>
     <span>Say Hi :)</span>
    </a>
   </div>
   <CopyEmailButton />
  </div>
 );
}
