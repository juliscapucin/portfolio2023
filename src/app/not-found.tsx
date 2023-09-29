import Link from 'next/link';

export default function NotFound() {
 return (
  <section className='flex flex-col justify-center items-center'>
   <h1 className='text-displaySmall md:text-displayMedium lg:text-displayLarge'>
    Not Found
   </h1>
   <span className='text-titleSmall md:text-titleLarge mt-16'>
    Could not find the page requested
   </span>
   <Link className='text-titleSmall md:text-titleLarge mt-32' href='/'>
    Return to Home
   </Link>
  </section>
 );
}
