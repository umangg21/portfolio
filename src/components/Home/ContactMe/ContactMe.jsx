import React from 'react'
import "./ContactMe.scss"

const Contact = [
    {
        title: "mail",
        icon: "assets/icons/gmail.svg",
        link: "mailto:umangg21@gmail.com",
        text: "umangg21@gmail.com",
        qrCode: ""
    },
    {
        title: "whatsapp",
        icon: "assets/icons/whatsapp.svg",
        link: "https://wa.link/f4h0lw",
        text: "Click here to whatsapp",
        qrCode: ""
    },
    {
        title: "telegram",
        icon: "assets/icons/telegram.svg",
        link: "https://t.me/umangg21",
        text: "Click here to start chat",
        qrCode: ""
    },

]

const ContactMe = () => {
    return (
        <div className="bg-gray  min-vh-50 contact-container">
            <div className="contact-heading">Contact Me</div>

            {
                Contact.map((item) =>
                    <div className="contact-card text-center" key={item.title}>
                        <a href={item.link} target="_blank" rel="noopener noreferrer">
                            <img src={`${process.env.PUBLIC_URL}/${item.icon}`} alt=""></img>
                            {item.text && <p>{item.text}</p>}
                        </a>
                    </div>
                )
            }

        </div>
    )
}

export default React.memo(ContactMe) 
