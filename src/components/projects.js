import React, { useState } from "react";
import "../App.css";
import { FaGithub } from 'react-icons/fa';  // Importing GitHub icon from react-icons

function ProjectsDisplay() {
    const [activeProject, setActiveProject] = useState("project1");

    const projects = {
        project4: {
            name: "WageX Inc. - An online sports betting platform that operates like an exchange rather than a bookmaker (MVP is Out, we are running a private beta in the coming weeks (Early 2025)!!!)",
            description: "WageX is a pioneering sports betting platform that I co-founded, which operates as a peer-to-peer exchange rather than a traditional bookmaker. This innovative approach allows users to both back and lay bets, similar to a stock exchange for sports betting. The platform eliminates the traditional bookmaker's margin, offering users better odds and a more transparent betting experience.\n\n" +
                        "Tech Stack:\n" +
                        "• Frontend: TypeScript & Next.js (utilized primarily for routing while maintaining separation of concerns), enhanced with React Query and Zustand for efficient data fetching and state management\n" +
                        "• Backend Microservices: Express.js powering critical services including user management, trade processing, and banking operations\n" +
                        "• Core Trading Engine: High-performance trade matching system built in Go, serving as the platform's heart. Built to resemble a stock exchange for sports betting essentially.\n" +
                        "• Event Architecture: Apache Kafka for reliable event result streaming, trade processing, and inter-service communication",
            isText: true,  // New flag to indicate text content
            content: "WageX",
            isPrivate: true  // Add this flag
        },
        project5: {
            name: "LookAlive Inc. - A platform that provides users with a unique personalized fashion lookbook (MVP coming soon, UI is not finalized yet)",
            description: "LookAlive is a platform that I founded, which allows users to create a personalized fashion lookbook. The platform uses machine learning to deliver a unique shopping experience:\n\n" +
                        "• Neural Collaborative Filtering: Implemented a recommender system to generate personalized fashion suggestions based on user preferences and style data\n" +
                        "• Computer Vision: Integrated DeepSeek V3 vision-language model for detailed garment feature classification\n" +
                        "• The combination of these technologies enables the platform to create highly personalized fashion recommendations and shopping experiences tailored to each user's unique style preferences",
            isText: true,
            content: "LookAlive",
            isPrivate: true
        },
        project1: {
            name: "Stochastic Volatility Model (Heston Model) Monte Carlo Simulation",
            imageUrl: "/Figure_1_resized.png",
            githubUrl: "https://github.com/khyledhanani/Heston-Model-Simulation",
            content: "Heston Model"
        },
        project2: {
            name: "Google Page Rank implementation Using Markov Decision Process",
            imageUrl: "/page_rank.gif",
            githubUrl: "https://github.com/khyledhanani/Page_Rank_proj",
            content: "Page Rank Algorithm"
        },

        project3: {
            name: "Implemented a simple Artificial Neural Network for regression based tasks using just numpy",
            imageUrl: "https://miro.medium.com/v2/resize:fit:10908/1*Je65TdJbDm55KQCja7rPVw.png",
            content: "Neural Net",
        },
    };

    const renderProjectListItems = () => Object.entries(projects).map(([key, project]) => (
        <React.Fragment key={key}>
            <li onClick={() => setActiveProject(key)} className={activeProject === key ? "activelis" : ""}>
                {project.name}
            </li>
            <hr className="proj-hr" />
        </React.Fragment>
    ));

    return (
        <div className="PROJ" id="projects">
            <h1 className="PROJH">Startups & Projects</h1>
            <div className="flex-containerp">
                <div className="proj-list-container">
                    <ul>{renderProjectListItems()}</ul>
                </div>
                <div className="projimage-container">
                    {projects[activeProject].isText ? (
                        <div className="project-description">
                            {projects[activeProject].description.split('\n').map((line, i) => (
                                <React.Fragment key={i}>
                                    {line}
                                    <br />
                                </React.Fragment>
                            ))}
                        </div>
                    ) : (
                        <img
                            style={{ width: '100%', height: '500px', objectFit: 'contain'}}
                            src={projects[activeProject].imageUrl}
                            alt="project"
                        />
                    )}
                </div>
            </div>
            {!projects[activeProject].isPrivate ? (
                <div className="github-div">
                    <a href={projects[activeProject].githubUrl} className="github-link" target="_blank" rel="noopener noreferrer">
                        <h3>GitHub&nbsp;</h3>
                        <FaGithub id="resume" className="github-icon" />
                        Click here for a small write-up and code for the {projects[activeProject].content}
                    </a>
                </div>
            ) : (
                <div className="github-div">
                    <span className="github-link disabled">
                        <h3>GitHub&nbsp;</h3>
                        <FaGithub id="resume" className="github-icon" />
                        Private Repository - Code not publicly available
                    </span>
                </div>
            )}
        </div>
    );
}

export default ProjectsDisplay;
