import React from 'react'
import "./LandingContact.scss"

const ContactLinks = [
    {
        icon: "assets/icons/linkedin.svg",
        link: "https://www.linkedin.com/in/umangg21/",
        title: "umangg21"
    },
    {
        icon: "assets/icons/github.svg",
        link: "https://github.com/umangg21/",
        title: "umangg21"
    },
    {
        icon: "assets/icons/stack-overflow.svg",
        link: "https://stackoverflow.com/users/6018646/umang-gupta/",
        title: "umang-gupta"
    },
    {
        icon: "assets/icons/InterviewBit.svg",
        link: "https://www.interviewbit.com/profile/umangg21/",
        title: "umangg21"
    },
    {
        icon: "assets/icons/code.svg",
        link: "https://www.codechef.com/users/umangg21/",
        title: "umangg21"
    },
    {
        icon: "assets/icons/facebook.svg",
        link: "https://www.facebook.com/umangg21/",
        title: "umangg21"
    },

    {
        icon: "assets/icons/instagram.svg",
        link: "https://www.instagram.com/umangg21/",
        title: "umangg21"
    },
]

const LandingContact = () => {
    return (
        <div className="min-vh-50 bg-blue d-flex landing-contact-container">
            <p className="landing-contact-heading">Click below to know more</p>
            {
                ContactLinks.map((item) => <LandingContactCard item={item} key={item?.icon} />)
            }
        </div>
    )
}

export default React.memo(LandingContact)


const LandingContactCard = (props) => {
    const { icon, link, title } = props.item
    return (
        <div className="landing-contact-card">
            <a href={link} target="_blank" rel="noopener noreferrer">
                <img src={`${process.env.PUBLIC_URL}/${icon}`} alt=""></img>
                <div className="text-section">
                    <span className="subtitle">Click here to know more</span>
                    <p className="title">/{title}</p>
                </div>
            </a>
        </div >
    )
}