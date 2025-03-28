import React from 'react';
import '../styles/footer.css';

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <p>© {new Date().getFullYear()} BirdLab, AI Department, IIT Jodhpur</p>
        <div className="footer-links">
          <a href="/contact">Contact</a>
          <a href="/contact">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;