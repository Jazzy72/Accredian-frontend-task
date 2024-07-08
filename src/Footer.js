import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer-bg">
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Email: contact@example.com</p>
          <p>Phone: +1 123-456-7890</p>
        </div>
        <div className="footer-section">
          <h3>Address</h3>
          <p>123 Main Street, City, Country</p>
        </div>
        <div className="footer-section">
          <h3>Social Media</h3>
          <ul>
            <li><a href="https://facebook.com">Facebook</a></li>
            <li><a href="https://twitter.com">Twitter</a></li>
            <li><a href="https://linkedin.com">LinkedIn</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Your Company. All rights reserved.</p>
      </div>
    </footer>
    </div>
  );
};

export default Footer;
