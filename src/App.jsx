import { useEffect, useRef } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Preloader from './components/Preloader';
import Hero from './components/Hero';
import About from './components/About';
import Timeline from './components/Timeline';
import ChallengeMatrix from './components/ChallengeMatrix';
import ProblemTracks from './components/ProblemTracks';
import Judges from './components/Judges';
import Awards from './components/Awards';
import Registration from './components/Registration';
import RulesFAQ from './components/RulesFAQ';
import Team from './components/Team';
import Footer from './components/Footer';
import Header from './components/Header';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const cursorRef = useRef(null);

  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    // Custom Cursor logic
    const moveCursor = (e) => {
      gsap.to(cursorRef.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
        ease: 'power2.out'
      });
    };
    
    window.addEventListener('mousemove', moveCursor);

    // Add active class on clickable elements hover
    const handleMouseOver = (e) => {
      if (e.target.closest('a, button, .interactive, .cursor-pointer')) {
        cursorRef.current?.classList.add('active');
      } else {
        cursorRef.current?.classList.remove('active');
      }
    };
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <div className="custom-cursor" ref={cursorRef} style={{ pointerEvents: 'none' }}></div>
      <div className="app-container">
        <main className="main-content bg-grid">
          <Preloader />
          <Header />
          <Hero />
          <About />
          <Timeline />
          <ChallengeMatrix />
          <ProblemTracks />
          <Judges />
          <Awards />
          <Registration />
          <RulesFAQ />
          <Team />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
