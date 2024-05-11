import React from "react"
import "../App.css"
function About() {
    return (
        <div id="about" className="about-container">
            <hr></hr>
            <h2>About Me</h2>
            <img className="about-image" src="headshot.jpg" alt="person"  />
            <p className="about-me">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquam nulla facilisi cras fermentum odio
                eu. Habitant morbi tristique senectus et netus et malesuada fames. Aliquet sagittis id consectetur purus ut faucibus pulvinar elementum. Turpis egestas pretium
                aenean pharetra. Scelerisque eleifend donec pretium vulputate sapien nec sagittis aliquam malesuada. Odio ut sem nulla pharetra diam sit
                amet. Vitae nunc sed velit dignissim. Amet nulla facilisi morbi tempus iaculis urna id volutpat. Et netus et malesuada fames
                ac turpis egestas maecenas pharetra. In ornare quam viverra orci sagittis eu volutpat. Eu non diam phasellus vestibulum lorem. Nulla aliquet porttitor lacus luctus
                accumsan tortor posuere ac ut. Risus nec feugiat in fermentum posuere urna. Sed libero enim sed faucibus. Vitae semper
                quis lectus nulla at volutpat diam. Elit pellentesque habitant morbi tristique. At erat pellentesque adipiscing commodo. Lectus mauris ultrices eros in cursus turpis. Mauris sit amet massa vitae tortor condimentum lacinia quis vel. Dolor morbi non arcu risus quis varius quam quisque. In cursus turpis massa tincidunt dui ut ornare lectus. Nunc eget lorem dolor sed viverra ipsum nunc aliquet bibendum. Pretium fusce id velit ut. Ipsum dolor sit amet consectetur adipiscing elit. Massa sed elementum tempus egestas sed sed risus pretium quam.
            </p>
            <div className="experience-projects-container">
                <div className="work-experience">
                    <h3>Most Recent Work Experience @ Manulife</h3>
                    <p id="projects">Recently, I worked at Manulife Investment Management within the fixed income reporting group. Most of the work that I did was
                        related to their fixed income reporting data pipeline. I worked on a few projects that involved
                        using machine learning models to track yield curve movements. I also helped with the improvement of a few internal python scripts that automated
                        data retreival from the bloomberg terminal. For more info please see my resume... 
                    </p>
                </div>
            </div>
        </div>
    )
    }

export default About;
