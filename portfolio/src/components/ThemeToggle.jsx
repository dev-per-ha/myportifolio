import React from 'react';
import './ThemeToggle.css';

const ThemeToggle = ({ toggleTheme, theme }) => {
  return (
    <button className="theme-toggle" onClick={toggleTheme}>
      {theme === 'dark' ? '🌞 Light Mode' : '🌙 Dark Mode'}
    </button>
  );
};

export default ThemeToggle;
