import React from 'react';
import '../styles/header.css';

function Header() {
  return (
    <header className="site-header">
      <div className="header-content">
        <div className="logo">
          <img 
            src="/images/lab-logo.png" 
            alt="BirdLab Logo" 
          />
        </div>
        <h1>BirdLab - AI Department, IIT Jodhpur</h1>
      </div>
    </header>
  );
}

export default Header;