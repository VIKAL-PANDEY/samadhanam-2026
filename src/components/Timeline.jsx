import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Timeline.css';

gsap.registerPlugin(ScrollTrigger);

const nodesData = [
  { 
    id: 1, 
    date: 'NOW', 
    title: 'Registration Open',
    desc: 'Form your teams and secure your spot.',
    status: 'ACTIVE',
    dtPercent: 0.08,
    mobPercent: 0.10
  },
  { 
    id: 2, 
    date: '25 JUN 2026', 
    title: 'Registration Deadline',
    desc: 'Last day to submit your team details.',
    status: 'PENDING',
    dtPercent: 0.29,
    mobPercent: 0.30
  },
  { 
    id: 3, 
    date: '4 JUL 2026', 
    title: 'Shortlisting & Mentorship',
    desc: 'Top ideas are selected for the finals.',
    status: 'PENDING',
    dtPercent: 0.54,
    mobPercent: 0.50
  },
  { 
    id: 4, 
    date: '24 JUL 2026', 
    title: 'Hackathon Day 1',
    desc: '24-hour coding sprint begins.',
    status: 'PENDING',
    dtPercent: 0.75,
    mobPercent: 0.70
  },
  { 
    id: 5, 
    date: '25 JUL 2026', 
    title: 'Hackathon Day 2',
    desc: 'Final pitches and award ceremony.',
    status: 'PENDING',
    dtPercent: 0.95,
    mobPercent: 0.90
  }
];

const DESKTOP_PATH = "M 0 200 L 100 200 C 200 200, 200 100, 300 100 L 400 100 C 500 100, 500 300, 600 300 L 700 300 C 800 300, 800 100, 900 100 L 950 100 C 1050 100, 1050 200, 1150 200 L 1200 200";
const MOBILE_PATH = "M 150 0 L 150 1000";

export default function Timeline() {
  const containerRef = useRef(null);
  const pathRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  const [progress, setProgress] = useState(0);
  const [selectedNode, setSelectedNode] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 968);
    };
    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleCheckpointClick = (id) => {
    setSelectedNode(prev => prev === id ? null : id);
  };

  useEffect(() => {
    if (!pathRef.current || !containerRef.current) return;

    const path = pathRef.current;
    const length = path.getTotalLength();

    // Prepare SVG for drawing
    gsap.set(path, {
      strokeDasharray: length,
      strokeDashoffset: length
    });

    const st = ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top 60%",
      end: "bottom 40%",
      scrub: 1, // Smooth scrubbing
      onUpdate: (self) => {
        const drawLength = length * self.progress;
        gsap.to(path, {
          strokeDashoffset: length - drawLength,
          duration: 0.1,
          overwrite: "auto"
        });
        setProgress(self.progress);
      }
    });

    return () => {
      st.kill();
    };
  }, [isMobile]); // Re-run if path changes due to breakpoint

  return (
    <section className="section timeline-section" id="timeline">
      {/* Background Orbs & Traces */}
      <div className="timeline-bg"></div>
      <div className="timeline-glow-blob blob-1"></div>
      <div className="timeline-glow-blob blob-2"></div>
      
      <h2 className="timeline-title">ARCHITECTURE / ROADMAP</h2>

      <div className="timeline-container" ref={containerRef}>
        
        {/* SVG Circuit */}
        <div className="svg-container">
          <svg 
            width="100%" 
            height="100%" 
            viewBox={isMobile ? "0 0 300 1000" : "0 0 1200 400"} 
            preserveAspectRatio="none"
          >
            {/* Layers for the road */}
            <path d={isMobile ? MOBILE_PATH : DESKTOP_PATH} className="road-shadow" />
            <path d={isMobile ? MOBILE_PATH : DESKTOP_PATH} className="road-base" />
            <path d={isMobile ? MOBILE_PATH : DESKTOP_PATH} className="road-lanes" />
            <path d={isMobile ? MOBILE_PATH : DESKTOP_PATH} className="road-neon" ref={pathRef} />
          </svg>
        </div>

        {/* HTML Checkpoint Nodes */}
        <div className="timeline-nodes-layer">
          {nodesData.map((node, index) => {
            // Calculate absolute position based on Desktop/Mobile coordinates
            let leftPos = 0;
            let topPos = 0;
            const threshold = isMobile ? node.mobPercent : node.dtPercent;

            if (!isMobile) {
              leftPos = node.dtPercent * 100;
              // Map Top Position from the desktop Y coordinates
              if(index === 0) topPos = 50; // 200 / 400
              if(index === 1) topPos = 25; // 100 / 400
              if(index === 2) topPos = 75; // 300 / 400
              if(index === 3) topPos = 25; // 100 / 400
              if(index === 4) topPos = 50; // 200 / 400
            } else {
              topPos = node.mobPercent * 100;
              leftPos = 50; // Center node horizontally on centered mobile path
            }

            const isActive = progress >= threshold;
            const labelSide = index % 2 === 0 ? 'label-left' : 'label-right';

            return (
              <div 
                key={node.id} 
                className={`node-wrapper ${labelSide} ${selectedNode === node.id ? 'show-popup' : ''}`}
                style={{ left: `${leftPos}%`, top: `${topPos}%` }}
              >
                <div 
                  className={`checkpoint interactive ${isActive ? 'active' : ''}`}
                  onClick={() => handleCheckpointClick(node.id)}
                >
                  <div className="checkpoint-inner"></div>
                </div>
                
                <div className="node-label">
                  <div className="node-date">{node.date}</div>
                  <div className="node-title">{node.title}</div>
                </div>

                {/* Retro Popup */}
                <div className="retro-popup">
                  <div className="popup-header">
                    <span>SYS.NODE.{node.id}</span>
                    <span 
                      className="popup-close-btn"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedNode(null);
                      }}
                      style={{ cursor: 'pointer', color: 'var(--color-hot-pink)' }}
                    >
                      [X]
                    </span>
                  </div>
                  <div style={{fontWeight: 'bold', marginBottom: '0.5rem'}}>{node.title}</div>
                  <div style={{fontSize: '0.9rem', marginBottom: '1rem'}}>{node.desc}</div>
                  <div className="popup-badge">STATUS: {node.status}</div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
