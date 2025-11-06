'use client'
import Image from 'next/image'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select'
import { Button } from '@/components/ui/button'
import { PhoneInput } from 'react-international-phone'
import 'react-international-phone/style.css'
import { parsePhoneNumberFromString } from 'libphonenumber-js'
import { useState } from 'react'

export default function CTASection() {
	const [formData, setFormData] = useState({
		name: '',
		city: '',
		business: '',
		comment: '',
		phone: '',
	})
	const [isValid, setIsValid] = useState(true)
	const [isSending, setIsSending] = useState(false)

	function handleInputChange(
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
	) {
		setFormData({ ...formData, [e.target.name]: e.target.value })
	}

	function handlePhoneChange(value: string) {
		setFormData({ ...formData, phone: value })
		const parsed = parsePhoneNumberFromString(value)
		setIsValid(parsed?.isValid() ?? false)
	}

	async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault()
		if (!isValid) {
			alert('Please enter a valid phone number')
			return
		}

		setIsSending(true)

		try {
			const res = await fetch('/api/lead', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(formData),
			})
			const json = await res.json()

			if (json.ok) {
				alert('✅ Your request has been sent!')
				if (window.fbq) {
					window.fbq('track', 'Lead', {
					content_name: 'CTA Section Form',
					value: 0,
					currency: 'USD',
					})
				}
				setFormData({ name: '', city: '', business: '', comment: '', phone: '' })
			} else {
				alert('❌ Failed to send. Try again later.')
			}
		} catch (err) {
			console.error('Network error:', err)
			alert('Network error, please try again.')
		} finally {
			setIsSending(false)
		}
	}

	
	return (
		<section className="relative bg-[#F6F4FF] rounded-t-[40px] text-black overflow-hidden py-20 lg:py-40">
			{/* Единый фон с кругами за секцией */}
			<div className="absolute inset-0 z-0 overflow-visible">
				<div className="absolute w-[420px] h-[420px] bg-[#C0A5F2]/70 rounded-full top-[8%] left-[6%] animate-wiggle"></div>
				<div className="absolute w-[580px] h-[580px] bg-[#C0A5F2]/60 rounded-full top-[28%] left-[62%] animate-wiggle"></div>
				<div className="absolute w-[320px] h-80 bg-[#C0A5F2]/55 rounded-full top-[64%] left-[22%] animate-wiggle"></div>
			</div>

			{/* Контент */}
			<div className="container relative z-10 flex flex-col items-center gap-5 lg:gap-10 text-center">
				<h2 className="headingtext font-bold text-black">Get your first clients</h2>
				<p className="headingtext inline-block text-[#825BDA] border-4 border-[#825BDA] rounded-full px-6 py-1 rotate-2">
					in 2 days
				</p>

				{/* Форма */}
				<div
					className="card text-white flex-col bg-cover bg-center relative w-full"
					style={{ backgroundImage: "url('/images/ctabg.png')" }}
				>
					<p className="smallheading text-white mb-4 lg:mb-8 text-left lg:w-[70%]">
						Send your request now and start receiving real kitchen inquiries directly to your WhatsApp.
					</p>

							<form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full">
			<Input
				name="name"
				value={formData.name}
				onChange={handleInputChange}
				placeholder="Your name or company"
				required
				className="rounded-full py-7 px-6 bg-white text-[#825BDA] placeholder-[#C0A5F2] border-none shadow-none"
			/>

			<Input
				name="city"
				value={formData.city}
				onChange={handleInputChange}
				placeholder="City or region"
				className="rounded-full py-7 px-6 bg-white text-[#825BDA] placeholder-[#C0A5F2] border-none shadow-none"
			/>

			{/* Телефон + Select на одной строке */}
			<div className="flex flex-col gap-5 md:flex-row md:items-center md:gap-5 md:col-span-2">
				<div className="w-full md:w-1/2 rounded-full py-3 px-6 bg-white">
					<PhoneInput
						defaultCountry="za"
						value={formData.phone}
						onChange={handlePhoneChange}
						placeholder="Phone (WhatsApp)"
					/>
				</div>

				<Select
					value={formData.business}
					onValueChange={(val) =>
						handleInputChange({
							target: { name: 'business', value: val },
						} as any)
					}
				>
					<SelectTrigger className="w-full md:w-1/2 rounded-full py-7 px-6 bg-white text-[#825BDA] border-none focus:ring-0 cursor-pointer">
						<SelectValue placeholder="Business type" />
					</SelectTrigger>
					<SelectContent className="bg-white text-[#825BDA] rounded-2xl shadow-lg">
						<SelectItem value="manufacturer">Kitchen manufacturer</SelectItem>
						<SelectItem value="installer">Installer</SelectItem>
						<SelectItem value="designer">Designer</SelectItem>
						<SelectItem value="other">Other</SelectItem>
					</SelectContent>
				</Select>
			</div>

			<Textarea
				name="comment"
				value={formData.comment}
				onChange={handleInputChange}
				rows={3}
				placeholder="Describe what you’re looking for or how we can help"
				className="md:col-span-2 rounded-3xl py-4 px-6 text-[#825BDA] placeholder-[#C0A5F2] bg-white resize-none border-none"
			/>

			<Button
				variant="ghost"
				type="submit"
				disabled={isSending}
				className="btn-corners md:col-span-2 h-full transition-all disabled:opacity-70"
			>
				<span>{isSending ? 'Sending...' : 'Get clients'}</span>
			</Button>

		</form>

				</div>
			</div>
		</section>
	)
}
