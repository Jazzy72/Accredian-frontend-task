import React from 'react';
import './Navbar.css';

const Navbar = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-content">
        <div className="navbar-brand">Accredian</div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <button onClick={() => scrollToSection('benefits')} className="nav-link">
              Benefits
            </button>
          </li>
          <li className="nav-item">
            <button onClick={() => scrollToSection('faqs')} className="nav-link">
              FAQs
            </button>
          </li>
          <li className="nav-item">
            <button onClick={() => scrollToSection('about')} className="nav-link">
              About Us
            </button>
          </li>
          {/* Add more navigation items as needed */}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
