import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AOS from 'aos';

import Preloader from './components/Preloader.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import ScrollTop from './components/ScrollTop.jsx';
import ScrollToTopOnNavigate from './components/ScrollToTopOnNavigate.jsx';

import Home from './pages/Home.jsx';
import AboutPage from './pages/AboutPage.jsx';
import ResumePage from './pages/ResumePage.jsx';
import ContactPage from './pages/ContactPage.jsx';

export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false,
    });
  }, []);

  return (
    <BrowserRouter>
      <Preloader />
      <Header />
      <ScrollToTopOnNavigate />
      <main className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/resume" element={<ResumePage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
      <ScrollTop />
    </BrowserRouter>
  );
}
