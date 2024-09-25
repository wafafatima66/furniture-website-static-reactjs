import React from 'react';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faCouch, faInfoCircle, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import logo from './images/logo.jpg';

function Navbar() {
  return (
    <nav className="navbar">
      {/* <div className="logo">Furniture Co.</div> */}
      <div className="logo"><img src={logo} className="logoImage" /></div>
      
      <ul className="nav-links">
        <li><a href="#home"><FontAwesomeIcon icon={faHome} /> Home</a></li>
        <li><a href="#services"><FontAwesomeIcon icon={faCouch} /> Services</a></li>
        <li><a href="#about"><FontAwesomeIcon icon={faInfoCircle} /> About Us</a></li>
        <li><a href="#contact"><FontAwesomeIcon icon={faPhoneAlt} /> Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
