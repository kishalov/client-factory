'use client'
import { useState } from 'react'

export default function FAQSection() {
	const [openIndex, setOpenIndex] = useState(0)

	const faqs = [
		{
			q: 'What is a “verified lead”?',
			a: 'A verified lead is a real person who filled out a kitchen quote form, confirmed their details, and expressed genuine interest in ordering a kitchen.',
		},
		{
			q: 'How do you verify each lead?',
			a: 'Every lead goes through a manual or phone verification process. We call to confirm the client’s interest, remove duplicates, and filter out invalid numbers.',
		},
		{
			q: 'How many leads can I receive per month?',
			a: 'On average, our partners receive between 80 and 150 verified leads per month. If you need more, we can scale your volume based on your target areas and budget.',
		},
		{
			q: 'How much does each lead cost?',
			a: 'Pricing depends on the type of lead:\n– Without a call: R300 per verified lead\n– With a scheduled site visit: R1500 per qualified lead',
		},
		{
			q: 'Can I choose which areas to target?',
			a: 'Yes. You can specify the cities, suburbs, or regions you serve, and we’ll send you only leads from those areas.',
		},
		{
			q: 'What happens if a lead doesn’t answer or the number is fake?',
			a: 'We guarantee replacements for invalid contacts or cases where the client never submitted a request.',
		},
		{
			q: 'Do I need a website to start receiving leads?',
			a: 'No — we can deliver verified leads directly to your WhatsApp. However, having a website helps improve your conversion rate and builds trust with clients.',
		},
		{
			q: 'How long does it take to start receiving leads?',
			a: 'Usually 2–3 working days. We launch the campaigns, filter the first batch of leads, and start sending verified clients straight to you.',
		},
	]

	return (
		<section className="relative bg-[#825BDA] text-white overflow-hidden pt-20 lg:pt-40" id="faq">
			{/* фон с кругами */}
			<div className="absolute inset-0 overflow-visible z-0">
				<div className="absolute w-[420px] h-[420px] bg-[#C0A5F2]/70 rounded-full top-[8%] left-[5%] animate-wiggle"></div>
				<div className="absolute w-[600px] h-[600px] bg-[#C0A5F2]/60 rounded-full top-[40%] left-[70%] animate-wiggle"></div>
				<div className="absolute w-[300px] h-[300px] bg-[#C0A5F2]/50 rounded-full top-[75%] left-[25%] animate-wiggle"></div>
			</div>

			{/* контент */}
			<div className="container relative z-10 flex flex-col items-center gap-10">
				<h2 className="headingtext text-center text-white mb-4">Questions & Answers</h2>

				<div className="flex flex-col gap-6">
					{faqs.map((item, i) => (
						<div
							key={i}
							className="corners-effect card bg-white text-black rounded-[20px] lg:rounded-[40px] cursor-pointer px-5 lg:px-10 py-4 lg:py-8 transition-all"
							onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
						>
							<div className="flex flex-row justify-between items-center w-full">
								<div className="flex flex-col lg:flex-row">
									<h3
                                        className={`smallheading transition-all duration-300 ${
                                            openIndex === i ? 'lg:w-[30%] mb-3' : 'w-auto'
                                        }`}
                                    >
                                        {item.q}
                                    </h3>

									{openIndex === i && (
										<p className="maintext text-black whitespace-pre-line lg:w-[60%] lg:px-8">
											{item.a}
										</p>
									)}
								</div>

								<span className="text-[#C0A5F2] text-4xl lg:text-6xl leading-none select-none">
									{openIndex === i ? '−' : '+'}
								</span>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}
