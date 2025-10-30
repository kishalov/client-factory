'use client'
import Image from 'next/image'

export default function WhyChoose() {
	return (
		<section className="relative bg-[#825BDA] text-white py-40 rounded-b-[40px]">
			{/* Фон с кругами */}
			<div className="absolute inset-0">
				<div className="absolute w-[400px] h-[400px] bg-[#C0A5F2] rounded-full top-[20%] left-[55%] animate-wiggle"></div>
				<div className="absolute w-[600px] h-[600px] bg-[#C0A5F2] rounded-full top-[40%] left-[70%] animate-wiggle"></div>
				<div className="absolute w-[300px] h-[300px] bg-[#C0A5F2] rounded-full top-[10%] left-[20%] animate-wiggle"></div>
			</div>

			{/* Контент */}
			<div className="container relative flex flex-col items-center gap-16 text-center">
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
				<div className="grid grid-cols-2 gap-8 ">
					{/* 1 */}
					<div className="card bg-white text-black flex flex-col relative items-center overflow-visible">
						<p className="smallheading w-[70%] ">
							You get leads quickly — see the first ones within 48 hours
						</p>
					</div>

					{/* 2 */}
					<div className="card bg-white text-black flex flex-col items-center relative overflow-visible">
						<p className="smallheading w-[70%] ">
							You pay only for real clients, not for clicks or calls that go nowhere
						</p>
					</div>

					{/* 3 */}
					<div className="card bg-white text-black flex flex-col items-center relative overflow-visible py-[50px]">
						<p className="smallheading w-[70%] ">
							We use a wide range of ad channels and manage everything for you
						</p>
					</div>

					{/* 4 */}
					<div className="card bg-white text-black flex flex-col items-center relative overflow-visible">
						<p className="smallheading w-[70%] ">
							You can focus on production, while we handle all marketing
						</p>
					</div>
				</div>
			</div>
		</section>
	)
}
