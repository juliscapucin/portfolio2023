import type { Metadata } from 'next';

import { WorkPage } from '@/components/pages';

import { getWorkPage } from '@/lib';

export const metadata: Metadata = {
 title: 'Work',
 description: 'A list of projects I have worked on.',
};

export default async function Page() {
 const pageData = getWorkPage();
 const data = await pageData;

 return <WorkPage data={data} />;
}
