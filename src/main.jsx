import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Navbar from './Navbar.jsx'
import Product from './Product.jsx'
import Banner from './Banner.jsx'
import Footer from './Footer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar />
    <Banner />
    <Product />
    <Banner />
    <Footer />
  </StrictMode>,
) 
