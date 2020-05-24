import React from 'react'
import "./LandingContact.scss"
import Analytics from '../../../utils/Analytics'

const Contacts = [
    {
        icon: "assets/icons/github.svg",
        link: "https://github.com/umangg21/",
        title: "umangg21",
        type: "github"
    },
    {
        icon: "assets/icons/stack-overflow.svg",
        link: "https://stackoverflow.com/users/6018646/umang-gupta/",
        title: "umang-gupta",
        type: "stack-overflow"
    },
    {
        icon: "assets/icons/InterviewBit.svg",
        link: "https://www.interviewbit.com/profile/umangg21/",
        title: "umangg21",
        type: "InterviewBit"
    },
    {
        icon: "assets/icons/code.svg",
        link: "https://www.codechef.com/users/umangg21/",
        title: "umangg21",
        type: "codechef"
    },
    {
        icon: "assets/icons/linkedin.svg",
        link: "https://www.linkedin.com/in/umangg21/",
        title: "umangg21",
        type: "linkedin"
    },
    {
        icon: "assets/icons/twitter.svg",
        link: "https://twitter.com/umangg21",
        title: "umangg21",
        type: "twitter"
    },
    {
        icon: "assets/icons/instagram.svg",
        link: "https://www.instagram.com/umangg21/",
        title: "umangg21",
        type: "instagram"
    },
    {
        icon: "assets/icons/facebook.svg",
        link: "https://www.facebook.com/umangg21/",
        title: "umangg21",
        type: "facebook"
    },
]


const LandingContact = () => {
    return (
        <div className="min-vh-50 bg-blue landing-contact-root">
            <p className="landing-contact-heading">Click below to know more about me.</p>
            <div className="landing-contact-container">
                {
                    Contacts.map((item) => <LandingContactCard item={item} key={item?.icon} />)
                }
            </div>
        </div>
    )
}

export default React.memo(LandingContact)


const LandingContactCard = (props) => {
    const { icon, link, title, type } = props.item
    return (
        <div className="landing-contact-card">
            <a href={link} target="_blank" rel="noopener noreferrer"
                onClick={() => {
                    Analytics.track("Click on About Me", { title: type })
                }}
            >
                <img src={`${process.env.PUBLIC_URL}/${icon}`} alt=""></img>
                <div className="text-section">
                    <span className="subtitle">Click here to know more</span>
                    <p className="title">/{title}</p>
                </div>
            </a>
        </div >
    )
}