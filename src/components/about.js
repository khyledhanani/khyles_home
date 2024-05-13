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

                A little bit about me: I am a 5th year Math student at the University of Waterloo specializing in Mathematics/Financial Analysis and Risk Management and minoring in Computing.
                I have prior experience in capital markets from working at Manulife, TD Securities and TD Asset Management.
                I also have experience in data analytics from working at Daisy Intelligence.
            </p>
            <div className="experience-projects-container">
                <div className="work-experience">
                    <h3>Most Recent Work Experience @ Manulife</h3>
                    <p id="projects">
                        Recently, I worked at Manulife Investment Management within the fixed income reporting group. Most of the work that I did was related to their fixed income reporting data pipeline. I worked on a few projects that involved using machine learning models to track yield curve movements. I also helped with the improvement of a few internal python scripts that automated data retrieval from the Bloomberg terminal. For more info please see my resume...
                    </p>
                </div>
            </div>
        </div>
    );
    }

export default About;
