import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import './Preloader.css';

export default function Preloader() {
  const containerRef = useRef(null);
  const cursorRef = useRef(null);
  const flashRef = useRef(null);
  const timelineRef = useRef(null);
  const [completed, setCompleted] = useState(false);

  const handleSkip = () => {
    if (timelineRef.current) {
      timelineRef.current.kill();
    }
    setCompleted(true);
    if (containerRef.current) {
      containerRef.current.style.display = 'none';
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        handleSkip();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    // We want the preloader to run only once and take about 10 seconds.
    const tl = gsap.timeline({
      onComplete: () => {
        setCompleted(true);
        // Force the app background to become visible by pushing this out of flow
        gsap.set(containerRef.current, { display: 'none' });
      }
    });
    timelineRef.current = tl;

    const lines = document.querySelectorAll('.terminal-line');
    
    // Type lines
    lines.forEach((line) => {
      tl.add(() => {
        lines.forEach(l => l.classList.remove('active'));
        line.classList.add('active');
      });
      // Rough step calculation based on char length
      tl.to(line, {
        width: '100%',
        duration: 1.2,
        ease: `steps(40)`,
      });
    });

    tl.add(() => {
      lines.forEach(l => l.classList.remove('active'));
    });

    // Pause slightly
    tl.to({}, { duration: 0.5 });

    // Falling Keys
    tl.to('.isometric-key', {
      y: 0,
      rotateX: 0,
      rotateZ: 0,
      opacity: 1,
      duration: 1.5,
      stagger: 0.1,
      ease: 'bounce.out',
    });

    // Cursor moves in
    tl.to(cursorRef.current, {
      opacity: 1,
      duration: 0.1
    });

    // Get position of Enter key to move cursor there
    const enterKey = document.querySelector('.enter-key');
    
    tl.to(cursorRef.current, {
      top: () => {
        return enterKey ? enterKey.getBoundingClientRect().top + 30 : '60%';
      },
      left: () => {
        return enterKey ? enterKey.getBoundingClientRect().left + 60 : '60%';
      },
      duration: 1.5,
      ease: 'power2.inOut',
    });

    // Cursor clicks "Enter"
    tl.to('.enter-key', {
      boxShadow: '0px 0px 0px var(--color-safety-orange)',
      x: 4,
      y: 4,
      duration: 0.1,
      yoyo: true,
      repeat: 1,
    });

    // Screen flashes brightly
    tl.to(flashRef.current, {
      opacity: 1,
      duration: 0.1,
    });

    // Hide preloader content
    tl.to(containerRef.current, {
      opacity: 0,
      duration: 0,
    });

    // Fade flash away
    tl.to(flashRef.current, {
      opacity: 0,
      duration: 1,
    });

  }, []);

  if (completed) return null;

  const keys = "SAMADHANAM".split("");

  return (
    <div className="preloader" ref={containerRef}>
      <button className="preloader-skip-btn interactive" onClick={handleSkip}>
        SKIP INTRO [ESC]
      </button>
      <div className="terminal-text">
        <span className="terminal-line">System initializing...</span>
        <span className="terminal-line">Bridging Gaps...</span>
        <span className="terminal-line">Building Solutions...</span>
        <span className="terminal-line">Welcome to Samadhanam.</span>
      </div>

      <div className="keys-container">
        {keys.map((key, index) => (
          <div key={index} className="isometric-key">
            {key}
          </div>
        ))}
        <div className="isometric-key enter-key">
          ENTER
        </div>
      </div>

      <div className="preloader-cursor" ref={cursorRef}></div>
      <div className="white-flash" ref={flashRef} style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', backgroundColor: 'white', opacity: 0, pointerEvents: 'none', zIndex: 10002 }}></div>
    </div>
  );
}
