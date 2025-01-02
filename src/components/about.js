import React from "react"
import "../App.css"
function About() {
    return (
        <div id="about" className="about-container">
            <hr></hr>
            <h2>About Me</h2>
            <img className="about-image" src="/headshot.png" alt="person" />
            <p className="about-me">
                Welcome to my personal website! I created this to be a place where I can house all of my projects and future blog posts about interesting topics that I have learned about in the past.

                A little bit about me: I am a 4th year Math student at the University of Waterloo specializing in Mathematics/Financial Analysis and Risk Management and minoring in Computing.
                I have prior experience in quantiative finance from working at Global X Investments and investment risk mangement from working at Manulife, TD Securities and TD Asset Management.
                I also have experience in data analytics from working at Daisy Intelligence.
            </p>
        </div>
    );
    }

export default About;
