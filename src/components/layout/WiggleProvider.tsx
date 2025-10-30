'use client'
import { useEffect } from 'react'
import { randomizeWiggles } from '@/lib/randomizeWiggles'

export default function WiggleProvider() {
	useEffect(() => {
		randomizeWiggles()

		// если хочешь, чтобы пересчитывало при ресайзе:
		const handleResize = () => randomizeWiggles()
		window.addEventListener('resize', handleResize)
		return () => window.removeEventListener('resize', handleResize)
	}, [])

	return null
}
