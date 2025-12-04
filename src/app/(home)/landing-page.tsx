'use client'

import Header from '~/components/common/header'
import HeroSection from '~/features/landing/hero-section'
import Footer from '~/components/common/footer'
import HowItWorkSection from '~/features/landing/how-it-work'
import FeaturesSection from '~/features/landing/features'
import PricingSection from '~/features/landing/pricing'
import FinalCTASection from '~/features/landing/final-cta'
import TetimonialsSection from '~/features/landing/tetimonials'

export default function LandingPage() {
  return (
    <div className="bg-background min-h-screen overflow-x-hidden">
      <Header />
      <HeroSection />
      <HowItWorkSection />
      <FeaturesSection />
      <PricingSection />
      <TetimonialsSection />
      <FinalCTASection />
      <Footer />
    </div>
  )
}
