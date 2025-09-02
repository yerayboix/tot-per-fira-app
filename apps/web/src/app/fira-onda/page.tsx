import { Hero } from "./_components/hero"
import { ConfidenceSection } from "./_components/confidence-section"
import { ServicesSection } from "./_components/services-section"
import { AnniversarySection } from "./_components/anniversary-section"
import { DrinksSection } from "./_components/drinks-section"
import { CTASection } from "./_components/cta-section"

export default function FiraOndaPage() {
  return (
    <div className="min-h-screen">
      <div className="px-2">
        <Hero />
      </div>
      <div className="px-2">
        <ConfidenceSection />
        <ServicesSection />
        <DrinksSection />
        <AnniversarySection />
        <CTASection />
      </div>
    </div>
  )
}
