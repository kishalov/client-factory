'use client'
import Image from 'next/image'
import Link from 'next/link'
import { PhoneInput } from 'react-international-phone'
import 'react-international-phone/style.css'
import { parsePhoneNumberFromString } from 'libphonenumber-js'
import { useState } from 'react'

export default function Hero() {
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
		<section className="container flex flex-col mt-5 lg:mt-40 lg:grid lg:grid-cols-[1.3fr_40px_1fr] lg:items-center">
			{/* Левая колонка */}
			<div className="card flex flex-col gap-10 bg-[#F6F4FF] lg:gap-20">
				<div>
					<h1 className="headingtext text-black">
						Need more kitchen clients?<br />Just buy them.
					</h1>
					<p className="maintext text-black mt-4">
						We deliver real, verified leads for kitchen manufacturers and installers across South Africa.
					</p>
				</div>

				{/* Буллиты */}
				<ul className="flex flex-col gap-4 lg:gap-6">
					<li className="flex items-center gap-4 lg:gap-6">
						<Image
							src="/images/Bullet.svg"
							alt="bullet"
							width={32}
							height={32}
							className="w-8 h-8 lg:w-12 lg:h-12"
						/>
						<p className="smallheading text-black text-base lg:text-[30px]">
							From R300 per verified lead
						</p>
					</li>

					<li className="flex items-center gap-4 lg:gap-6">
						<Image
							src="/images/Bullet.svg"
							alt="bullet"
							width={32}
							height={32}
							className="w-8 h-8 lg:w-12 lg:h-12"
						/>
						<p className="smallheading text-black text-base lg:text-[30px]">
							Over 100 leads every month
						</p>
					</li>

					<li className="flex items-center gap-4 lg:gap-6">
						<Image
							src="/images/Bullet.svg"
							alt="bullet"
							width={32}
							height={32}
							className="w-8 h-8 lg:w-12 lg:h-12"
						/>
						<p className="smallheading text-black text-base lg:text-[30px]">
							Up to 70% more sales from kitchens
						</p>
					</li>
				</ul>

			</div>

			{/* Средняя тонкая колонка */}
<div className="relative flex justify-center items-center bg-[#F6F4FF] h-10
	lg:flex lg:flex-col lg:justify-between lg:items-center lg:h-full">
	
	{/* горизонтальные вырезы для мобилы */}
	<div className="absolute -left-5 w-[40%] h-full bg-white rounded-full lg:hidden"></div>
	<div className="absolute -right-5 w-[40%] h-full bg-white rounded-full lg:hidden"></div>

	{/* вертикальные вырезы для десктопа */}
	<div className="hidden lg:block absolute -top-5 w-full h-[40%] bg-white rounded-full"></div>
	<div className="hidden lg:block absolute -bottom-5 w-full h-[40%] bg-white rounded-full"></div>
</div>


			{/* Правая колонка */}
			<div
				className="card text-white flex-col bg-cover bg-center"
				style={{ backgroundImage: "url('/images/HeroCardBG.png')" }}
			>
				<h2 className="headingtext leading-tight mb-6 w-full lg:w-[60%]">
					See how it works.
				</h2>

				<form className="flex flex-col gap-5 w-full">
					<input
						type="text"
						placeholder="Your name"
						className="w-full rounded-full py-4 px-6 text-[#825BDA] maintext placeholder-[#C0A5F2] bg-white outline-none"
					/>
					<div className="w-full rounded-full py-3 px-6 bg-white">
					<PhoneInput
						defaultCountry="za"
						value={phone}
						onChange={handleChange}
					/>
					</div>
					<button type="submit" className="btn-corners">
						<span>Submit</span>
					</button>
				</form>
			</div>
		</section>
	)
}
