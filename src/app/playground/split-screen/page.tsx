import Image from 'next/image';

export default function Page() {
 return (
  <main>
   <h1 className='text-7xl'>GSAP ScrollTrigger</h1>
   <section className='flex gap-8'>
    <div className='w-1/2 flex-1/2 space-y-16 > * + * [&>article>h2]:text-3xl'>
     <article>
      <h2>Scroll-based Animations</h2>
      <p>
       Easily animate elements as they enter or exit the viewport, or trigger
       animations at specific scroll positions. From simple fade-ins to complex
       parallax effects, ScrollTrigger gives you full control over the timing
       and behavior of your animations.
      </p>
     </article>
     <article>
      <h2>Pinning and Sticky Elements</h2>
      <p>
       Create elements that remain fixed on the screen while the user scrolls.
       Perfect for creating immersive headers, navigation menus, or sidebars
       that stay in view and provide interactive functionality.
      </p>
     </article>
     <article>
      <h2>Scroll-based Progress Indicators</h2>
      <p>
       Use ScrollTrigger to create progress indicators that visualize the user's
       progress on a page. Highlighting sections, updating navigation menus, or
       triggering animations based on the scroll progress can all be achieved
       with ease.
      </p>
     </article>
     <article>
      <h2>Responsive and Adaptive Animations</h2>
      <p>
       ScrollTrigger seamlessly adapts to different screen sizes and
       orientations. You can create animations that respond to the user's
       scrolling behavior while providing a consistent and optimized experience
       across devices.
      </p>
     </article>
    </div>
    <div className='w-1/2 flex-1/2'>
     <div className='relative h-full w-full'>
      <Image
       src='/pool.avif'
       alt='photo'
       className='object-cover '
       sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
       fill
      />
     </div>
    </div>
   </section>
  </main>
 );
}
