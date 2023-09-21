import localFont from 'next/font/local';

import {
 Header,
 ContactModal,
 StoryblokProvider,
 CustomCursor,
} from '@/components';
import { ModalContextProvider, PageContextProvider } from '@/context';

// import { storyblokInit, apiPlugin } from '@storyblok/react/rsc';

// storyblokInit({
//  accessToken: process.env.storyblokApiKey,
//  use: [apiPlugin],
//  apiOptions: {
//   region: 'eu',
//  },
// });

import '@/styles/styles.css';

export const metadata = {
 title: 'Juli Scapucin',
 description: 'Front-End Developer based in Amsterdam',
};

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

export default function RootLayout(props: {
 children: React.ReactNode;
 shallowPage: React.ReactNode;
}) {
 return (
  <StoryblokProvider>
   <html lang='en' className='dark'>
    <ModalContextProvider>
     <body
      className={`${myFont.className} relative mt-0 max-w-desktop font-text font-extralight text-bodyLarge bg-colorWhite text-colorBlack dark:bg-colorBlack dark:text-colorWhite mx-auto overflow-x-hidden`}
     >
      <Header />
      <PageContextProvider>
       <main className={`mt-16 mx-8 overflow-x-hidden`}>
        <CustomCursor />

        {/* Transition Overlay */}
        <div className='transition-fullscreen w-screen h-screen top-0 left-0 fixed z-10 hidden pointer-events-none'></div>
        {props.children}
        {props.shallowPage}
       </main>
      </PageContextProvider>

      <ContactModal />
     </body>
    </ModalContextProvider>
   </html>
  </StoryblokProvider>
 );
}
