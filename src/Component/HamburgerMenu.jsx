import '../style/hamburgerMenu.css'; 
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (

    <div className="hamburger-menu">
      <div className={`menu-button ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div className="menu-bar"></div>
        <div className="menu-bar"></div>
        <div className="menu-bar"></div>
      </div>
      <div className={`menu-items ${isOpen ? 'open' : ''}`}>
        <ul>
          <li><Link to="/meny" onClick={closeMenu}>Meny</Link></li> 
          <li><Link to="/about" onClick={closeMenu}>Vårt kaffe</Link></li> 
          <li><Link to="/profil" onClick={closeMenu}>Min profil</Link></li> 
          <li><Link to="/status" onClick={closeMenu}>Orderstatus</Link></li> 
        </ul>
      </div>
      {isOpen && <div className="circle"></div>}
    </div>

  );
}

export default HamburgerMenu;
