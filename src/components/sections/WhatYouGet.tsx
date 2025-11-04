'use client'
import Image from 'next/image'
import Link from 'next/link'

export default function WhatYouGet() {
	return (
		<section className="container flex flex-col items-start mt-20 lg:mt-40" id='get'>
			{/* Заголовок */}
			<div className="mb-6 lg:mb-12">
				<h2 className="headingtext text-black">
					<span className="inline-block border-4 text-[#825BDA] rounded-full px-5 py-1.5 lg:px-10 lg:py-3 -rotate-2 mb-3 lg:mb-5">What you get</span> with<br />
					Client Factory
				</h2>
			</div>

			{/* Контентная сетка */}
			<div className="grid grid-cols-1 gap-4 lg:gap-8 w-full lg:grid-cols-[1fr_1.5fr]">
				{/* Левая карточка с магнитом */}
				<div className="card bg-[#825BDA] text-white rounded-[40px] p-10 flex flex-col justify-between relative overflow-hidden">
					<p className="smallheading text-white mb-6 w-[50%]">
						Real customers<br />ready to order kitchens
					</p>
					<Image
						src="/images/magnet.png"
						alt="magnet illustration"
						width={300}
						height={300}
						className="absolute -bottom-3 -right-3 lg:-bottom-10 lg:-right-10 w-[30%] lg:w-[50%] -rotate-30 h-auto animate-wiggle pointer-events-none"
					/>
				</div>

				{/* Правая часть — сетка преимуществ */}
				<div className="grid grid-cols-2 gap-4 lg:gap-8">
					<div className="card bg-[#F6F4FF] rounded-[40px] p-8">
						<p className="smallheading text-black">
							Instant client delivery<br />to WhatsApp<br />(within 5 minutes)
						</p>
					</div>

					<div className="card bg-[#F6F4FF] rounded-[40px] p-8">
						<p className="smallheading text-black">
							Only qualified inquiries —<br />no spam,<br />no fake numbers
						</p>
					</div>

					<div className="card bg-[#F6F4FF] rounded-[40px] p-8">
						<p className="smallheading text-black">
							100% transparency<br />and pay-per-result model
						</p>
					</div>

					<div className="card bg-[#F6F4FF] rounded-[40px] p-8">
						<p className="smallheading text-black">
							Scalable request volume —<br />from 50 to 1000+ per month
						</p>
					</div>
				</div>
			</div>
		</section>
	)
}
