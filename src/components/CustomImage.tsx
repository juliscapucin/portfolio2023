import Image from 'next/image';

interface CustomImageProps {
 width: string;
 height: string;
 fitClass?: string;
 divClass?: string;
 src: string;
 alt: string;
}

export default function CustomImage({
 width,
 height,
 fitClass,
 divClass,
 src,
 alt,
}: CustomImageProps) {
 return (
  <div className={`relative ${height} ${width} ${divClass}`}>
   <Image
    src={src}
    alt={alt}
    className='object-cover'
    sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
    fill
   />
  </div>
 );
}
