import React from "react";
import "./About.css";

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <h2 className="about-title">About Us</h2>

        <p className="about-intro">
          Welcome to <strong>🧠 BrainBuddy</strong> — a smart platform built by passionate developers
          who love to combine creativity with code. Our mission is to help students
          <em> track their academic progress </em> and <em> enhance their learning skills</em> through
          data-driven insights.
        </p>

        <div className="about-content">
          <div className="about-card">
            <h3>👨‍💻 Meet the Developers</h3>
            <p>
              BrainBuddy was crafted by a team of dedicated members from the{" "}
              <a
                href="http://cci-programming-club.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                CCI Programming Club
              </a>.  
              This project reflects our shared passion for technology, innovation, and continuous learning.
            </p>
          </div>

          <div className="about-card">
            <h3>🏫 A CCI Club Side Project</h3>
            <p>
              BrainBuddy started as a side project under the CCI Programming Club’s initiative to
              encourage student developers to build tools that make academic life smarter and more engaging.
              We believe in learning by building — and BrainBuddy is one of our proud results.
            </p>
          </div>

          <div className="about-card">
            <h3>📄 Based on Research</h3>
            <p>
              This platform is inspired by findings from a recent research paper on
              <em> personalized learning analytics and academic performance tracking</em>.  
              You can read more about the research that shaped BrainBuddy’s foundation{" "}
              <a
                href="https://www.overleaf.com/read/xhhjgrvqbmzm#bd68b8"
                target="_blank"
                rel="noopener noreferrer"
              >
                here
              </a>.
            </p>
          </div>
        </div>

        <p className="about-footer">
          © {new Date().getFullYear()} CCI Programming Club | Designed & Developed by the BrainBuddy Team 💚
        </p>
      </div>
    </section>
  );
};

export default About;
