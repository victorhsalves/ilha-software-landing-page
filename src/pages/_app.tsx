import type { AppProps } from 'next/app'
import '../assets/globals.css'
import DefaultLayout from '@/layouts/layout'
import { style } from '@/theme'
import { Footer, Header } from '@/components/common'
 
export default function App({ Component, pageProps }: AppProps) {
	return (
		<div 
			className="relative flex min-h-screen min-w-[450px] flex-col items-center gap-3" 
			style={style.bgGradient.bottomTransparent}
		>
			<Header />
			<div className="flex-1 flex w-[80%] justify-center">
				<Component {...pageProps} />
			</div>
			<Footer />
		</div>
	)
}