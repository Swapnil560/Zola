import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import Home from './pages/Home.tsx'
import Tours from './pages/Tours.tsx'
import BikeDetails from './pages/BikeDetails.tsx'
import About from './pages/About.tsx'
import TermsConditions from './pages/TermsConditions.tsx'
import Services from './pages/Services.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tours" element={<Tours />} />
        <Route path="/tours/:id" element={<Tours />} />
        <Route path="/bike-details/:id" element={<BikeDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/terms-conditions" element={<TermsConditions />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)