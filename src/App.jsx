import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import DemoBanner from './components/DemoBanner';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import PermawebBadge from './components/PermawebBadge';
import FloatingWhatsApp from './components/FloatingWhatsApp';

import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import ConsultationsPage from './pages/ConsultationsPage';
import VaccinationPage from './pages/VaccinationPage';
import TeamPage from './pages/TeamPage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-crema text-forest selection:bg-salvia/30 selection:text-forest">
        {/* Top Demo Banner */}
        <DemoBanner />

        {/* Sticky Header */}
        <Navbar />

        {/* Main Content Router */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/servicios" element={<ServicesPage />} />
            <Route path="/servicios/consultas" element={<ConsultationsPage />} />
            <Route path="/servicios/vacunacion" element={<VaccinationPage />} />
            <Route path="/equipo" element={<TeamPage />} />
            <Route path="/contacto" element={<ContactPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>

        {/* Global Footer */}
        <Footer />

        {/* Floating Utilities */}
        <PermawebBadge />
        <FloatingWhatsApp />
      </div>
    </BrowserRouter>
  );
}
