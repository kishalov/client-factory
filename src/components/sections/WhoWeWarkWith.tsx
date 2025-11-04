'use client'
import Image from 'next/image'

export default function WhoWeWorkWith() {
	return (
		<section className="relative bg-white overflow-hidden mt-20 lg:mt-40">

			{/* карточка внутри контейнера */}
			<div className="container relative z-10 flex justify-center">
				<div className="w-full bg-[#C0A5F2] rounded-[40px] p-8 lg:p-16 items-center flex flex-col gap-3">
					<h2 className="headingtext text-black text-center font-bold">Who we work with</h2>
					<p className="maintext text-black text-center lg:w-[60%] mb-5">
						We love long-term partners — companies that take client acquisition seriously and value quality. Here’s who we’re the best fit for:
					</p>

					<ul className="flex flex-col gap-12 mt-4">
						<li className="flex items-center flex-col justify-center gap-3">
							<Image src="/images/Bullet.svg" alt="bullet" width={48} height={48} className="w-8 h-8 lg:w-12 lg:h-12" />
							<p className="smallheading text-black lg:w-[60%] text-center">
								Monthly ad budget of <span className="text-[#825BDA]">R10,000+</span>
							</p>
						</li>
						<li className="flex flex-col items-center justify-center gap-3">
							<Image src="/images/Bullet.svg" alt="bullet" width={48} height={48} className="w-8 h-8 lg:w-12 lg:h-12" />
							<p className="smallheading text-black lg:w-[60%] text-center">
								Average kitchen order value <span className="text-[#825BDA]">R20,000+</span>
							</p>
						</li>
						<li className="flex items-center flex-col justify-center gap-3">
							<Image src="/images/Bullet.svg" alt="bullet" width={48} height={48} className="w-8 h-8 lg:w-12 lg:h-12" />
							<p className="smallheading text-black lg:w-[60%] text-center">
								Ready to handle new client requests quickly <span className="text-[#825BDA]">and professionally</span>
							</p>
						</li>
						<li className="flex items-center flex-col justify-center gap-3">
							<Image src="/images/Bullet.svg" alt="bullet" width={48} height={48} className="w-8 h-8 lg:w-12 lg:h-12" />
							<p className="smallheading text-black lg:w-[60%] text-center">
								At least <span className="text-[#825BDA]">1 year of experience</span> in kitchen manufacturing or installation
							</p>
						</li>
					</ul>
				</div>
			</div>
		</section>
	)
}
