import React from 'react'
import "./LandingExperience.scss"

const ExperienceData = [
    {
        title: "Internship",
        icon: "assets/icons/experience/medal.svg",
        exp: [
            {
                title: "Summer Intern",
                org: "ITC Limited",
                orgLink: "https://www.itcportal.com/",
                timeline: "May 2016 - June 2016"
            },
            {
                title: "Research Intern",
                org: "Indian Institute of Remote Sensing (IIRS) - ISRO",
                orgLink: "https://www.iirs.gov.in/",
                timeline: "May 2015 - June 2015"
            }
        ]
    },
        {
        title: "Experience",
        icon: "assets/icons/experience/layers.svg",
        exp: [
             {
                title: "Software Engineer",
                org: "Uber, Hyderabad",
                orgLink: "https://www.uber.com/",
                timeline: "Aug 2020 - Present"
            },
            {
                title: "Software Engineer - Frontend",
                org: "INDmoney, Gurugram",
                orgLink: "http://indmoney.com/",
                timeline: "March 2019 - Jul 2020"
            },
            {
                title: "Software Engineer",
                org: "Infogain India Private Limited, Noida",
                orgLink: "https://www.infogain.com/",
                timeline: "July 2017 - March 2019"
            }
        ]
    },
    {
        title: "Education",
        icon: "assets/icons/experience/mortarboards.svg",
        exp: [
            {
                title: "Bachelor of Technology - CSE",
                org: "ABES Engineering College",
                orgLink: "https://www.abes.ac.in/",
                timeline: "2013 - 2017"
            },
        ]
    }
]

const LandingExperience = () => {
    return (
        <div className="min-vh-50">
            <p className="experience-heading">Education and Experience</p>

            <div className="experience-container">
                {
                    ExperienceData.map((item) =>
                        <div className="experience-card" key={item?.title}>
                            <img loading="lazy" src={`${process.env.PUBLIC_URL}/${item.icon}`} alt=""></img>
                            <p className="card-title">{item.title}</p>

                            {
                                Array.isArray(item?.exp) && item?.exp.map((ex) =>
                                    <div key={ex.org}>
                                        <p className="ex-title">{ex.title}</p>
                                        <a className="ex-org" href={ex.orgLink} target="_blank" rel="noopener noreferrer">
                                            <p>{ex.org}</p>
                                        </a>
                                        <p className="ex-timeline">{ex.timeline}</p>
                                    </div>
                                )
                            }
                        </div>
                    )
                }
            </div>

        </div>
    )
}

export default LandingExperience

