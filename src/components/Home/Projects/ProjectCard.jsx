import React from 'react'
import "./ProjectCard.scss"
import Analytics from '../../../utils/Analytics'


const ProjectCard = (props) => {

    const { project } = props
    const { image, title, shortDesc, techTags,
        cta: {
            primary, secondary
        } = {}
    } = project

    console.log(process.env.REACT_APP_DOC_TITLE, process.env.NODE_ENV)

    return (
        <div className="project-card">
            <a className="card-details" href={primary.navlink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                    Analytics.track("Click on Project Card", { title })
                }}
            >
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
                        primary && <Navlink title={primary.title} card={title} navlink={primary.navlink} width={secondary ? 50 : 100} />
                    }
                    {
                        secondary && <Navlink title={secondary.title} card={title} navlink={secondary.navlink} />
                    }
                </div>


            </div>

        </div>
    )
}

export default ProjectCard


const Navlink = ({ title, navlink, width = 50, card }) => {
    return <a className="view-code-button"
        href={navlink}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => {
            Analytics.track("Click on Project Cta", { project: card, cta: title, navlink })
        }}
        style={{ width: `${width}%` }}>{title}</a>
}
