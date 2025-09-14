import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Thanks from './pages/Thanks';
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
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/thanks" element={<Thanks />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;