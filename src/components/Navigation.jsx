import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/navigation.css';

function Navigation() {
  return (
    <nav className="main-navigation">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/people">People</Link></li>
        <li><Link to="/research">Research</Link></li>
        <li><Link to="/publications">Publications</Link></li>
        <li><Link to="/collaborations">Collaborations</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navigation;