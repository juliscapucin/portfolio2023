'use client';

import Image from 'next/image';
import { useEffect } from 'react';

import { projectsPage } from '@/constants';
import { animateToLeft } from '@/utils';

export default function Page() {
 const { title, paragraph1, slug } = projectsPage;

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
