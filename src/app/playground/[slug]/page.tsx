import Image from 'next/image';

export default function Page({ params }: any) {
 const slug = params.slug;

 return (
  <section className={`relative ${slug}-page`}>
   <div className='transition-fullscreen w-screen h-screen top-0 left-0'>
    <div className={`relative h-full w-full overflow-hidden`}>
     <Image
      src='/pool.avif'
      alt='photo'
      className='object-cover '
      sizes='(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw'
      fill
      priority
     />
    </div>
   </div>
   <h1 className='text-7xl z-35'>{slug}</h1>
  </section>
 );
}
