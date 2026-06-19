import React, { useState } from 'react';
import './ProblemTracks.css';

const trackA = [
  { id: 'P01', title: 'Smart Attendance Tracking', img: 'https://i.pinimg.com/736x/93/bb/e3/93bbe3772156de313e7bf7d7ac46e2a8.jpg', front: 'Automating proxy-free classroom verification...', back: 'Traditional attendance tracking methods like manual roll calls or basic RFID cards are highly prone to proxy attendance, buddy punching, and significant time loss. The challenge is to develop a seamless, biometric, face-recognition, or geolocation-fenced multi-factor verification system.' },
  { id: 'P02', title: 'Lab Resource Scheduler', img: 'https://i.pinimg.com/736x/da/59/a7/da59a7db4502e571a86fba9d38dba9af.jpg', front: 'Real-time availability tracking...', back: 'Educational institutions suffer from unoptimized utilization of high-end laboratory equipment and computer labs. Design a dynamic, real-time resource allocation and scheduling platform that tracks hardware availability and manages overlapping requests.' },
  { id: 'P03', title: 'Campus Navigation & Crowding', img: 'https://i.pinimg.com/736x/1c/59/d3/1c59d3234a1d449709bdaebe4ac3c762.jpg', front: 'Interactive or AR-based mapping...', back: 'Large institutional campuses present complex layouts that make navigation difficult. Solutions must provide interactive, real-time indoor/outdoor pathfinding (potentially AR-assisted) coupled with live crowd-density heatmaps.' },
  { id: 'P04', title: 'Electricity Conservation Nodes', img: 'https://i.pinimg.com/1200x/8e/5b/0d/8e5b0de84f3853db0c7288207bd185e3.jpg', front: 'Low-cost IoT sensor automation...', back: 'Empty classrooms frequently leave fans, lighting, and AC running continuously. Build an intelligent, decentralized mesh of low-cost IoT sensor nodes that detect occupancy and ambient light conditions to dynamically automate power control.' },
  { id: 'P05', title: 'Placement & Alumni Tracker', img: 'https://i.pinimg.com/1200x/f0/e7/eb/f0e7eb66dc7cdccac83de4b10cec3690.jpg', front: 'A unified corporate portal mapping...', back: 'TPCs operate using fragmented spreadsheets. Build a secure, centralized portal that bridges students, recruiters, and alumni—featuring live placement milestone tracking, resume indexing, and verified alumni mentorship engines.' },
  { id: 'P06', title: 'Assignment Feedback Loop', img: 'https://i.pinimg.com/736x/5d/15/10/5d1510acd74b721c64197d0fceae91b8.jpg', front: 'Digitizing handwritten engineering sheets...', back: 'Engineering curricula heavily rely on handwritten sheets. Build an AI-powered digitization engine that scans, parses, checks for variations, and allows evaluators to annotate digital copies directly for instantaneous feedback.' },
  { id: 'P07', title: 'Internal Transit & Parking', img: 'https://i.pinimg.com/736x/81/fa/4e/81fa4eabb75f5a0630022e75a3d3bde0.jpg', front: 'Real-time tracking of internal campus shuttle...', back: 'Commuters waste time due to unpredictable shuttle schedules and unmanaged parking. Develop a real-time transit telemetry pipeline alongside a smart parking layout monitor that updates available slots dynamically.' },
  { id: 'P08', title: 'Secured Exam Evaluation', img: 'https://i.pinimg.com/736x/2a/17/ea/2a17ea60d4b1da0cb281d95e0de9d79f.jpg', front: 'Encrypted internal workflow engine...', back: 'Exam evaluation is vulnerable to insider tampering and structural leaks. Build a tamper-proof internal workflow engine that enforces end-to-end encryption on question paper transmission and unalterable cryptographic grade logging.' },
  { id: 'P09', title: 'Library Demand Forecaster', img: 'https://i.pinimg.com/736x/a7/b4/7f/a7b47fb870a9e5490bb88d0319500122.jpg', front: 'Machine learning models to predict textbook demand...', back: 'College libraries frequently encounter systemic inefficiencies, leading to shortages. Require predictive ML models that analyze historical borrowing trends, syllabus structures, and real-time student search volumes to forecast demand.' },
  { id: 'P10', title: 'Grievance Box & Wellness', img: 'https://i.pinimg.com/736x/09/21/f2/0921f244ca8cbe7bd5b92175f3a2d833.jpg', front: 'Fully encrypted, anonymous communication...', back: 'Students hesitate to report sensitive issues due to fear of stigma. Requirement is a zero-knowledge, fully anonymous cryptographic communication matrix that allows secure reports without revealing network identity.' },
  { id: 'P11', title: 'Dynamic Wi-Fi Throttling', img: 'https://i.pinimg.com/1200x/2b/ff/b9/2bffb9fa67aebf556406c497c21a48c6.jpg', front: 'Bandwidth distribution engines prioritizing...', back: 'Institutional Wi-Fi faces severe latency because non-academic usage chokes critical infrastructure. Create a dynamic bandwidth management engine that intelligently deprioritizes entertainment traffic.' },
  { id: 'P12', title: 'Campus Management System', img: 'https://i.pinimg.com/1200x/21/cc/7e/21cc7edd174143f76ba12e0aa3b84c56.jpg', front: 'Integrated digital architecture for total campus resource planning.', back: 'Most institutes run on isolated legacy software silos. Design a monolithic, high-availability, integrated digital enterprise resource planning (ERP) system that synchronizes all campus data verticals securely.' },
  { id: 'P13', title: 'Attendance System', img: 'https://i.pinimg.com/736x/c7/fa/3f/c7fa3f4ca9b1e6fbbdbc05f49c80b949.jpg', front: 'Seamless, proxy-free attendance tracking workflows.', back: 'Standard app-based QR systems are easily subverted. Calls for an ultra-secure, localized tracking workflow that hard-binds MAC addresses, time-windows, and localized Bluetooth/Wi-Fi signal fencing.' }
];

const trackB = [
  { id: 'P14', title: 'Remote Area Telemedicine', img: 'https://i.pinimg.com/736x/1b/70/46/1b70461227f5717a09c2299c39152adc.jpg', front: 'Low-bandwidth video diagnostics...', back: 'Rural healthcare suffers from specialized personnel shortage. Create a hyper-optimized web diagnostic matrix that runs compression algorithms, transmits vital patient data streams natively under erratic 2G/3G.' },
  { id: 'P15', title: 'Agri Supply Chain Ledger', img: 'https://i.pinimg.com/736x/fd/ed/67/fded6726ec8563adab516f548fc3a93f.jpg', front: 'Decentralized ledger infrastructure tracking...', back: 'The agricultural ecosystem lacks transparency. Build a decentralized ledger platform tracking agricultural goods from harvesting phases, through transport nodes, to retail points.' },
  { id: 'P16', title: 'Smart Emergency Corridors', img: 'https://i.pinimg.com/1200x/19/34/48/193448f71f7fdf8f58d00be7f8a9db12.jpg', front: 'Computer-vision signal coordination...', back: 'Emergency vehicles face life-threatening delays due to fixed traffic lights. Design a CV-driven management overlay that detects oncoming sirens and automatically overrides downstream traffic intervals.' },
  { id: 'P17', title: 'E-Waste Lifecycle Tracking', img: 'https://i.pinimg.com/736x/b4/77/36/b47736e858b3fcf1d64ebc92be60489d.jpg', front: 'Traceability marketplace for collecting...', back: 'Improper disposal of e-waste results in toxic pollution. Solution requires a traceability marketplace that incentivizes recycling, logs verified lifecycles, and securely connects local hubs with authorized extraction plants.' },
  { id: 'P18', title: 'Deepfake Filtration Engine', img: 'https://i.pinimg.com/1200x/83/ea/f3/83eaf3c96fc845dbd926cafa428e9072.jpg', front: 'Browser-level verification APIs...', back: 'Generative AI enables hyper-realistic deepfakes. This demands a lightweight, browser-level verification API that analyzes media metadata and structural artifacts in real-time to alert users.' },
  { id: 'P19', title: 'Renewable Grid Balancer', img: 'https://i.pinimg.com/736x/1c/13/2c/1c132c8c0bf057ab3b5c9f437839fb28.jpg', front: 'Machine learning optimization loops...', back: 'Modern power grids struggle to integrate volatile green energy. Develop a high-speed ML optimization system that processes historical load trends and real-time weather feeds to dynamically balance grid storage.' },
  { id: 'P20', title: 'Water Quality Sensor Network', img: 'https://i.pinimg.com/1200x/4d/0f/0a/4d0f0acff3a97a5b9638531a0fed96e5.jpg', front: 'Distributed low-cost sensor nodes...', back: 'Municipal water networks distribute polluted water because checks are manual. Create a scalable sensor node framework tracking pH levels, turbidity, and impurities continuously feeding to an automated alerting pipeline.' },
  { id: 'P21', title: 'Cryptographic Voting Matrix', img: 'https://i.pinimg.com/1200x/b2/80/d2/b280d2ed61fbddd6d49427f4b4b7c81d.jpg', front: 'Tamper-proof, zero-knowledge voting...', back: 'Conventional voting frameworks are vulnerable. The objective is to build a tamper-proof cryptographic voting matrix utilizing ZKP to ensure absolute voter anonymity and verifiable individual tallies.' },
  { id: 'P22', title: 'AI Predictive Maintenance', img: 'https://i.pinimg.com/1200x/ae/90/55/ae9055382d8d8e4095e5781302a6f075.jpg', front: 'Acoustic and thermal signature vibration...', back: 'Heavy machinery suffers catastrophic failures due to reactive maintenance. Build an edge-AI parsing dashboard that analyzes high-frequency acoustic emissions and thermodynamic changes to map upcoming failures days before breakdown.' },
  { id: 'P23', title: 'Adaptive Sign Language Engine', img: 'https://i.pinimg.com/736x/6d/4b/42/6d4b42d3d7fab5237b573b2073f0a977.jpg', front: 'Real-time speech-to-sign transcription...', back: 'Deaf communities face accessibility blocks because voice-to-text ignores sign language nuances. Target is an adaptive, real-time sign language conversion engine that parses gestures into spoken phrases and vice versa.' }
];

const colors = ['var(--color-electric-blue)', 'var(--color-neon-green)', 'var(--color-hot-pink)', 'var(--color-white)'];

const TradingCard = ({ item, index }) => {
  const [flipped, setFlipped] = useState(false);
  const bgColor = colors[index % colors.length];

  return (
    <div className="trading-card-wrapper">
      <div 
        className={`trading-card interactive ${flipped ? 'flipped' : ''}`}
        onClick={() => setFlipped(!flipped)}
      >
        <div className="card-face card-front" style={{ backgroundColor: bgColor }}>
          <div className="card-image-container">
            <img src={item.img} alt={item.title} className="card-image" />
          </div>
          <div className="card-content">
            <div className="card-watermark">{item.id}</div>
            <h3 className="card-title">{item.title}</h3>
            <p className="card-desc">{item.front}</p>
            <div className="flip-hint">CLICK TO FLIP</div>
          </div>
        </div>

        <div className="card-face card-back">
          <h3 className="back-title">{item.title} [ {item.id} ]</h3>
          <p className="back-desc">{item.back}</p>
          <div className="flip-hint" style={{ backgroundColor: 'var(--color-white)', color: 'var(--color-black)' }}>FLIP BACK</div>
        </div>
      </div>
    </div>
  );
};

export default function ProblemTracks() {
  return (
    <section className="section problem-tracks-section" id="tracks">
      <div className="track-header">
        <h2 className="track-title">TRACK A: CAMPUS & INSTITUTIONAL</h2>
      </div>
      <div className="track-carousel">
        {trackA.map((item, index) => (
          <TradingCard key={item.id} item={item} index={index} />
        ))}
      </div>

      <div className="track-header" style={{ marginTop: '4rem' }}>
        <h2 className="track-title" style={{ backgroundColor: 'var(--color-black)', color: 'var(--color-white)', boxShadow: '6px 6px 0px var(--color-hot-pink)' }}>
          TRACK B: GLOBAL & HEALTHCARE
        </h2>
      </div>
      <div className="track-carousel">
        {trackB.map((item, index) => (
          <TradingCard key={item.id} item={item} index={index} />
        ))}
      </div>
    </section>
  );
}
