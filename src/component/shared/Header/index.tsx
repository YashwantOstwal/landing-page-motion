
// src/NavBar.tsx
import React from 'react';
import  '../../../Styles/Navbar.css';


const NavBar: React.FC = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-menu">
        <li className="navbar-item">Home</li>
        <li className="navbar-item">About</li>
        <li className="navbar-item">Services</li>
        <li className="navbar-item">Contact</li>
      </ul>
    </nav>
  );
};

export default NavBar;