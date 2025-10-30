// src/app/layout.tsx
import './globals.css'
import localFont from 'next/font/local'
import { Inter } from 'next/font/google'
import WiggleProvider from '@/components/layout/WiggleProvider'

// локальный Cabinet Grotesk
const cabinetGrotesk = localFont({
	src: [
		{ path: '../../public/fonts/CabinetGrotesk-Thin.woff2', weight: '100', style: 'normal' },
		{ path: '../../public/fonts/CabinetGrotesk-Extralight.woff2', weight: '200', style: 'normal' },
		{ path: '../../public/fonts/CabinetGrotesk-Light.woff2', weight: '300', style: 'normal' },
		{ path: '../../public/fonts/CabinetGrotesk-Regular.woff2', weight: '400', style: 'normal' },
		{ path: '../../public/fonts/CabinetGrotesk-Medium.woff2', weight: '500', style: 'normal' },
		{ path: '../../public/fonts/CabinetGrotesk-Bold.woff2', weight: '700', style: 'normal' },
		{ path: '../../public/fonts/CabinetGrotesk-Extrabold.woff2', weight: '800', style: 'normal' },
		{ path: '../../public/fonts/CabinetGrotesk-Black.woff2', weight: '900', style: 'normal' },
	],
	variable: '--font-cabinet-grotesk',
	display: 'swap',
})


// Google Inter
const inter = Inter({
	subsets: ['latin'],
	weight: ['400', '500', '700'],
	variable: '--font-inter',
	display: 'swap',
})

export const metadata = {
	title: 'Client Factory',
	description: 'Lead generation for kitchen businesses',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en" className={`${cabinetGrotesk.variable} ${inter.variable}`}>
			<body>
				<WiggleProvider /> 
				{children}
			</body>
		</html>
	)
}
