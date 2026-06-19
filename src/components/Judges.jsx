import React from 'react';
import './Judges.css';

export default function Judges() {
  const judges = [
    { name: "DR. JANE DOE", role: "CHIEF ARCHITECT", img: "https://via.placeholder.com/120" },
    { name: "MR. JOHN SMITH", role: "INDUSTRY EXPERT", img: "https://via.placeholder.com/120" },
    { name: "ALEX CHEN", role: "VENTURE CAPITALIST", img: "https://via.placeholder.com/120" }
  ];

  return (
    <section className="section judges-section" id="judges">
      <h2 className="judges-title">THE JURY PANEL</h2>
      
      <div className="judges-container">
        {judges.map((judge, idx) => (
          <div key={idx} className="judge-badge-wrapper interactive">
            <div className="lanyard-loop"></div>
            <div className="badge-clip"></div>
            <div className="judge-badge">
              <div className="judge-header">JURY MEMBER</div>
              <img src={judge.img} alt={judge.name} className="judge-avatar" />
              <div className="judge-name">{judge.name}</div>
              <div className="judge-role">{judge.role}</div>
              <div className="judge-barcode"></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
