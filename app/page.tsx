import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Portfolio } from "@/components/portfolio"
import { Services } from "@/components/services"
import { About } from "@/components/about"
import { Testimonials } from "@/components/testimonials"
import { Calculator } from "@/components/calculator"
import { Process } from "@/components/process"
import { WhatsAppCTA } from "@/components/whatsapp-cta"
import { MapSection } from "@/components/map-section"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Portfolio />
        <Services />
        <About />
        <Testimonials />
        <Calculator />
        <Process />
        <WhatsAppCTA />
        <MapSection />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
