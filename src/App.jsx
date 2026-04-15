import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Thanks from './pages/Thanks';
import CroCostArbitrage from './pages/articles/CroCostArbitrage';
import AiAdvisory from './pages/articles/AiAdvisory';
import HospitalPartnerships from './pages/articles/HospitalPartnerships';
import ChinaEntryOncology from './pages/articles/ChinaEntryOncology';
import CancerCenterPartnership from './pages/articles/CancerCenterPartnership';
import AiFundraisingPackage from './pages/articles/AiFundraisingPackage';
import FractionalAiCfo from './pages/FractionalAiCfo';
import CompareFractionalCfo from './pages/CompareFractionalCfo';
import { useEffect } from 'react';
import { ToastContainer } from 'react-toastify';

function App() {
  // Defer toast CSS to reduce render-blocking
  useEffect(() => {
    import('react-toastify/dist/ReactToastify.css');
  }, []);
  return (
    <div className="min-h-screen">
      <ToastContainer />
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/thanks" element={<Thanks />} />
        <Route path="/insights/chinese-cros-cost-arbitrage" element={<CroCostArbitrage />} />
        <Route path="/insights/ai-reshaping-biotech-consulting" element={<AiAdvisory />} />
        <Route path="/insights/pacific-hospital-partnerships" element={<HospitalPartnerships />} />
        <Route path="/case-studies/us-oncology-china-entry" element={<ChinaEntryOncology />} />
        <Route path="/case-studies/us-china-cancer-center-partnership" element={<CancerCenterPartnership />} />
        <Route path="/case-studies/ai-fundraising-package-5-days" element={<AiFundraisingPackage />} />
        <Route path="/services/fractional-ai-cfo" element={<FractionalAiCfo />} />
        <Route path="/compare/fractional-cfo-biotech" element={<CompareFractionalCfo />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;