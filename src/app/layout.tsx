// src/app/layout.tsx
import './globals.css'
import localFont from 'next/font/local'
import { Inter } from 'next/font/google'
import WiggleProvider from '@/components/layout/WiggleProvider'
import Pixel from '@/components/Pixel'

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
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
  },

  // 👇 это и есть твой "бейджик" (превью при расшаривании ссылки)
  openGraph: {
    title: 'Client Factory — Verified Client Requests',
    description:
      'We help kitchen manufacturers get verified, relevant client inquiries every month.',
    url: 'https://clientfactory.com', // замени на свой домен
    siteName: 'Client Factory',
    images: [
      {
        url: '/preview.png', // лежит в public/images, поэтому путь будет /images/preview.png
        width: 1200,
        height: 630,
        alt: 'Client Factory Preview',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Client Factory — Verified Client Requests',
    description:
      'We help kitchen manufacturers get verified, relevant client inquiries every month.',
    images: ['/preview.png'], // аналогично: /images/preview.png
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en" className={`${cabinetGrotesk.variable} ${inter.variable}`}>
			<body>
				<Pixel />
				<WiggleProvider /> 
				{children}
			</body>
		</html>
	)
}
