import { style } from '@/theme'
import clsx from 'clsx'
import Image from 'next/image'



export default function Header() {

	return (

		<div 
			className={clsx(
				'relative flex h-[200px] w-full items-center justify-center', 
				'text-3xl font-extrabold tracking-[0.75rem]', 
				'md:text-7xl md:h-[350px]'
			)}
			style={style.bgGradient.primary}
		>
			<Image 
				className="absolute w-[150px] h-auto md:w-[300px] md:h-[300px]"
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