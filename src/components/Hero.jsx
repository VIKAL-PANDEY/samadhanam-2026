import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { GOOGLE_FORM_URL } from '../config';
import './Hero.css';

export default function Hero() {
  const heroRef = useRef(null);
  const float1 = useRef(null);
  const float2 = useRef(null);
  const float3 = useRef(null);
  const float4 = useRef(null);

  useEffect(() => {
    // Mouse parallax effect for floating elements
    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 2; // -1 to 1
      const y = (e.clientY / innerHeight - 0.5) * 2; // -1 to 1

      gsap.to(float1.current, { x: x * -50, y: y * -50, duration: 1, ease: 'power2.out' });
      gsap.to(float2.current, { x: x * 30, y: y * 30, duration: 1, ease: 'power2.out' });
      gsap.to(float3.current, { x: x * -80, y: y * -80, duration: 1, ease: 'power2.out' });
      gsap.to(float4.current, { x: x * 60, y: y * 60, duration: 1, ease: 'power2.out' });
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Initial animation for hero content
    gsap.fromTo('.hero-content > *', 
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: 'back.out(1.7)', delay: 0.5 }
    );

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const handleRegisterClick = () => {
    window.open(GOOGLE_FORM_URL, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="section hero-section" id="hero" ref={heroRef}>
      {/* Floating Elements */}
      <div className="floating-element float-1" ref={float1}>!</div>
      <div className="floating-element float-2" ref={float2}>ERROR.EXE</div>
      <div className="floating-element float-3" ref={float3}></div>
      <div className="floating-element float-4" ref={float4}>?</div>

      <div className="hero-content">
        <div className="hero-title">
          <h1>HACKATHON</h1>
          <div className="text-sanskrit">समाधानम् 2026</div>
        </div>
        
        <div className="hero-subheadline">
          Bridging Gaps into Building Solutions.
        </div>

        <div className="hero-buttons">
          <button className="btn-neo btn-primary interactive" onClick={handleRegisterClick}>REGISTER NOW</button>
          <a href="#challenges" className="btn-neo btn-secondary interactive">EXPLORE CHALLENGES</a>
        </div>
      </div>

      <div className="scroll-indicator">
        <span>SCROLL TO HACK</span>
        <div className="scroll-arrow"></div>
      </div>
    </section>
  );
}
