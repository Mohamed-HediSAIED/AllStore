import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const location = useLocation();
  
  return (
    <header>
      <nav>
        <Link to="/" className="logo">
          <img src="Logo ALLSTORE.png" alt="Logo ALLSTORE" />
        </Link>
        <ul className="nav-links">
          <li><Link to="/" className={location.pathname === '/' ? 'active' : ''}>Store</Link></li>
          <li><Link to="/services" className={location.pathname === '/services' ? 'active' : ''}>Services</Link></li>
          <li><Link to="/assistant" className={location.pathname === '/assistant' ? 'active' : ''}>Assistant</Link></li>
          <li><Link to="/apropos" className={location.pathname === '/apropos' ? 'active' : ''}>À Propos</Link></li>
          <li><Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
