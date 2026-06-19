import React from 'react';
import './Awards.css';

export default function Awards() {
  return (
    <section className="section awards-section" id="awards">
      <h2 className="awards-title">REWARDS & RECOGNITION</h2>
      
      <div className="pedestals-container">
        
        {/* 2nd Place */}
        <div className="pedestal-wrapper">
          <div className="pedestal pedestal-2">
            <div className="pedestal-top"></div>
            <div className="pedestal-side"></div>
            <div className="pedestal-rank">2</div>
          </div>
        </div>

        {/* 1st Place */}
        <div className="pedestal-wrapper">
          <div className="pedestal pedestal-1">
            <div className="pedestal-top"></div>
            <div className="pedestal-side"></div>
            <div className="pedestal-rank">1</div>
          </div>
        </div>

        {/* 3rd Place */}
        <div className="pedestal-wrapper">
          <div className="pedestal pedestal-3">
            <div className="pedestal-top"></div>
            <div className="pedestal-side"></div>
            <div className="pedestal-rank">3</div>
          </div>
        </div>

        {/* Caution Tape Overlay */}
        <div className="caution-tape-container">
          <div className="caution-tape tape-1">
            <span className="glitch-text">PRIZE POOL: COMING SOON</span>
          </div>
          <div className="caution-tape tape-2">
            <span className="glitch-text" style={{animationDelay: '0.5s'}}>PRIZE POOL: COMING SOON</span>
          </div>
        </div>
        
      </div>
    </section>
  );
}
