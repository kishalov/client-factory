import Image from 'next/image'

export default function Footer() {
	return (
		<footer className="bg-[#825BDA] py-10 text-center text-black">
			<div className="container mx-auto flex flex-col items-center gap-4">
				<Image
					src="/images/logo.svg"
					alt="Client Factory logo"
					width={120}
					height={120}
					className="mb-4"
				/>
				<p className="tinyheading">Real clients. Ready to buy.</p>
				<p className="font-[Inter] text-sm opacity-30">© 2025 Client Factory</p>
			</div>
		</footer>
	)
}
