import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './components/Header';
import HeaderMobile from './components/HeaderMobile';
import Footer from './components/Footer';
import FooterMobile from './components/FooterMobile';
import WhatsAppButton from './components/WhatsAppButton';
import ScrollProgress from './components/ScrollProgress';
import HomePage from './pages/HomePage';
import DespreNoi from './pages/DespreNoi';
import MontajAcoperisuri from './pages/MontajAcoperisuri';
import RenovareAcoperisuri from './pages/RenovareAcoperisuri';
import TiglaCeramica from './pages/TiglaCeramica';
import TiglaMetalica from './pages/TiglaMetalica';
import Mansardari from './pages/Mansardari';
import ReparatiiAcoperisuri from './pages/ReparatiiAcoperisuri';
import PoliticaConfidentialitate from './pages/PoliticaConfidentialitate';
import TermeniConditii from './pages/TermeniConditii';
import NotFound from './pages/NotFound';

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
      <ScrollProgress />
      <div className="min-h-screen bg-white">
        <HeaderMobile />
        <div className="hidden md:block">
          <Header />
        </div>
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/despre-noi" element={<DespreNoi />} />
            <Route path="/montaj-acoperisuri" element={<MontajAcoperisuri />} />
            <Route path="/servicii/montaj-acoperisuri" element={<MontajAcoperisuri />} />
            <Route path="/servicii/montaj-acoperisuri-noi" element={<MontajAcoperisuri />} />
            <Route path="/renovare-acoperisuri" element={<RenovareAcoperisuri />} />
            <Route path="/servicii/renovare-acoperisuri" element={<RenovareAcoperisuri />} />
            <Route path="/tigla-ceramica" element={<TiglaCeramica />} />
            <Route path="/servicii/tigla-ceramica" element={<TiglaCeramica />} />
            <Route path="/tigla-metalica" element={<TiglaMetalica />} />
            <Route path="/servicii/tigla-metalica" element={<TiglaMetalica />} />
            <Route path="/mansardari" element={<Mansardari />} />
            <Route path="/servicii/mansardari" element={<Mansardari />} />
            <Route path="/reparatii-acoperisuri" element={<ReparatiiAcoperisuri />} />
            <Route path="/servicii/reparatii-acoperisuri" element={<ReparatiiAcoperisuri />} />
            <Route path="/politica-confidentialitate" element={<PoliticaConfidentialitate />} />
            <Route path="/termeni-conditii" element={<TermeniConditii />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <div className="md:hidden">
          <FooterMobile />
        </div>
        <div className="hidden md:block">
          <Footer />
        </div>
        <WhatsAppButton />
      </div>
    </BrowserRouter>
  );
}

export default App;
