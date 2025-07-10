import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Dawit. All rights reserved.</p>
      <div className="footer-links">
        <a href="https://github.com/dev-per-ha" target="_blank" rel="noreferrer">GitHub</a>
        <a href="https://www.linkedin.com/in/dev-per-185342372/" target="_blank" rel="noreferrer">LinkedIn</a>
        <a href="https://t.me/Devper17">Telegram</a>
        <a href="tel:+251991450499">Phone</a>
      </div>
    </footer>
  );
};

export default Footer;
