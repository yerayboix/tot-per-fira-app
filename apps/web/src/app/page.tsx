"use client"

import { Hero } from "./_components/hero"
import { Services } from "./_components/services"
import { Products } from "./_components/products"
import { Testimonials } from "./_components/testimonials"
import { Coverage } from "./_components/coverage"
import { CTASection } from "./_components/cta-section"
import { Footer } from "./_components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Services />
      <Products />
      <Testimonials />
      <Coverage />
      <CTASection />
      <Footer />
    </main>
  )
}
