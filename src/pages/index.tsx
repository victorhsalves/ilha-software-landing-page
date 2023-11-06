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
			<h1 className='text-xl md:text-2xl lg:text-3xl font-extrabold text-center'>
			Este site está em desenvolvimento!
			</h1>
			<Image 
				className='w-[250px] h-auto md:w-[350px] lg:w-[400px]'
				src='/building.png'
				width={400}
				height={400} alt={'Em desenvolvimento'}			
			/>
		</div>
	)
}
