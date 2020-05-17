import React from 'react'
import "./LandingCta.scss"
import Button from '../../common/Button/Button'

const LandingCta = () => {
    return (
        <div className="bg-blue btn-container">
            <a download="Umang_Resume" target="_blank" rel="noopener noreferrer" href="assets/files/Umang-Resume.pdf">
                <Button primary text="Resume" />
            </a>
            <div className="space" />
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/umangg21">
                <Button secondary text="Git Profile" />
            </a>
        </div>
    )
}

export default React.memo(LandingCta) 
