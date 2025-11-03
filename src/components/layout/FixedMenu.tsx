'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

export default function FixedMenu() {
	const [open, setOpen] = useState(false)
	useEffect(() => {
		// 🚫 Блокировка скролла при открытом меню
		document.body.style.overflow = open ? 'hidden' : ''

		// 🎯 Плавный скролл для якорных ссылок
		const links = document.querySelectorAll('a[href^="#"]')
		const handleClick = (e: Event) => {
			const target = e.currentTarget as HTMLAnchorElement
			const id = target.getAttribute('href')?.substring(1)
			const section = id ? document.getElementById(id) : null
			if (section) {
				e.preventDefault()

				// 📱 адаптивный отступ
				const isMobile = window.innerWidth < 1024
				const yOffset = isMobile ? -100 : -200

				const y =
					section.getBoundingClientRect().top + window.pageYOffset + yOffset

				window.scrollTo({ top: y, behavior: 'smooth' })
				setOpen(false)
			}
		}

		links.forEach(link => link.addEventListener('click', handleClick))

		// 🔥 Подсветка активного пункта меню
		const sections = document.querySelectorAll('section[id]')
		const menuLinks = document.querySelectorAll('.link-underline')

	const handleScroll = () => {
		let current = ''
		sections.forEach(section => {
			const el = section as HTMLElement
			const sectionTop = el.offsetTop - 140 // отступ под хэдер
			if (window.scrollY >= sectionTop) {
				current = el.getAttribute('id') || ''
			}
		})

		menuLinks.forEach(link => {
			link.classList.remove('active')
			if (link.getAttribute('href') === `#${current}`) {
				link.classList.add('active')
			}
		})
	}


	window.addEventListener('scroll', handleScroll)

	// Очистка
	return () => {
		links.forEach(link => link.removeEventListener('click', handleClick))
		window.removeEventListener('scroll', handleScroll)
	}
}, [open])


	return (
		<>
			{/* ====== Десктоп-хэдер ====== */}
			<header className="container fixed top-0 left-0 z-50 hidden lg:block">
				<div className="flex items-center justify-between bg-white shadow-[0_10px_20px_-5px_rgba(0,0,0,0.1)] p-3 rounded-b-[40px]">
					<Link
						href="/"
						className="flex items-center hover:-rotate-3 hover:scale-[110%] transition-all duration-200 pl-5"
					>
						<Image
							src="images/logo.svg"
							alt="Client Factory logo"
							width={48}
							height={58}
							className="object-contain"
						/>
					</Link>

					<nav className="flex items-center justify-between gap-10">
						<Link href="#how" className="link-underline smalltext uppercase text-black">
							HOW IT WORKS
						</Link>
						<Link href="#leads" className="link-underline smalltext uppercase text-black">
							LEAD TYPES
						</Link>
						<Link href="#get" className="link-underline smalltext uppercase text-black">
							WHAT YOU GET
						</Link>
						<Link href="#about" className="link-underline smalltext uppercase text-black">
							ABOUT US
						</Link>
						<Link href="#cost" className="link-underline smalltext uppercase text-black">
							PRICING
						</Link>
					</nav>

					<div className="flex items-center gap-8">
						<a
							href="tel:+27609539763"
							className="link-underline uppercase text-black tinyheading"
						>
							+27 60 953 9763
						</a>
						<button data-popup="true" className="btn-corners">
							<span>Get clients</span>
						</button>
					</div>
				</div>
			</header>

			{/* ====== Мобильный бургер (одна кнопка) ====== */}
			<button
				onClick={() => setOpen(!open)}
				className="lg:hidden fixed top-5 right-5 bg-[#C0A5F2] text-black p-3 rounded-full z-50 transition-transform duration-200"
			>
				{open ? <X size={26} /> : <Menu size={26} />}
			</button>

			{/* ====== Выезжающее меню ====== */}
			<div
				className={`fixed top-0 right-0 h-full w-2/3 bg-[#C0A5F2] text-black flex flex-col justify-between transform transition-transform duration-300 ease-in-out z-40
				${open ? 'translate-x-0' : 'translate-x-full'} lg:hidden`}
			>
				<nav className="flex flex-col gap-6 p-10 mt-20 text-lg font-semibold uppercase">
					<Link href="#how" onClick={() => setOpen(false)}>How it works</Link>
					<Link href="#leads" onClick={() => setOpen(false)}>Lead types</Link>
					<Link href="#get" onClick={() => setOpen(false)}>What you get</Link>
					<Link href="#about" onClick={() => setOpen(false)}>About us</Link>
					<Link href="#cost" onClick={() => setOpen(false)}>Pricing</Link>
				</nav>
				<div className="flex flex-col items-start p-10 gap-8">
						<a
							href="tel:+27871234567"
							className="link-underline uppercase text-black tinyheading"
						>
							+27 87 123 4567
						</a>
						<button data-popup="true"  className="btn-corners">
							<span>Get clients</span>
						</button>
					</div>
			</div>

			{/* Затемнение при открытии меню */}
			{open && (
				<div
					className="fixed inset-0 bg-black/40 backdrop-blur-sm z-30 lg:hidden"
					onClick={() => setOpen(false)}
				/>
			)}
		</>
	)
}
