import React from "react";
import { FaInstagram, FaGlobe } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="team">
          <h3>Lead Head</h3>
          <p>Wasif Khalil</p>
          <p>Khuzaima</p>
          <p>Ali Alem</p>
          <p>Mustafain Haider</p>
        </div>

        <div className="club-info">
          <h3>Programming Club</h3>
          <p>Head: Sahdab Khan</p>
          <p>
            <FaInstagram className="icon" />{" "}
            <a href="https://www.canva.com/design/DAGzm9UJgA8/RG4UNpz49WtcPIdQsF1yiQ/edit?utm_content=DAGzm9UJgA8&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton" target="_blank" rel="noopener noreferrer">
              @programmingclub
            </a>
          </p>
          <p>
            <FaGlobe className="icon" />{" "}
            <a href="http://cci-programming-club.vercel.app" target="_blank" rel="noopener noreferrer">
              www.programmingclub.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
