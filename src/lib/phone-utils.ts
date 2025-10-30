// src/lib/phone-utils.ts
import { parsePhoneNumberFromString, AsYouType, getCountryCallingCode } from 'libphonenumber-js'

/**
 * Попробовать определить страну по локали браузера.
 * Возвращает ISO2 код страны (например "RU", "US") или null.
 */
export function detectCountryFromLocale(): string | null {
	if (typeof navigator === 'undefined') return null
	const lang = navigator.language || (navigator as any).userLanguage || ''
	// обычно "ru-RU" или "en-US"
	const parts = lang.split(/[-_]/)
	if (parts.length > 1) {
		return parts[1].toUpperCase()
	}
	// fallback: Intl API
	try {
		const region = (Intl as any).DateTimeFormat().resolvedOptions().locale // not reliable for region
	} catch (e) {}
	return null
}

/**
 * Возвращает код страны + номер (E.164) или null, если не валидно.
 */
export function parseToE164(value: string, defaultCountry?: string): string | null {
	if (!value) return null
	const pn = parsePhoneNumberFromString(value, defaultCountry as any)
	if (pn && pn.isValid()) return pn.number // E.164
	return null
}

/**
 * Форматирование "по мере ввода" (as-you-type).
 * Возвращает отформатированную строку по локали/стране.
 */
export function formatAsTyped(value: string, country?: string): string {
	const fmt = new AsYouType(country as any)
	return fmt.input(value)
}

/**
 * Получить префикс страны, например "+7" или "+1"
 */
export function getCountryDialCode(country?: string): string | null {
	if (!country) return null
	try {
		return `+${getCountryCallingCode(country as any)}`
	} catch (e) {
		return null
	}
}
