import React from 'react'
import "./ProjectCard.scss"


const ProjectCard = (props) => {

    const { project } = props
    const { image, title, shortDesc, techTags,
        cta: {
            primary, secondary
        } = {}
    } = project

    return (
        <div className="project-card">
            <a className="card-details" href={primary.navlink}>
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

            </a>

            <div className="card-button-container">
                <div className="card-button-inner-container d-flex">
                    {
                        primary && <Navlink title={primary.title} navlink={primary.navlink} width={secondary ? 50 : 100} />
                    }
                    {
                        secondary && <Navlink title={secondary.title} navlink={secondary.navlink} />
                    }
                </div>


            </div>

        </div>
    )
}

export default ProjectCard


const Navlink = ({ title, navlink, width = 50 }) => {
    return <a className="view-code-button"
        href={navlink}
        target="_blank"
        rel="noopener noreferrer"
        style={{ width: `${width}%` }}>{title}</a>
}
