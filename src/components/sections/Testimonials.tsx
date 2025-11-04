'use client'

import * as React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '@/components/ui/carousel'
import { Star } from 'lucide-react'
import Image from 'next/image'

interface Testimonial {
	name: string
	avatar: string
	rating: number
	text: string
}

const testimonials: Testimonial[] = [
	{
		name: 'Sarah Johnson',
		avatar: '/images/avatars/avatar1.jpg',
		rating: 5,
		text: 'We started working with Client Factory about six months ago, and the difference is huge — our flow of new client requests has doubled. Every contact feels genuine and relevant to what we do.',
	},
	{
		name: 'Michael Smith',
		avatar: '/images/avatars/avatar2.jpg',
		rating: 4,
		text: 'Overall, a very solid service. The customer inquiries are real, though sometimes they come unevenly — a few busy weeks followed by slower ones. Still, we’ve turned many of them into actual sales opportunities.',
	},
	{
		name: 'Tanya Mokoena',
		avatar: '/images/avatars/avatar3.jpg',
		rating: 5,
		text: 'Client Factory has been a game-changer for our small workshop. The team filters out irrelevant requests, so every customer contact we get is serious and well-informed. It saves us so much time.',
	},
	{
		name: 'James Nkosi',
		avatar: '/images/avatars/avatar4.jpg',
		rating: 5,
		text: 'The quality of client contacts is excellent — we’ve reduced our ad spend but kept sales growing month after month. The support team always checks in and makes sure everything runs smoothly.',
	},
	{
		name: 'Olivia Jacobs',
		avatar: '/images/avatars/avatar5.jpg',
		rating: 4,
		text: 'We’ve had a great experience overall. The customer inquiries are consistent and on point. We had a small delay at the start, but the team handled it quickly. It feels like working with real partners.',
	},
]


export default function Testimonials() {
	return (
		<section className="container flex flex-col items-start py-20 py:mt-40">
			<h2 className="headingtext text-black mb-10">What our clients say</h2>

			{/* адаптивная карусель */}
			<Carousel className="w-full">
				<CarouselContent className="-ml-2">
					{testimonials.map((item, i) => (
						<CarouselItem
							key={i}
							className="pl-2 sm:basis-1/2 lg:basis-1/3"
						>
							<Card className="bg-[#F6F4FF] border-none rounded-[30px] h-full">
								<CardContent className="flex flex-col items-center text-center gap-4 p-[8%] h-full">
                                    <div className="w-20 h-20 rounded-full overflow-hidden shrink-0">
                                        <Image
                                            src={item.avatar}
                                            alt={item.name}
                                            width={80}
                                            height={80}
                                            className="w-full h-full object-cover object-top pointer-events-none"
                                        />
                                    </div>
									<h3 className="font-display font-bold text-[clamp(16px,2vw,20px)] text-black pointer-events-none">
										{item.name}
									</h3>

									<div className="flex justify-center gap-[0.2em]">
										{Array.from({ length: 5 }).map((_, j) => (
											<Star
												key={j}
												className={`w-[clamp(16px,1.5vw,20px)] h-[clamp(16px,1.5vw,20px)] ${
													j < item.rating
														? 'fill-[#825BDA] text-[#825BDA]'
														: 'text-[#C0A5F2]'
												}`}
											/>
										))}
									</div>

									<p className="text-black/80 leading-relaxed text-[clamp(14px,1.4vw,16px)] pointer-events-none">
										{item.text}
									</p>
								</CardContent>
							</Card>
						</CarouselItem>
					))}
				</CarouselContent>

				{/* встроенные стрелки */}
				<CarouselPrevious className="-left-3 bg-[#825BDA] hover:bg-white rounded-full text-white" />
				<CarouselNext className="-right-3 bg-[#825BDA] hover:bg-white rounded-full text-white" />
			</Carousel>
		</section>
	)
}
