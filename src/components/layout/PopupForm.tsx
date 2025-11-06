'use client'
import { useState, useEffect } from 'react'
import { X } from 'lucide-react'
import { PhoneInput } from 'react-international-phone'
import 'react-international-phone/style.css'
import { parsePhoneNumberFromString } from 'libphonenumber-js'

export default function PopupForm() {
	const [open, setOpen] = useState(false)
	const [isSending, setIsSending] = useState(false)
	const [isValid, setIsValid] = useState(true)

	const [formData, setFormData] = useState({
		name: '',
		city: '',
		phone: '',
		comment: '',
	})

	function handleInputChange(
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
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
		if (!formData.name.trim()) {
			alert('Please enter your name')
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
					content_name: 'Popup Form',
					value: 0,
					currency: 'USD',
					})
				}
				setFormData({ name: '', city: '', phone: '', comment: '' })
				setIsValid(true)
				setOpen(false)
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

	// Позволяет открыть попап по любому элементу с data-popup="true"
	useEffect(() => {
		const triggers = document.querySelectorAll('[data-popup="true"]')
		const handleClick = () => setOpen(true)
		triggers.forEach((btn) => btn.addEventListener('click', handleClick))
		return () => triggers.forEach((btn) => btn.removeEventListener('click', handleClick))
	}, [])

	// Блокировка скролла при открытии
	useEffect(() => {
		document.body.style.overflow = open ? 'hidden' : ''
	}, [open])

	if (!open) return null

	return (
		<div className="fixed inset-0 z-200 flex items-center justify-center bg-black/40 backdrop-blur-sm">
			{/* Кнопка закрытия */}
			<button
				onClick={() => setOpen(false)}
				className="absolute top-10 right-10 text-white hover:rotate-90 transition-transform duration-200 cursor-pointer"
			>
				<X size={64} />
			</button>

			<div className="relative bg-[#C0A5F2] rounded-[40px] p-4 lg:p-8 max-w-[330px] lg:max-w-[700px] text-center animate-fade-in">
				<h2 className="smallheading text-white mb-4 lg:mb-8">
					Send your request now and start receiving real kitchen clients directly to your WhatsApp.
				</h2>

				<form onSubmit={handleSubmit} className="flex flex-col gap-3 lg:gap-5">
					<input
						name="name"
						type="text"
						value={formData.name}
						onChange={handleInputChange}
						placeholder="Your name or company"
						className="w-full rounded-full py-4 px-6 text-[#825BDA] placeholder-[#C0A5F2] bg-white outline-none"
						required
					/>
					<input
						name="city"
						type="text"
						value={formData.city}
						onChange={handleInputChange}
						placeholder="City or region"
						className="w-full rounded-full py-4 px-6 text-[#825BDA] placeholder-[#C0A5F2] bg-white outline-none"
					/>
					<div className="w-full rounded-full py-3 px-6 bg-white">
						<PhoneInput
							defaultCountry="za"
							value={formData.phone}
							onChange={handlePhoneChange}
							placeholder="Phone (WhatsApp)"
						/>
					</div>
					<textarea
						name="comment"
						value={formData.comment}
						onChange={handleInputChange}
						rows={3}
						placeholder="Describe what you’re looking for or how we can help"
						className="rounded-3xl py-4 px-6 text-[#825BDA] placeholder-[#C0A5F2] bg-white outline-none resize-none"
					/>

					<button
						type="submit"
						disabled={isSending}
						className="btn-corners bg-[#825BDA] text-white disabled:opacity-70"
					>
						<span>{isSending ? 'Sending...' : 'Get clients'}</span>
					</button>
				</form>
			</div>
		</div>
	)
}
