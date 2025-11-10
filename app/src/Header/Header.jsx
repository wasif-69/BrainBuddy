import React, { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigation=useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  const home=()=>{
    navigation("/")
  }

  return (
    <header className="header">
      {/* Logo + Tagline */}
      <div className="logo-container">
        <span className="logo" onClick={home}>🧠 BrainBuddy</span>
        <span className="tagline">Track your marks & improve your skills 🚀</span>
      </div>

      {/* Navigation Links */}
      <nav className={`nav-links ${menuOpen ? "active" : ""}`}>
        <Link to="/" className="nav-button" onClick={closeMenu}>Home</Link>
        {/* <Link href="#track" className="nav-button" onClick={closeMenu}>Track Progress</Link> */}
        <Link to="/input" className="nav-button" onClick={closeMenu}>Score Predictor Form!</Link>
        <Link to="/about" className="nav-button" onClick={closeMenu}>
  About
</Link>

      </nav>

      {/* Hamburger Menu */}
      <div
        className={`hamburger ${menuOpen ? "open" : ""}`}
        onClick={toggleMenu}
        aria-label="Toggle navigation menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </header>
  );
};

export default Header;
