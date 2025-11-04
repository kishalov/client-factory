import FixedMenu from '@/components/layout/FixedMenu'
import Hero from '@/components/sections/Hero'
import HowItWorks from '@/components/sections/HowItWorks'
import LeadTypes from '@/components/sections/LeadFormats'
import WhatYouGet from '@/components/sections/WhatYouGet'
import WhoWeAre from '@/components/sections/WhoWeAre'
import WhoWeWorkWith from '@/components/sections/WhoWeWarkWith'
import WhyChoose from '@/components/sections/WhyUs'
import LeadCost from '@/components/sections/Cost'
import CTASection from '@/components/sections/CTA'
import FAQSection from '@/components/sections/FAQ'
import Footer from '@/components/layout/Footer'
import PopupForm from '@/components/layout/PopupForm'
import Testimonials from '@/components/sections/Testimonials'

export default function HomePage() {
	return (
		<>
			<FixedMenu />
			<PopupForm />
			<main className="bg-white">
					<Hero />
					<HowItWorks />
					<LeadTypes />
					<WhatYouGet />
					<WhoWeAre />
					<WhoWeWorkWith />
					<LeadCost />
					<CTASection />
					<Testimonials />
					<FAQSection />
					<Footer />
			</main>
		</>
	)
}
