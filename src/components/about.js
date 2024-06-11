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
                I have prior experience in capital markets from working at Manulife, TD Securities and TD Asset Management.
                I also have experience in data analytics from working at Daisy Intelligence.
            </p>
            <div className="experience-projects-container">
                <div className="work-experience">
                    <h3>
                        Upcoming Job
                    </h3>
                    <p id="projects">
                        I will be starting as a Quantitative Investment Associate at Global X ETFS in Toronto in September 2023. I look
                        forward to learning more about the ETF industry and applying my knowledge of programming and finance!
                    </p>
                </div>
            </div>
        </div>
    );
    }

export default About;
