import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { AboutPage } from '@/components/pages';

import { getAboutPage } from '@/lib';

export const metadata: Metadata = {
 title: 'About',
 description: 'A list of projects I have worked on.',
};

export default async function Page() {
 const pageData = getAboutPage();
 const data = await pageData;

 if (!data) return notFound();

 return <AboutPage data={data} />;
}
