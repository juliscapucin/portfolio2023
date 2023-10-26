type TitleProps = {
 title: string;
};

export default function Title({ title }: TitleProps) {
 return (
  <h1 className='text-displaySmall md:text-displayMedium lg:text-displayLarge col-span-5 whitespace-nowrap'>
   {title}
  </h1>
 );
}
