import Hero from "./components/sections/Hero"
import About from "./components/sections/About"
import Videos from "./components/sections/Videos"
import Pricing from "./components/sections/Pricing"
import Testimonials from "./components/sections/Testimonials"
import Gallery from "./components/sections/Gallery"
import CTA from "./components/sections/CTA"
import Footer from "./components/sections/Footer"
import WhatsAppButton from "./components/ui/WhatsAppButton"

function App() {
  return (
    <>
      <Hero />
      <About />
      <Videos />
      <Pricing />
      <Testimonials />
      <Gallery />
      <CTA />
      <Footer />
      <WhatsAppButton />
    </> 
  )
}

export default App