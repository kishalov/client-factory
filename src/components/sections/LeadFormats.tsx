'use client'
import Image from 'next/image'
import Link from 'next/link'

export default function LeadTypes() {
	return (
		<section className="container flex flex-col items-start mt-20 lg:mt-40" id='leads'>
			{/* Заголовок */}
			<div className="mb-10">
				<h2 className="headingtext text-black">
					Two types of <span className="inline-block bg-[#825BDA] text-white rounded-full px-7 py-1 rotate-2">leads</span>
				</h2>
			</div>

			{/* Карточки */}
			<div className="grid grid-cols-1 lg:grid-cols-[1fr_40px_1fr]">
				{/* Basic Lead */}
				<div className="card corners-effect z-1 bg-[#F6F4FF] flex flex-col justify-between rounded-[40px] p-10 transition-all duration-[0.4s] ease-in-out hover:-translate-y-2 cursor-pointer">
					<div>
						<h3 className="smallheading text-black mb-4 pointer-events-none">Basic Lead (No Call)</h3>
						<p className="maintext text-black mb-10 pointer-events-none">
							The client completed the form — we verified it’s a real contact.
						</p>
					</div>
					<div className="flex items-end gap-1">
						<span className="text-[48px] font-semibold text-[#825BDA] leading-none pointer-events-none">R300</span>
						<span className="text-black maintext mb-1.5 pointer-events-none">/ per lead</span>
					</div>
				</div>
            	
                {/* Средняя тонкая колонка */}
				<div className="relative flex justify-center items-center bg-[#F6F4FF] h-10 
					lg:flex-col lg:justify-between lg:items-center lg:h-full">
					<div className="absolute -left-5 w-[40%] h-full bg-white rounded-full lg:hidden"></div>
					<div className="absolute -right-5 w-[40%] h-full bg-white rounded-full lg:hidden"></div>

					<div className="hidden lg:block absolute -top-5 w-full h-[40%] bg-white rounded-full"></div>
					<div className="hidden lg:block absolute -bottom-5 w-full h-[40%] bg-white rounded-full"></div>
				</div>
				
                {/* Appointment Lead */}
				<div className="card corners-effect cursor-pointer bg-[#2E163C] flex flex-col justify-between rounded-[40px] p-10 transition-all duration-[0.4s] ease-in-out hover:-translate-y-2">
					<div>
						<h3 className="smallheading text-white mb-4 pointer-events-none">Appointment (With Call)</h3>
						<p className="maintext text-white mb-10 opacity-90 pointer-events-none">
							We call, qualify, and book a home measurement visit with the client.
						</p>
					</div>
					<div className="flex items-end gap-1">
						<span className="text-[48px] font-semibold text-[#C0A5F2] leading-none pointer-events-none">R1500</span>
						<span className="text-white maintext mb-1.5 opacity-90 pointer-events-none">/ per confirmed appointment</span>
					</div>
				</div>
			</div>
		</section>
	)
}
