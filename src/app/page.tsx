import Image from "next/image"
import Link from "next/link"

export default function Home() {
	return (
		<div className='juli'>

			<div className="relative h-80">
				<Image
					src='/pool.avif'
					alt='Next.js Logo'
					className="object-contain"
					fill
					priority
				/>
			</div>

			<div>
				<a
					href='https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app'
					target='_blank'
					rel='noopener noreferrer'>
					<h2>
						Juli
					</h2>
					<p>Design & Code</p>
				</a>
			</div>
		</div>
	)
}
