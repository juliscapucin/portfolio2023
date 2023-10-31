'use client';

import { useThemeStorage } from '@/hooks';

export default function RootLayout(props: { children: React.ReactNode }) {
 const { theme } = useThemeStorage();

 return (
  <html lang='en' data-theme={theme}>
   {props.children}
  </html>
 );
}
