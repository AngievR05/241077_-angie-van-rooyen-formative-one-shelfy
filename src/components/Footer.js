import React from 'react';
import { NavLink } from 'react-router-dom'; 
import '../css/footer.css'; 

const Footer = () => {
  return (
    <footer className="footer">
      <hr />
      <NavLink to="/" className="footer-link">
        <button>Landing Page</button>
      </NavLink>
      <NavLink to="/comparison" className="footer-link">
        <button>Comparison Page</button>
      </NavLink>
      <NavLink to="/timeline" className="footer-link">
        <button>Timeline Page</button>
      </NavLink>

      <div>Data provided by Google Books API</div>
      <div>&copy; 2025 Shelfy. All rights reserved.</div>
    </footer>
  );
};

export default Footer;

