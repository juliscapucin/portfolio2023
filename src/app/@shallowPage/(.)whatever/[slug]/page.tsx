import Image from 'next/image';
import { ShallowPage } from '@/components';

export default function Page({ params }: any) {
 return (
  <ShallowPage>
   <h1 className='text-7xl'>{params.slug} in a shallow page</h1>
  </ShallowPage>
 );
}
