import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Navbar from './Navbar.jsx'
import Product from './Product.jsx'
import Banner from './Banner.jsx'
import Footer from './Footer.jsx'
import Categories from './Categories.jsx'
import About from './About.jsx'
import Contact from './Contact.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar />
    <main>
      <section id="home" className="scroll-mt-20">
        <Banner />
      </section>

      <section id="products" className="scroll-mt-20">
        <Product />
      </section>

      <section id="categories" className="scroll-mt-20 pt-16 min-h-[60vh] flex items-center justify-center bg-gray-50">
        <Categories />
      </section>

      <section id="deals" className="scroll-mt-20">
        <Banner />
      </section>

      <section id="about" className="scroll-mt-20">
        <About />
      </section>

      <section id="contact" className="scroll-mt-20">
        <Contact />
      </section>
    </main>
    <Footer />
  </StrictMode>,
) 
