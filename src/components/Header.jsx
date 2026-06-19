import React from 'react';
import './Header.css';

const logos = [
  "https://i.pinimg.com/736x/4c/2d/5d/4c2d5d44b176d6c7f2cd9250b8505b46.jpg",
  "https://i.pinimg.com/736x/42/76/ea/4276ea81c6ee417592899b8a390f71ed.jpg",
  "https://www.pngitem.com/pimgs/m/245-2459619_institutions-innovation-council-logo-hd-png-download.png",
  "https://1000logos.net/wp-content/uploads/2019/03/IEEE-symbol.jpg",
  "https://i.pinimg.com/736x/02/a7/64/02a7643f66de5191bdc6e100f4cf9d3f.jpg"
];

export default function Header() {
  return (
    <header className="global-header">
      <div className="header-logos">
        {logos.map((logo, index) => (
          <div key={index} className="header-logo-wrapper">
            <img src={logo} alt={`Partner Logo ${index + 1}`} className="header-logo" />
          </div>
        ))}
      </div>
    </header>
  );
}
