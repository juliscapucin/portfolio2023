'use client'

import { useTransition } from 'react'
import { useRouter } from 'next/navigation'
import { disableDraftMode } from '@/app/actions'
import {
	useDraftModeEnvironment,
	useIsPresentationTool,
} from 'next-sanity/hooks'

export default function DisableDraftMode() {
	const router = useRouter()
	const [pending, startTransition] = useTransition()
	const environment = useDraftModeEnvironment()
	const isPresentationTool = useIsPresentationTool()

	// console.log(environment)
	console.log(isPresentationTool)

	// Only show the disable draft mode button when outside of Presentation Tool
	// if (environment !== 'live' && environment !== 'unknown') {
	// 	return null
	// }

	const disable = () =>
		startTransition(async () => {
			await disableDraftMode()
			router.refresh()
		})

	return (
		<div>
			{pending ? (
				'Disabling draft mode...'
			) : (
				<button
					type='button'
					onClick={disable}
					className='fixed top-0 left-0 z-100 bg-tertiary text-secondary px-4 py-2'>
					Disable draft mode
				</button>
			)}
		</div>
	)
}
