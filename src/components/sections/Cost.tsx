'use client'
import Image from 'next/image'

export default function LeadCost() {
	return (
		<section id="cost" className="relative container mt-20 lg:mt-40">
			{/* Заголовок */}
            <div className="mb-10 lg:mb-20">
                <h2 className="headingtext text-black mb-4">
                    <span className="inline-block border-4 border-[#825BDA] text-[#825BDA] rounded-full px-6 py-1">
                    How much
                    </span>{' '}
                    does lead generation cost?
                </h2>
                <p className="maintext text-black ">
                    The final cost depends on region, ad demand, and campaign scale — but the standard prices are:
                </p>
            </div>

			{/* Карточки */}
			<div className="flex flex-col lg:flex-row lg:items-end">
                {/* Qualification */}
                    <div className="bg-[#C0A5F2] flex-col p-5 lg:p-10 rounded-[20px] lg:rounded-t-[40px] lg:rounded-b-none mb-5 lg:mb-0 text-black">
                        <h3 className="smallheading w-[60%] mb-6">Qualification and filtering</h3>
                        <p className="headingtext text-[#825BDA] mb-6 lg:w-[60%]">R50–R100</p>
                    </div>
                
                {/* Advertising */}
                <div className="relative bg-[#825BDA] p-5 lg:p-10 rounded-[20px] lg:rounded-t-[40px] lg:rounded-b-none mb-5 lg:mb-0 text-white overflow-hidden">
                    <h3 className="smallheading mb-6 w-[60%]">Advertising cost per lead</h3>
                    <p className="headingtext text-white mb-36 w-[60%]">R100–R300</p>
                    <Image
                        src="/images/dollar.png"
                        alt="cost icon"
                        width={200}
                        height={200}
                        className="absolute -bottom-15 right-27 pointer-events-none"
                    />
                </div>

                {/* Delivery */}
                <div className="relative bg-[#45344C] flex flex-col justify-between p-5 lg:p-10 rounded-[20px] lg:rounded-t-[40px] lg:rounded-b-none mb-5 lg:mb-0 text-white overflow-hidden">
                    <h3 className="smallheading mb-6 w-[60%]">Delivery to client</h3>
                    <p className="headingtext text-[#C0A5F2] mb-56 w-[60%]">R300–R1500</p>
                    <Image
                        src="/images/box.png"
                        alt="delivery icon"
                        width={220}
                        height={220}
                        className="absolute -bottom-15 right-23 pointer-events-none"
                    />
                </div>

			</div>
		</section>
	)
}
