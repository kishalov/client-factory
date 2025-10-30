'use client'
import { useState, useEffect } from 'react'
import { X } from 'lucide-react'
import { PhoneInput } from 'react-international-phone'
import 'react-international-phone/style.css'
import { parsePhoneNumberFromString } from 'libphonenumber-js'

export default function PopupForm() {
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
	const [open, setOpen] = useState(false)

	// Позволяет открыть поп-ап по любой кнопке с атрибутом data-popup="true"
	useEffect(() => {
		const triggers = document.querySelectorAll('[data-popup="true"]')
		const handleClick = () => setOpen(true)
		triggers.forEach(btn => btn.addEventListener('click', handleClick))
		return () => triggers.forEach(btn => btn.removeEventListener('click', handleClick))
	}, [])

	// Блокировка скролла при открытии
	useEffect(() => {
		document.body.style.overflow = open ? 'hidden' : ''
	}, [open])

	if (!open) return null

	return (
		<div className="fixed inset-0 z-200 flex items-center justify-center bg-black/40 backdrop-blur-sm">
				{/* кнопка закрытия */}
				<button
					onClick={() => setOpen(false)}
					className="absolute top-10 right-10 text-white hover:rotate-90 transition-transform duration-200 cursor-pointer"
				>
					<X size={64} />
				</button>
			<div className="relative bg-[#C0A5F2] rounded-[40px] p-4 lg:p-8 max-w-[330px] lg:max-w-[700px] text-center animate-fade-in">

				<h2 className="smallheading text-white mb-8">Send your request now and start receiving real kitchen clients directly to your WhatsApp.</h2>

				<form className="flex flex-col gap-5">
					<input
						type="text"
						placeholder="Your name"
						className="w-full rounded-full py-4 px-6 text-[#825BDA] maintext placeholder-[#C0A5F2] bg-white outline-none"
					/>
                    <div className="w-full rounded-full py-4 px-6 bg-white">
                    <PhoneInput
                        defaultCountry="za"
                        value={phone}
                        onChange={handleChange}
                    />
                    </div>
					<button type="submit" className="btn-corners bg-[#825BDA] text-white">
						<span>Get clients</span>
					</button>
				</form>
			</div>
		</div>
	)
}
