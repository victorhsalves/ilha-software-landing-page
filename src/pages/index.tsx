import { Footer, Header } from '@/components/common'
import { style } from '@/theme'
import clsx from 'clsx'
import Image from 'next/image'

export default function Home() {
	return (
		<div 
			className={clsx(
				'flex flex-col w-full rounded-lg px-5 py-4 items-center justify-center', 
				'border border-gray-300 bg-gray-100 border-neutral-700 bg-neutral-800/30'
			)}
		>
			<h1 className='text-3xl font-extrabold'>
			Este site está em desenvolvimento!
			</h1>
			<Image 
				src='/building.png'
				width={400}
				height={400} alt={'Em desenvolvimento'}			
			/>
		</div>
	)
}
