'use client'
import { useState } from 'react'
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion'

export default function FAQSection() {
	const [openIndex, setOpenIndex] = useState(0)

	const faqs = [
		{
			q: 'What is a “verified client request”?',
			a: 'A verified request comes from a real person who filled out a kitchen quote form, confirmed their details, and showed genuine interest in ordering a kitchen.',
		},
		{
			q: 'How do you verify each request?',
			a: 'Every request goes through a manual or phone verification process. We call to confirm the client’s interest, remove duplicates, and filter out invalid numbers.',
		},
		{
			q: 'How many client requests can I receive per month?',
			a: 'On average, our partners receive between 50 and 1000 verified client requests per month. If you need more, we can scale your volume based on your target areas and budget.',
		},
		{
			q: 'How much does each client request cost?',
			a: 'Pricing depends on the type of request:\n– Without a call: R200-R400 per verified request\n– With a scheduled site visit: R1500 per qualified client',
		},
		{
			q: 'Can I choose which areas to target?',
			a: 'Yes. You can specify the cities, suburbs, or regions you serve, and we’ll send you only requests from those areas.',
		},
		{
			q: 'What happens if a contact doesn’t answer or the number is fake?',
			a: 'We guarantee replacements for invalid contacts or cases where the person never submitted a real request.',
		},
		{
			q: 'Do I need a website to start receiving clients?',
			a: 'No — we can deliver verified client requests directly to your WhatsApp. However, having a website helps improve your conversion rate and builds trust with clients.',
		},
		{
			q: 'How long does it take to start receiving clients?',
			a: 'Usually 2–3 working days. We launch the campaigns, filter the first batch of requests, and start sending verified clients straight to you.',
		},
	]


	return (
		<section
			className="relative bg-[#825BDA] text-white pt-20 lg:pt-40"
			id="faq"
		>
			{/* фоновые круги */}
			<div className="absolute inset-0 overflow-hidden z-0">
				<div className="absolute w-[420px] h-[420px] bg-[#C0A5F2]/70 rounded-full top-[8%] left-[5%] animate-wiggle"></div>
				<div className="absolute w-[600px] h-[600px] bg-[#C0A5F2]/60 rounded-full top-[40%] left-[70%] animate-wiggle"></div>
				<div className="absolute w-[300px] h-[300px] bg-[#C0A5F2]/50 rounded-full top-[75%] left-[25%] animate-wiggle"></div>
			</div>

			{/* контент */}
			<div className="container relative z-10 flex flex-col items-center gap-10">
				<h2 className="headingtext text-center text-white mb-4">
					Questions & Answers
				</h2>

				<Accordion
					type="single"
					collapsible
					defaultValue="item-1"
					className="flex flex-col gap-6 w-full"
				>
					{faqs.map((item, i) => (
						<AccordionItem
							key={i}
							value={`item-${i}`}
							className="corners-effect bg-white rounded-[40px]"
						>
							<AccordionTrigger className="flex cursor-pointer p-8 justify-between items-center w-full text-left">
								<span><h3 className="smallheading font-semibold text-black">
									{item.q}
								</h3>
								</span>
							</AccordionTrigger>
							<AccordionContent className=" text-black">
								<span><p className="maintext p-8 pt-0 whitespace-pre-line">{item.a}</p></span>
							</AccordionContent>
						</AccordionItem>
					))}
				</Accordion>
			</div>
		</section>
	)
}
