import { ContextLayout } from '@/components';
import { ContextProvider } from '@/context';

import '@/styles/styles.css';

export const metadata = {
 title: 'Juli Scapucin',
 description: 'Front-End Developer based in Amsterdam',
};

export default function RootLayout({
 children,
}: {
 children: React.ReactNode;
}) {
 return (
  <html lang='en'>
   <ContextProvider>
    <ContextLayout>{children}</ContextLayout>
   </ContextProvider>
  </html>
 );
}
