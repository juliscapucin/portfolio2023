'use client';

import { useThemeStorage } from '@/hooks';

export default function HtmlWrapper(props: { children: React.ReactNode }) {
 const { theme } = useThemeStorage();

 return (
  <html lang='en' data-theme={theme}>
   {props.children}
  </html>
 );
}
