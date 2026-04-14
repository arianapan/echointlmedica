import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Thanks from './pages/Thanks';
import CroCostArbitrage from './pages/articles/CroCostArbitrage';
import AiAdvisory from './pages/articles/AiAdvisory';
import HospitalPartnerships from './pages/articles/HospitalPartnerships';
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
      </Routes>
      <Footer />
    </div>
  );
}

export default App;