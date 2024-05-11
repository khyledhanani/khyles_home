import React, { useState } from "react";
import "../App.css";
import { FaGithub } from 'react-icons/fa';  // Importing GitHub icon from react-icons

function ProjectsDisplay() {
    const [activeProject, setActiveProject] = useState("project1");

    const projects = {
        project1: {
            name: "Stochastic Volatility Model (Heston Model) Simulation",
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
        project4: {
            name: "WIP: Implementing a recommender system using collaborative filtering",
            imageUrl: "https://mtek3d.com/wp-content/uploads/2018/01/image-placeholder-500x500.jpg",
            content: "Recommender System",

        }
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
        <div className="PROJ">
            <h1 className="PROJH">Projects</h1>
            <div className="flex-containerp">
                <div className="proj-list-container">
                    <ul>{renderProjectListItems()}</ul>
                </div>
                <div className="projimage-container">
                    <img
                        style={{ width: '100%', height: '500px', objectFit: 'contain'}}
                        src={projects[activeProject].imageUrl}
                        alt="project"
                    />
                </div>
            </div>
            <div className="github-div">
                <a href={projects[activeProject].githubUrl} className="github-link" target="_blank" rel="noopener noreferrer">
                    <h3>GitHub&nbsp; </h3>
                    <FaGithub id="resume" className="github-icon" />Click here for a small write-up and code for the {projects[activeProject].content}
                </a>
            </div>
        </div>
    );
}

export default ProjectsDisplay;
