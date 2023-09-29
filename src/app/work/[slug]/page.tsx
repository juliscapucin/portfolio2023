import Image from 'next/image';

export default function Page({ params }: { params: { slug: string } }) {
 console.log(params.slug);

 return (
  <main className='relative'>
   <div className='transition-fullscreen w-screen h-screen top-0 left-0'>
    <div className={`relative h-full w-full overflow-hidden`}>
     <Image
      src='/bus.avif'
      alt='photo'
      className='object-cover '
      sizes='(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw'
      fill
      priority
     />
    </div>
   </div>
   <h1 className='text-7xl'>{params.slug}</h1>
  </main>
 );
}
