'use client';

import { about } from '@/constants';
import { useEffect } from 'react';
import { animateToLeft } from '@/animations';

export default function Page() {
 const { title, paragraph1, slug } = about;

 useEffect(() => {
  animateToLeft(`${slug}-page`);
 }, []);

 return (
  <section className={`${slug}-page`}>
   <h1 className='text-9xl'>{title}</h1>
   <p>{paragraph1}</p>
  </section>
 );
}
