'use client';

import { useEffect } from 'react';
import { animateToLeft } from '@/utils';
import { playground } from '@/constants';

export default function Page() {
 const { title, paragraph1, slug } = playground;

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
