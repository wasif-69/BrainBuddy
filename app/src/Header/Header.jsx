import React, { useState } from "react";
import "./Header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="logo-container">
        <span className="logo">🧠 BrainBuddy</span>
        <span className="tagline">Track your marks & improve your skills 🚀</span>
      </div>

      <nav className={`nav-links ${menuOpen ? "active" : ""}`}>
        <a href="#home" className="nav-button" onClick={() => setMenuOpen(false)}>Home</a>
        <a href="#track" className="nav-button" onClick={() => setMenuOpen(false)}>Track Progress</a>
        <a href="#recommendations" className="nav-button" onClick={() => setMenuOpen(false)}>Recommendations</a>
        <a href="#about" className="nav-button" onClick={() => setMenuOpen(false)}>About</a>
      </nav>

      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </header>
  );
};

export default Header;
