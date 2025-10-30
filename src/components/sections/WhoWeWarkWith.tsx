'use client'
import Image from 'next/image'

export default function WhoWeWorkWith() {
	return (
		<section
			className="relative bg-white overflow-hidden mt-20 lg:mt-40"
			style={{
					backgroundImage: "url('/images/chainbg.png')",
					backgroundPosition: 'right center',
					backgroundRepeat: 'no-repeat',
					backgroundSize: 'contain',
				}}
			>
				{/* mobile override */}
				<style jsx>{`
					@media (max-width: 768px) {
						section {
							background-size: cover !important;
							background-position: center !important;
						}
					}
				`}</style>

			<div className="container relative z-10 flex flex-col items-start gap-30 ">
				{/* Заголовок */}
				<div className="flex flex-col gap-2 lg:gap-4">
					<h2 className="headingtext text-black font-bold">Who we work with</h2>
					<p className="maintext text-black lg:w-[60%] mb-5 lg:mb-10">
						We love long-term partners — companies that take leads seriously and value quality. Here’s the profile of our ideal client:
					</p>

					{/* Буллиты */}
					<ul className="flex flex-col gap-6 mt-6">
						<li className="flex items-center gap-6">
							<Image src="/images/Bullet.svg" alt="bullet" width={48} height={48} className='w-8 h-8 lg:w-12 lg:h-12'/>
							<p className="smallheading text-black lg:w-[50%]">
								Monthly ad budget of <span className="text-[#825BDA]">R10,000+</span>
							</p>
						</li>
						<li className="flex items-center gap-6">
							<Image src="/images/Bullet.svg" alt="bullet" width={48} height={48} className='w-8 h-8 lg:w-12 lg:h-12'/>
							<p className="smallheading text-black lg:w-[50%]">
								Average kitchen order value <span className="text-[#825BDA]">R20,000+</span>
							</p>
						</li>
						<li className="flex items-center gap-6">
							<Image src="/images/Bullet.svg" alt="bullet" width={48} height={48} className='w-8 h-8 lg:w-12 lg:h-12'/>
							<p className="smallheading text-black lg:w-[50%]">
								Ready to handle incoming leads <span className="text-[#825BDA]">efficiently</span>
							</p>
						</li>
						<li className="flex items-center gap-6">
							<Image src="/images/Bullet.svg" alt="bullet" width={48} height={48} className='w-8 h-8 lg:w-12 lg:h-12'/>
							<p className="smallheading text-black lg:w-[50%]">
								At least <span className="text-[#825BDA]">1 year of experience</span> in kitchen manufacturing or installation
							</p>
						</li>
					</ul>
				</div>
			</div>
		</section>
	)
}
