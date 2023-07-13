import Image from 'next/image';

export default function Page({ params }: any) {
 return (
  <main>
   <h1 className='text-7xl'>{params.slug}</h1>
  </main>
 );
}
