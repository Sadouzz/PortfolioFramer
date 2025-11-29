import { useState, useEffect } from 'react'
import Header from './Comps/Header';
import Sidebar from './Comps/Sidebar';
import SidebarMobile from './Comps/SidebarMobile';
import ScrollToTop from './Comps/ScrollToTop';
import useIsDesktop from './hooks/useIsDesktop';
import ElementsFixed from './Comps/ElementsFixed';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Projects from './pages/Projects';
import './styles/main.scss';
import 'bootstrap/dist/css/bootstrap-utilities.min.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

// Import votre vidéo (mettez-la dans src/assets/)
import backgroundVideo from './assets/vid.mp4'; // ← Votre fichier vidéo

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(SplitText);

function AppContent() {
  const isDesktop = useIsDesktop(); // ← ici

  useEffect(() => {
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    ScrollTrigger.refresh();
    console.log(ScrollTrigger.getAll())
  }, [location?.pathname]);

  return (
    <div className="d-flex position-relative" style={{ minHeight: '100vh' }}>
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="position-fixed top-0 start-0 w-100 h-100 background-video"
        style={{
          objectFit: 'cover',
          zIndex: -1,
          filter: 'brightness(0.3) contrast(1.1)',
        }}
      >
        <source src={backgroundVideo} type="video/mp4" />
        <div className="bg-darkBlue position-absolute top-0 start-0 w-100 h-100"></div>
      </video>

      {/* Overlay */}
      <div
        className="position-fixed top-0 start-0 w-100 h-100"
        style={{
          background: 'linear-gradient(45deg, rgba(7, 20, 63, 0.3), rgba(78, 71, 198, 0.2))',
          zIndex: 0,
        }}
      ></div>

      {/* 👉 Desktop ou Mobile Sidebar */}
      {isDesktop ? <Sidebar /> : <SidebarMobile />}

      <main
        className="flex-grow-1 overflow-auto position-relative"
        style={{ zIndex: 20 }}
      >
        {isDesktop
          ?
          <>
            <Header />
            <ElementsFixed />
          </>
          :
          <></>}


        <div className={isDesktop ? "page-content" : "page-content-mobile"}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </div>
      </main>
    </div>
  );
}


function App() {
  return (
    <Router>
      <ScrollToTop/>
      <AppContent />
    </Router>
  )
}

export default App