import type { Metadata } from 'next';

import { ShowreelPage } from '@/components/pages';

export const metadata: Metadata = {
 title: 'Showreel',
 description: 'A list of projects I have worked on.',
};

export default async function Page() {
 return <ShowreelPage />;
}
