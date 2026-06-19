import React, { useRef, useState } from 'react';
import gsap from 'gsap';
import './RulesFAQ.css';

const faqs = [
  { q: "Who can participate?", a: "Any enrolled engineering student with a valid college ID from a recognized institution." },
  { q: "What is the team size?", a: "Teams must consist of strictly 3 to 5 members." },
  { q: "Is there a registration fee?", a: "No, registration is completely free for all participating teams." },
  { q: "Can we submit multiple ideas?", a: "Yes, teams can submit up to two ideas during the initial screening phase, but must choose one for the final hackathon." },
  { q: "Will hardware be provided?", a: "Basic sensors and standard hardware will be provided via the IDEA Lab. Specialized equipment must be brought by the team." }
];

export default function RulesFAQ() {
  const [activeIndex, setActiveIndex] = useState(null);
  const contentRefs = useRef([]);

  const toggleAccordion = (index) => {
    const isExpanding = activeIndex !== index;
    
    // Close currently open
    if (activeIndex !== null && activeIndex !== index) {
      gsap.to(contentRefs.current[activeIndex], {
        height: 0,
        duration: 0.4,
        ease: "power2.inOut"
      });
    }

    if (isExpanding) {
      // Open new
      const el = contentRefs.current[index];
      gsap.set(el, { height: 'auto' });
      const height = el.clientHeight;
      gsap.set(el, { height: 0 });
      
      gsap.to(el, {
        height: height,
        duration: 0.5,
        ease: "back.out(1.2)" // Spring-based expand
      });
      setActiveIndex(index);
    } else {
      // Close itself
      gsap.to(contentRefs.current[index], {
        height: 0,
        duration: 0.4,
        ease: "power2.inOut"
      });
      setActiveIndex(null);
    }
  };

  return (
    <section className="section faq-section" id="faq">
      <h2 className="faq-title">RULES & FAQ</h2>
      
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div 
            key={index} 
            className={`faq-item interactive ${activeIndex === index ? 'active' : ''}`}
          >
            <div className="faq-question" onClick={() => toggleAccordion(index)}>
              {faq.q}
              <div className="faq-icon">+</div>
            </div>
            <div className="faq-answer-wrapper" ref={el => contentRefs.current[index] = el}>
              <div className="faq-answer">{faq.a}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
