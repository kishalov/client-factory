'use client'
import Image from 'next/image'
import Link from 'next/link'

export default function HowItWorks() {
	return (
		<section className="container flex flex-col items-start mt-20 lg:mt-40" id='how'>
			{/* Заголовок */}
			<div className="mb-10">
				<h2 className="headingtext text-black">
					How it <span className="inline-block bg-[#825BDA] text-white rounded-full px-7 py-1 -rotate-3">works</span>
				</h2>
				<p className="maintext text-black mt-4">
					We run ads and bring you real kitchen clients — fast, transparent, and performance-based.
				</p>
			</div>

			{/* Сетка карточек */}
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full">
				{/* Карточка 1 */}
				<div className="card bg-[#F6F4FF] flex-col rounded-[40px] relative overflow-hidden">
					<h3 className="smallheading text-black mb-6 lg:w-[60%] pointer-events-none">We launch advertising campaigns</h3>
					<p className="maintext text-black lg:w-[60%] pointer-events-none">
						Facebook, Instagram, Google, and local classifieds — fully managed and paid by us.
					</p>
					<span className="absolute -bottom-5 right-5 lg:-bottom-10 lg:right-8 text-8xl lg:text-[170px] font-light text-[#825BDA] opacity-20 lg:opacity-100 leading-none tracking-tighter pointer-events-none">01</span>
				</div>

				{/* Карточка 2 */}
				<div className="card bg-[#F6F4FF] flex-col rounded-[40px] relative overflow-hidden">
					<h3 className="smallheading text-black mb-6 w-[60%] pointer-events-none">Clients submit a kitchen request</h3>
					<p className="maintext text-black lg:w-[60%] pointer-events-none">
						They provide details such as layout, budget, location, preferred style, and installation time.
					</p>
					<span className="absolute -bottom-5 right-5 lg:-bottom-10 lg:right-8 text-8xl lg:text-[170px] font-light text-[#825BDA] opacity-20 lg:opacity-100 leading-none tracking-tighter pointer-events-none">02</span>
				</div>

				{/* Карточка 3 */}
				<div className="card bg-[#F6F4FF] flex-col rounded-[40px] relative overflow-hidden -rotate-1">
					<h3 className="smallheading text-black mb-6 lg:w-[60%] pointer-events-none">We verify every contact</h3>
					<p className="maintext text-black lg:w-[60%] pointer-events-none">
						Our team manually checks all inquiries, calls each person, and confirms genuine interest.
					</p>
					<span className="absolute -bottom-5 right-5 lg:-bottom-10 lg:right-8 text-8xl lg:text-[170px] font-light text-[#825BDA] opacity-20 lg:opacity-100 leading-none tracking-tighter pointer-events-none">03</span>
				</div>

				{/* Карточка 4 */}
				<div className="card bg-[#F6F4FF] flex-col rounded-[40px] relative overflow-hidden">
					<h3 className="smallheading text-black mb-6 lg:w-[60%] pointer-events-none">You get ready-to-buy clients</h3>
					<p className="maintext text-black lg:w-[60%] pointer-events-none">
						Each verified contact is delivered straight to your WhatsApp within minutes.
					</p>
					<span className="absolute -bottom-5 right-5 lg:-bottom-10 lg:right-8 text-8xl lg:text-[170px] font-light text-[#825BDA] opacity-20 lg:opacity-100 leading-none tracking-tighter pointer-events-none">04</span>
				</div>
			</div>
		</section>
	)
}
