import localFont from 'next/font/local';

import { Header, RootLayout, ContactModal } from '@/components';

import { ModalContextProvider, PageContextProvider } from '@/context';

import '@/styles/styles.css';

export const metadata = {
 title: 'Juli Scapucin',
 description: 'Front-End Developer based in Amsterdam',
};

// Load custom font //
const myFont = localFont({
 variable: '--font-primary',
 src: [
  {
   path: '../../public/fonts/n27-bold-webfont.woff2',
   weight: '700',
  },
  { path: '../../public/fonts/n27-medium-webfont.woff2', weight: '500' },
  {
   path: '../../public/fonts/n27-regular-webfont.woff2',
   weight: '400',
  },
  { path: '../../public/fonts/n27-light-webfont.woff2', weight: '300' },
  {
   path: '../../public/fonts/n27-extralight-webfont.woff2',
   weight: '200',
  },
  { path: '../../public/fonts/n27-thin-webfont.woff2', weight: '100' },
 ],
});

export default function Layout(props: {
 children: React.ReactNode;
 shallowPage: React.ReactNode;
}) {
 return (
  <PageContextProvider>
   <RootLayout>
    <ModalContextProvider>
     <body
      className={`${myFont.className} relative mt-0 max-w-desktop font-text font-normal text-bodyMedium bg-primary text-secondary mx-auto overflow-x-clip`}
     >
      <Header />

      <main className={`mt-16 mx-8 overflow-x-clip`}>
       {/* Transition Overlay */}
       <div className='transition-fullscreen hidden h-screen w-screen max-w-desktop top-16 fixed z-50 overflow-clip pointer-events-none'></div>
       {props.children}
       {props.shallowPage}
      </main>

      <ContactModal />
     </body>
    </ModalContextProvider>
   </RootLayout>
  </PageContextProvider>
 );
}
