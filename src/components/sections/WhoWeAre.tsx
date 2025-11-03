'use client'
import Image from 'next/image'

export default function WhoWeAreAndWhyChoose() {
	return (
		<section className="relative bg-[#825BDA] text-white overflow-hidden mt-20 lg:mt-40 rounded-[40px]" id="about">
			{/* --- Единый фон с кругами --- */}
			<div className="absolute inset-0 overflow-visible z-0">
				<div className="absolute w-[400px] h-[400px] bg-[#C0A5F2]/70 rounded-full top-[10%] left-[10%] animate-wiggle"></div>
				<div className="absolute w-[600px] h-[600px] bg-[#C0A5F2]/60 rounded-full top-[30%] left-[65%] animate-wiggle"></div>
				<div className="absolute w-[300px] h-[300px] bg-[#C0A5F2]/50 rounded-full top-[60%] left-[25%] animate-wiggle"></div>
				<div className="absolute w-[200px] h-[200px] bg-[#C0A5F2]/60 rounded-full top-[70%] left-[70%] animate-wiggle"></div>
			</div>

			{/* --- Первая часть (Who We Are) --- */}
			<div className="relative z-10 pt-20 lg:pt-40 pb-20">
				<div className="container grid grid-cols-1 lg:grid-cols-2 items-center gap-16">
					{/* Левая часть */}
					<div className="flex flex-col gap-3 lg:gap-6">
						<h2 className="headingtext font-bold text-white">Who we are</h2>
						<p className="maintext text-white/90">
							We are a team of performance marketers specializing in high-ticket industries&nbsp;— like custom kitchens,
							furniture, and home renovation.
						</p>
						<p className="maintext text-white/90">Our process is simple: ads → qualification → ready client.</p>
						<p className="maintext text-white/90">
							We cover all ad expenses and deliver you only real, verified requests.
						</p>
						<p className="maintext text-white/90">
							Today, we work with over 1,000 companies across South Africa, and our total campaign budgets exceed R10 million.
						</p>
						<p className="maintext text-white/90">We know how to attract clients who actually buy&nbsp;— not just click.</p>
					</div>

					{/* Правая часть — иконка фабрики */}
					<div className="relative flex justify-center items-center">
						<Image
							src="/images/factoryicon.png"
							alt="factory icon"
							width={420}
							height={420}
							className="relative z-10 w-full h-auto animate-wiggle pointer-events-none"
						/>
					</div>
				</div>
			</div>

			{/* --- Вторая часть (Why Choose) --- */}
			<div className="relative z-10 pb-20 lg:pb-40">
				<div className="container flex flex-col items-center gap-16 text-center">
					{/* Заголовок */}
					<div>
						<h2 className="headingtext font-bold text-white">
							Why kitchen businesses<br />choose{' '}
							<span className="inline-block text-white rounded-full px-6 py-1 border-4 border-white rotate-2 mt-4">
								Client Factory
							</span>
						</h2>
					</div>

					{/* Сетка карточек */}
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8">
						{/* 1 */}
						<div className="card bg-white text-black flex flex-col relative items-center overflow-visible">
							<p className="smallheading lg:w-[70%] ">
								You get leads quickly — see the first ones within 48 hours
							</p>
						</div>

						{/* 2 */}
						<div className="card bg-white text-black flex flex-col items-center relative overflow-visible">
							<p className="smallheading lg:w-[70%] ">
								You pay only for real clients, not for clicks or calls that go nowhere
							</p>
						</div>

						{/* 3 */}
						<div className="card bg-white text-black flex flex-col items-center relative overflow-visible py-[50px] rotate-2 lg:-rotate-2">
							<p className="smallheading lg:w-[70%] ">
								We use a wide range of ad channels and manage everything for you
							</p>
						</div>

						{/* 4 */}
						<div className="card bg-white text-black flex flex-col items-center relative overflow-visible">
							<p className="smallheading lg:w-[70%] ">
								You can focus on production, while we handle all marketing
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
