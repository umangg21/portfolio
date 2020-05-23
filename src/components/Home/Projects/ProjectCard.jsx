import React from 'react'
import "./ProjectCard.scss"


const ProjectCard = (props) => {

    const { project } = props
    const { image, title, shortDesc, techTags, navlink, codeLink } = project
    return (
        <div className="project-card">
            <div className="card-details">
                <div className="card-image-container">
                    <img className="card-image" src={`${process.env.PUBLIC_URL}/assets/images/${image}`} alt="" />
                </div>
                <p className="card-title">{title}</p>
                <p className="card-desc">{shortDesc}</p>

                <ul className="tags-list">
                    {
                        Array.isArray(techTags) && techTags.map((tech) => <div className="tags" key={tech}>{tech}</div>)
                    }
                </ul>

            </div>

            <div className="card-button-container">
                <div className="card-button-inner-container d-flex">
                    <a className="view-code-button" href={navlink}
                        style={codeLink ? {} : { width: `100%` }}
                        target="_blank" rel="noopener noreferrer"
                    > Preview</a>
                    {
                        codeLink &&
                        <a className="view-code-button" href={codeLink}> Code </a>
                    }
                </div>


            </div>

        </div>
    )
}

export default ProjectCard
