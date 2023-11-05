


export default function Footer() {

	return (
		<div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
			<a
				href="#"
				className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
				// target="_blank"
				rel="noopener noreferrer"
			>
				<h2 className={'mb-3 text-2xl font-semibold'}>
      Sobre nós{' '}
					<span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
        -&gt;
					</span>
				</h2>
				<p className={'m-0 max-w-[30ch] text-sm opacity-50'}>
      Conheça a Ilha Software e a nossa equipe.
				</p>
			</a>

			<a
				href="#"
				className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
				// target="_blank"
				rel="noopener noreferrer"
			>
				<h2 className={'mb-3 text-2xl font-semibold'}>
      Contato{' '}
					<span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
        -&gt;
					</span>
				</h2>
				<p className={'m-0 max-w-[30ch] text-sm opacity-50'}>
      Entre em contato com nossos departamentos.
				</p>
			</a>

			<a
				href="#"
				className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
				// target="_blank"
				rel="noopener noreferrer"
			>
				<h2 className={'mb-3 text-2xl font-semibold'}>
      Parceiros{' '}
					<span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
        -&gt;
					</span>
				</h2>
				<p className={'m-0 max-w-[30ch] text-sm opacity-50'}>
      Conheça nosso parceiros e veja feedbacks sobre nossos serviços.
				</p>
			</a>

			<a
				href="#"
				className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
				// target="_blank"
				rel="noopener noreferrer"
			>
				<h2 className={'mb-3 text-2xl font-semibold'}>
      FAQ{' '}
					<span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
        -&gt;
					</span>
				</h2>
				<p className={'m-0 max-w-[30ch] text-sm opacity-50'}>
      Tire suas dúvidas na nossa FAQ.
				</p>
			</a>
		</div>

	)
}