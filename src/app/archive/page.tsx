import { archive } from '@/constants';

export default function Page() {
 const { title, paragraph1 } = archive;

 return (
  <main>
   <section>
    <h1 className='text-9xl'>{title}</h1>
    <p>{paragraph1}</p>
   </section>
  </main>
 );
}
