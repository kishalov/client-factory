'use client'
import Image from 'next/image'
import { PhoneInput } from 'react-international-phone'
import 'react-international-phone/style.css'
import { parsePhoneNumberFromString } from 'libphonenumber-js'
import { useState } from 'react'

export default function CTASection() {
	const [phone, setPhone] = useState('')
	const [isValid, setIsValid] = useState(true)

	function handleChange(value: string) {
		setPhone(value)
		const parsed = parsePhoneNumberFromString(value)
		setIsValid(parsed?.isValid() ?? false)
	}

	function handleSubmit(e: React.FormEvent) {
		e.preventDefault()
		if (!isValid) {
			alert('Please enter a valid phone number')
			return
		}
		console.log('Отправляем:', phone)
	}
	return (
		<section className="relative bg-[#F6F4FF] rounded-t-[40px] text-black overflow-hidden py-20 lg:py-40">
			{/* Единый фон с кругами за секцией */}
			<div className="absolute inset-0 z-0 overflow-visible">
				<div className="absolute w-[420px] h-[420px] bg-[#C0A5F2]/70 rounded-full top-[8%] left-[6%] animate-wiggle"></div>
				<div className="absolute w-[580px] h-[580px] bg-[#C0A5F2]/60 rounded-full top-[28%] left-[62%] animate-wiggle-delayed"></div>
				<div className="absolute w-[320px] h-80 bg-[#C0A5F2]/55 rounded-full top-[64%] left-[22%] animate-wiggle"></div>
			</div>

			{/* Контент */}
			<div className="container relative z-10 flex flex-col items-center gap-5 lg:gap-10 text-center">
				<h2 className="headingtext font-bold text-black">Get your first leads</h2>
				<p className="headingtext inline-block text-[#825BDA] border-4 border-[#825BDA] rounded-full px-6 py-1 rotate-2">
					in 2 days
				</p>

				{/* Карточка формы */}
				<div
					className="card text-white flex-col bg-cover bg-center relative w-full"
					style={{ backgroundImage: "url('/images/ctabg.png')" }}
				>
					<p className="smallheading text-white mb-4 lg:mb-8 text-left lg:w-[70%]">
						Send your request now and start receiving real kitchen clients directly to your WhatsApp.
					</p>

					<form className="grid grid-cols-1 w-full md:grid-cols-2 gap-5">
						<input
							type="text"
							placeholder="Your name"
							className="w-full rounded-full py-4 px-6 text-[#825BDA] maintext placeholder-[#C0A5F2] bg-white outline-none"
						/>
						<input
							type="text"
							placeholder="City"
							className="w-full rounded-full py-4 px-6 text-[#825BDA] maintext placeholder-[#C0A5F2] bg-white outline-none"
						/>
						<div className="w-full rounded-full py-3 px-6 bg-white">
						<PhoneInput
							defaultCountry="za"
							value={phone}
							onChange={handleChange}
						/>
						</div>
						<input
							type="text"
							placeholder="Business type"
							className="w-full rounded-full py-4 px-6 text-[#825BDA] maintext placeholder-[#C0A5F2] bg-white outline-none"
						/>
						<input
							type="text"
							placeholder="Enter number"
							className="md:col-span-2 w-full rounded-full py-4 px-6 text-[#825BDA] maintext placeholder-[#C0A5F2] bg-white outline-none"
						/>

						<button type="submit" className="md:col-span-2 btn-corners">
							<span>Get clients</span>
						</button>
					</form>
				</div>
			</div>
		</section>
	)
}
