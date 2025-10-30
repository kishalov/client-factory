export function randomizeWiggles() {
	if (typeof document === 'undefined') return

	document.querySelectorAll('.animate-wiggle').forEach(el => {
		const randomDelay = (Math.random() * 5).toFixed(2) + 's'
		const randomDuration = (10 + Math.random() * 4).toFixed(2) + 's'
		;(el as HTMLElement).style.setProperty('--wiggle-delay', randomDelay)
		;(el as HTMLElement).style.setProperty('--wiggle-duration', randomDuration)
	})
}
