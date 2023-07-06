import Image from "next/image"
import Link from "next/link"

export default function Home() {
	return (
		<main className='juli'>
			<div>
				<h1 className='text-5xl font-bold bg-green-700 first-letter:text-red-500'>
					Get started by editing&nbsp;!!!
					<code>src/app/page.tsx</code>
				</h1>
			</div>

			<div>
				<Image
					src='/next.svg'
					alt='Next.js Logo'
					width={180}
					height={37}
					priority
				/>
			</div>

			<div>
				<a
					href='https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app'
					target='_blank'
					rel='noopener noreferrer'>
					<h2>
						Docs <span>-&gt;</span>
					</h2>
					<p>
						Find in-depth information about Next.js features and API.</p>
				</a>
			</div>
			<ul>
				<li><Link href="/contact">Hello</Link></li>
				<li></li>
				<li></li>
				<li></li>
			</ul>
		</main>
	)
}
