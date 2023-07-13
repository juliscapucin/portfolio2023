import { playground } from '@/constants';

export default function Page() {
 const { title, paragraph1 } = playground;

 return (
  <main>
   <section>
    <h1 className='text-9xl'>{title}</h1>
    <p>{paragraph1}</p>
   </section>
  </main>
 );
}
