import { NextResponse } from 'next/server'
import { google } from 'googleapis'

const rawCreds = process.env.GOOGLE_CREDENTIALS
const credentials = rawCreds ? JSON.parse(rawCreds) : null
const SPREADSHEET_ID = process.env.SPREADSHEET_ID || ''
const TELEGRAM_TOKEN = process.env.TELEGRAM_TOKEN || ''
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID || ''

export async function POST(req: Request) {
	try {
		const data = await req.json()

		if (!credentials || !SPREADSHEET_ID) {
			throw new Error('Missing Google API credentials or spreadsheet ID.')
		}

		// Авторизация Google API
		const auth = new google.auth.GoogleAuth({
			credentials,
			scopes: ['https://www.googleapis.com/auth/spreadsheets'],
		})
		const sheets = google.sheets({ version: 'v4', auth })

		// Формируем строку: [timestamp, name, value, phone, value, ...]
		const flatRow: string[] = []
		flatRow.push('timestamp', new Date().toISOString())

		for (const [key, value] of Object.entries(data)) {
			flatRow.push(key)
			flatRow.push(String(value))
		}

		// Добавляем строку в таблицу
		await sheets.spreadsheets.values.append({
			spreadsheetId: SPREADSHEET_ID,
			range: 'A:Z',
			valueInputOption: 'USER_ENTERED',
			requestBody: { values: [flatRow] },
		})

		// Формируем текст для Telegram
		const text =
			'📩 *Новая заявка:*\n' +
			Object.entries(data)
				.map(([k, v]) => `*${k}:* ${v}`)
				.join('\n')

		// Отправляем в Telegram
		if (TELEGRAM_TOKEN && TELEGRAM_CHAT_ID) {
			await fetch(`https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					chat_id: TELEGRAM_CHAT_ID,
					text,
					parse_mode: 'Markdown',
				}),
			})
		} else {
			console.warn('⚠️ Telegram env vars not set.')
		}

		return NextResponse.json({ ok: true })
	} catch (err) {
		console.error('❌ Lead API error:', err)
		return NextResponse.json({ ok: false, error: String(err) }, { status: 500 })
	}
}
