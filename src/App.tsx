import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import HomePage from './pages/HomePage';
import MontajAcoperisuri from './pages/MontajAcoperisuri';
import RenovareAcoperisuri from './pages/RenovareAcoperisuri';
import TiglaCeramica from './pages/TiglaCeramica';
import TiglaMetalica from './pages/TiglaMetalica';
import Mansardari from './pages/Mansardari';
import ReparatiiAcoperisuri from './pages/ReparatiiAcoperisuri';

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-white">
        <Header />
        <main className="pt-20">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/servicii/montaj-acoperisuri" element={<MontajAcoperisuri />} />
            <Route path="/servicii/montaj-acoperisuri-noi" element={<MontajAcoperisuri />} />
            <Route path="/servicii/renovare-acoperisuri" element={<RenovareAcoperisuri />} />
            <Route path="/servicii/tigla-ceramica" element={<TiglaCeramica />} />
            <Route path="/servicii/tigla-metalica" element={<TiglaMetalica />} />
            <Route path="/servicii/mansardari" element={<Mansardari />} />
            <Route path="/servicii/reparatii-acoperisuri" element={<ReparatiiAcoperisuri />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </BrowserRouter>
  );
}

export default App;
