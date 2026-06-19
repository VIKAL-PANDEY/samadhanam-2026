import React from 'react';
import './ChallengeMatrix.css';

const challenges = [
  { title: "ACADEMIC MANAGEMENT", status: "Seeking intelligent educational solutions." },
  { title: "LABORATORY MANAGEMENT", status: "Ready for innovation." },
  { title: "PLACEMENT SUPPORT", status: "Seeking industry-driven solutions." },
  { title: "INTERNSHIPS", status: "Seeking real-world exposure solutions." },
  { title: "CLASSROOM EXPERIENCE", status: "Awaiting next-gen learning models." },
  { title: "LIBRARY SYSTEMS", status: "Ready for smart library integrations." },
  { title: "TRANSPORTATION", status: "Seeking optimized routing protocols." },
  { title: "HOSTEL MANAGEMENT", status: "Awaiting smart living solutions." },
  { title: "CAMPUS SECURITY", status: "Seeking robust protection protocols." },
  { title: "COMMUNICATION SYSTEMS", status: "Ready for unified comms solutions." },
  { title: "EVENT MANAGEMENT", status: "Seeking streamlined event orchestration." },
  { title: "ENERGY OPTIMIZATION", status: "Awaiting sustainable grid solutions." },
  { title: "WATER CONSERVATION", status: "Seeking smart water management." },
  { title: "WASTE MANAGEMENT", status: "Ready for circular economy solutions." },
  { title: "STUDENT WELLNESS", status: "Seeking holistic well-being platforms." },
  { title: "ACCESSIBILITY SOLUTIONS", status: "Awaiting universal design solutions." },
  { title: "OPEN INNOVATION", status: "Any impactful solution is welcome." }
];

const TerminalBlock = ({ title, status }) => (
  <div className="terminal-block interactive">
    <div className="terminal-header">
      <div className="terminal-controls">
        <div className="control-btn btn-close"></div>
        <div className="control-btn btn-min"></div>
        <div className="control-btn btn-max"></div>
      </div>
      <div className="terminal-title">CMD.EXE</div>
      <div style={{width: '40px'}}></div>
    </div>
    <div className="terminal-body">
      <span className="terminal-prompt">{"C:\\SAMADHANAM> "} {title}.exe</span>
      <span>Status: {status}<span className="cursor-flash"></span></span>
    </div>
  </div>
);

export default function ChallengeMatrix() {
  const row1 = challenges.slice(0, 9);
  const row2 = challenges.slice(9);

  return (
    <section className="section challenge-matrix-section" id="challenges">
      <h2 className="matrix-title">INNOVATION COMMAND CENTER</h2>
      
      <div className="marquee-container">
        <div className="marquee-row">
          {[...row1, ...row1, ...row1].map((challenge, index) => (
            <TerminalBlock key={`r1-${index}`} title={challenge.title} status={challenge.status} />
          ))}
        </div>
        
        <div className="marquee-row reverse">
          {[...row2, ...row2, ...row2].map((challenge, index) => (
            <TerminalBlock key={`r2-${index}`} title={challenge.title} status={challenge.status} />
          ))}
        </div>
      </div>
    </section>
  );
}
