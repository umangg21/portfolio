import React from 'react'
import "./LandingProjectContainer.scss"
import ProjectCard from './ProjectCard'

const LandingProjectContainer = () => {

    const projects = require("./ProjectsSummary.json")

    return (
        <div className="">
            <hr/>
            <p className="experience-heading">Projects</p>

            <div className="project-container">

                {
                    Array.isArray(projects) && projects.map((project) => <ProjectCard project={project} />)
                }
            </div>

        </div>
    )
}

export default LandingProjectContainer
