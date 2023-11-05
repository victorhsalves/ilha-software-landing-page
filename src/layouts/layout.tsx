import { Footer, Header } from '@/components/common'
import { style } from '@/theme'
import Head from 'next/head'

export default function DefaultLayout({
	children,
}: {
  children: React.ReactNode
}) {
	return (
		<div 
			className="relative flex min-h-screen flex-col items-center gap-3" 
			style={style.bgGradient.bottomTransparent}
		>
			<Header />
			<div className="flex-1 flex w-[80%] justify-center">
				{children}
			</div>
			<Footer />
		</div>
	)
}