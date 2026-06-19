import React from 'react';
import { GOOGLE_FORM_URL } from '../config';
import './Registration.css';

export default function Registration() {
  const handleRegisterClick = () => {
    window.open(GOOGLE_FORM_URL, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="section registration-section" id="register">
      <h2 className="registration-section-title">REGISTRATION INFO</h2>

      <div className="registration-details-container">
        
        {/* Card 1: Parameters */}
        <div className="registration-info-card card-cyan interactive">
          <h3>PARAMETERS</h3>
          <ul className="info-list">
            <li>
              <strong>ELIGIBILITY:</strong> Open to all currently enrolled engineering and technology students with a valid institutional ID.
            </li>
            <li>
              <strong>TEAM SIZE:</strong> Strictly 3 to 5 members per team (inter-departmental teams are permitted and encouraged).
            </li>
            <li>
              <strong>PREREQUISITE:</strong> A secure Github account per developer and a clear architectural outline of the project.
            </li>
          </ul>
        </div>

        {/* Card 2: Schedule & Milestones */}
        <div className="registration-info-card card-yellow interactive">
          <h3>DEADLINES & MILESTONES</h3>
          <ul className="info-list">
            <li>
              <strong>PORTAL OPENS:</strong> Active Now
            </li>
            <li>
              <strong>PORTAL CLOSES:</strong> 25 JUN 2026 (23:59 IST)
            </li>
            <li>
              <strong>SHORTLISTING ANNOUNCED:</strong> 04 JUL 2026
            </li>
            <li>
              <strong>GRAND FINALE SPRINT:</strong> 24 - 25 JUL 2026
            </li>
          </ul>
        </div>

        {/* Card 3: Instructions & Action */}
        <div className="registration-info-card card-pink interactive">
          <h3>SUBMISSION ROUTE</h3>
          <p className="instruction-text">
            Applications are processed externally. Click the button below to open the official Google Form in a new tab. Ensure you have the name, email, phone number, branch, and year of study for all team members before starting.
          </p>
          <button className="btn-neo btn-primary btn-register-portal interactive" onClick={handleRegisterClick}>
            OPEN GOOGLE FORM ↗
          </button>
        </div>

      </div>
    </section>
  );
}
