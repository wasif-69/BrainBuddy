import React from "react";
import { FaInstagram, FaGlobe } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="team">
          <h3>Lead Head</h3>
          <p>John Doe</p>
          <p>Jane Smith</p>
          <p>Michael Lee</p>
          <p>Sarah Khan</p>
        </div>

        <div className="club-info">
          <h3>Programming Club</h3>
          <p>Head: Alex Johnson</p>
          <p>
            <FaInstagram className="icon" />{" "}
            <a href="https://instagram.com/programmingclub" target="_blank" rel="noopener noreferrer">
              @programmingclub
            </a>
          </p>
          <p>
            <FaGlobe className="icon" />{" "}
            <a href="https://programmingclub.com" target="_blank" rel="noopener noreferrer">
              www.programmingclub.com
            </a>
          </p>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} BrainBuddy. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
