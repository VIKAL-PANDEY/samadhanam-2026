import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Draggable } from 'gsap/Draggable';
import './About.css';

gsap.registerPlugin(ScrollTrigger, Draggable);

export default function About() {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  const galleryRef = useRef(null);
  const cardsRef = useRef([]);

  const images = [
    { src: 'https://i.pinimg.com/736x/1c/59/d3/1c59d3234a1d449709bdaebe4ac3c762.jpg', caption: 'IDEA Lab' },
    { src: 'https://i.pinimg.com/736x/da/59/a7/da59a7db4502e571a86fba9d38dba9af.jpg', caption: 'Campus' },
    { src: 'https://i.pinimg.com/1200x/8e/5b/0d/8e5b0de84f3853db0c7288207bd185e3.jpg', caption: 'Hackathon' }
  ];

  useEffect(() => {
    // Scroll Animation
    gsap.fromTo(contentRef.current,
      { x: -100, opacity: 0 },
      {
        x: 0, opacity: 1, duration: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse"
        }
      }
    );

    gsap.fromTo(galleryRef.current,
      { x: 100, opacity: 0 },
      {
        x: 0, opacity: 1, duration: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Draggable Polaroids Setup
    cardsRef.current.forEach((card, i) => {
      if (!card) return;
      
      if (window.innerWidth >= 768) {
        gsap.set(card, {
          rotation: Math.random() * 20 - 10,
          x: Math.random() * 40 - 20,
          y: Math.random() * 40 - 20,
          zIndex: images.length - i
        });

        Draggable.create(card, {
          type: "x,y",
          bounds: galleryRef.current,
          edgeResistance: 0.65,
          onDragStart: function() {
            gsap.to(this.target, { scale: 1.05, boxShadow: "12px 12px 0px var(--color-black)", duration: 0.2 });
            gsap.set(this.target, { zIndex: 100 });
          },
          onDragEnd: function() {
            gsap.to(this.target, { scale: 1, boxShadow: "8px 8px 0px var(--color-black)", duration: 0.2 });
            // Demote z-index slightly to allow others to be brought to front
            gsap.set(this.target, { zIndex: 50 });
          }
        });
      }

    });

  }, []);

  return (
    <section className="section about-section" id="about" ref={sectionRef}>
      <div className="about-content" ref={contentRef}>
        <h2 className="about-title">
          SAMADHANAM
          <span>Decode real-world inefficiency -Deploy high-utility architecture</span>
        </h2>

        <div className="about-text-block">
          <h3>Institutional Context</h3>
          <p>
            IPS Academy, Indore is a premier institution dedicated to cultivating professional excellence. Backed by AICTE IDEA Lab, we provide a foundation for robust engineering and real-world problem solving.
          </p>
        </div>

        <div className="about-text-block" style={{ transform: 'rotate(1deg)' }}>
          <h3>Hackathon Objective</h3>
          <p>
            A hyper-focused development vehicle challenging bright engineering cohorts to construct solutions for internal campus bottlenecks and global technological gaps.
          </p>
        </div>
      </div>

      <div className="about-gallery" ref={galleryRef} data-lenis-prevent>
        {images.map((img, index) => (
          <div 
            key={index} 
            className="polaroid-card interactive" 
            ref={el => cardsRef.current[index] = el}
          >
            <img src={img.src} alt={img.caption} className="polaroid-img" />
            <div className="polaroid-caption">{img.caption}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
