import { Hero } from "./_components/hero"
import { Services } from "./_components/services"
import { Products } from "./_components/products"
import { OurMission } from "./_components/our-mission"

export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="px-4">
        <Hero />
      </div>
      {/* Separator */}
      <hr className="border-gray-300" />
      <div className="px-4">
        <Services />
        <OurMission />
        <Products />
      </div>
      <div className="min-h-screen">

      </div>
    </div>
  )
}