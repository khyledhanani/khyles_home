import React from "react";
import "../App.css";

function Landing() {
  return (
    <div className="header-container">
      <nav className="nav-bar">
        <a href="#about" className="nav-link">About</a>
        <a href="#projects" className="nav-link">Projects</a>
        <a href="#resume" className="nav-link">Resume</a>
        <a href="https://github.com/khyledhanani" target="_blank" rel="noreferrer"  className="nav-link">Github</a>
        <a href="https://www.linkedin.com/in/khyledhanani" target="_blank" rel="noreferrer" className="nav-link">LinkedIn</a>
      </nav>
      <div className="center-content">
        <img 
          src="/UniversityOfWaterloo_logo_horiz_bk.png"
          alt='University of Waterloo'
          className="center-logo"
          onLoad={() => console.log('Image loaded')}
          onError={() => console.log('Image failed to load')}
        />
        <h1>Khyle Dhanani</h1>
        <h3>Bachelor of Mathematics</h3>
        <h3 className="hiddenpart">Specializing in Math/Financial Analysis and Risk Management</h3>
        <h3>Minor in Computing</h3>
        <h3 className="hiddenpart">My interests range from traditional finance and stochastic calculus all the way to machine learning and linear algebra!</h3> 
      </div>
    </div>
  );
}

export default Landing;
