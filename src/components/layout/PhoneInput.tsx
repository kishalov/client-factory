'use client'
import { useEffect, useState } from 'react'
import PhoneInputCore from 'react-phone-number-input'
import { getCountryCallingCode, CountryCode } from 'libphonenumber-js'
import 'react-phone-number-input/style.css'

function detectCountry(): CountryCode {
	if (typeof navigator === 'undefined') return 'ZA'
	const lang = navigator.language || ''
	const parts = lang.split(/[-_]/)
	const code = (parts[1] || 'ZA').toUpperCase()
	return (code as CountryCode) || 'ZA'
}

type Props = {
	onChange?: (e164: string | undefined) => void
	name?: string
	className?: string
}

export default function PhoneInput({ onChange, name = 'phone', className = '' }: Props) {
	const [country, setCountry] = useState<CountryCode>('ZA')
	const [value, setValue] = useState<string | undefined>(undefined)

	// определяем страну
	useEffect(() => {
		setCountry(detectCountry())
	}, [])

	// при знании страны подставляем её код
	useEffect(() => {
		if (!value && country) {
			const dial = `+${getCountryCallingCode(country)}`
			setValue(dial)
		}
	}, [country])

	// пробрасываем наверх e.164
	useEffect(() => {
		onChange?.(value)
	}, [value, onChange])

	return (
		<div className={`w-full ${className}`}>
			<PhoneInputCore
				international
				defaultCountry={country}
				value={value}
				onChange={setValue}
				name={name}
				className="w-full"
			/>
		</div>
	)
}
