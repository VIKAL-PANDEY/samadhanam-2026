import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer-section">
      <div className="footer-floating">
        <div className="float-floppy"></div>
        <div className="float-esc">ESC</div>
        <div className="float-cursor">👆</div>
        <div className="float-dot"></div>
      </div>
      
      <div className="support-main-box">
        <div className="support-tag">
          <span>06 /<br/>SUPPORT<br/>PROTOCOL</span>
          <div className="support-tag-close">x</div>
        </div>

        <div className="support-text">
          <strong>Need Help?</strong> If you face any issues regarding registration, submission, participation, team formation, or any other hackathon-related queries, please connect with:
        </div>

        <div className="contact-box">
          <div className="contact-name">YOGESH SHARMA</div>
          <div className="contact-phone">+91 9425903357</div>
          <div className="contact-warning">PLEASE CONTACT ONLY VIA TEXT MESSAGE.</div>
        </div>
      </div>

      <div className="footer-bottom-text">
        <div>
          © 2026 IPS Academy, Indore. All Rights Reserved.<br/>
          Designed & Built for SAMADHANAM
        </div>
        <div className="footer-bottom-disclaimer">
          Originality & Reference Disclaimer: This website design has been developed using open tech aesthetics for creative reference and structural inspiration only. Absolutely no proprietary assets, layouts, or code have been directly copied from any external source. The entire platform is a unique, native implementation built entirely from scratch for Hackathon SAMADHANAM 2026.
        </div>
      </div>
    </footer>
  );
}
