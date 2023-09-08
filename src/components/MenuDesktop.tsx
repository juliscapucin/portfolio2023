import { usePathname, useRouter } from 'next/navigation';

import { GridDiv, MenuLink } from '@/components';
import { useModalContext } from '@/context';

import {
 animateMobileMenu,
 animateToLeftTransition,
 animateToRightTransition,
} from '@/animations';

interface NavLinksProps {
 label: string;
 slug: string;
 id: number;
}

interface MenuProps {
 navLinks: NavLinksProps[];
}

export default function MenuDesktop({ navLinks }: MenuProps) {
 const { modalOpen, updateModalOpen } = useModalContext();

 const pathname = usePathname();
 const router = useRouter();

 return (
  <GridDiv
   divClass={'h-16 max-w-full mx-8 px-8 hidden lg:flex'}
   right={true}
   left={true}
   bottom={true}
  >
   {/* Back button */}
   {/* Only render if not in home page */}
   {pathname !== '/' && (
    <button
     onClick={() => {
      const shallowPage = document.querySelector('.shallow-page');
      if (shallowPage)
       animateToRightTransition('shallow-page', () => router.back());
      else {
       animateToRightTransition(`${pathname.slice(1)}-page`, () =>
        router.push('/')
       );
      }
     }}
    >
     <GridDiv
      top={false}
      right={true}
      bottom={false}
      left={false}
      divClass='flex items-center justify-center'
     >
      <span className='min-w-[4rem]'>&#5193;</span>
     </GridDiv>
    </button>
   )}

   {/* Menu links */}
   <nav className='w-full h-full hidden lg:flex justify-end items-center gap-8 mr-8'>
    {navLinks.map((link) => {
     return (
      <MenuLink
       label={link.label}
       key={link.id}
       activeState={pathname === `/${link.slug}` ? true : false}
       action={() => {
        const filteredPathname = pathname === '/' ? 'home' : pathname.slice(1);

        const actualPage = navLinks.filter(
         (element) => element.slug === pathname.slice(1)
        );

        // Transition to left
        if ((actualPage && link.id > actualPage[0]?.id) || pathname === '/') {
         animateToLeftTransition(`${filteredPathname}-page`, () =>
          router.push(`/${link.slug}`)
         );
        } else {
         // Transition to right
         animateToRightTransition(`${filteredPathname}-page`, () =>
          router.push(`/${link.slug}`)
         );
        }
       }}
      />
     );
    })}

    {/* Contact button */}
    <MenuLink label='Contact' action={updateModalOpen} />
   </nav>
  </GridDiv>
 );
}
