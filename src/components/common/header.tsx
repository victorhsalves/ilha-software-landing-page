import { style } from '@/theme'
import clsx from 'clsx'
import Image from 'next/image'



export default function Header() {

	return (

		<div 
			className={clsx(
				'relative h-[350px] w-full items-center justify-center', 
				'text-7xl font-extrabold tracking-[0.75rem] lg:flex'
			)}
			style={style.bgGradient.primary}
		>
			<Image 
				className="absolute"
				src="/Logo.png"
				alt="Ilha Software Logo"
				width={300}
				height={300}
				priority
			/>
			<h1 className='z-10 shadow-2'>
        Ilha Software
			</h1>
		</div>
	)
}