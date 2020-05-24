import React from 'react'
import "./LandingCta.scss"
import Button from '../../common/Button/Button'
import Analytics from '../../../utils/Analytics'

const LandingCta = () => {
    return (
        <div className="bg-blue btn-container">
            <a download="Umang_Resume" target="_blank" rel="noopener noreferrer" href="assets/files/Umang-Resume.pdf"
                onClick={() => {
                    Analytics.track("Click on Resume Download")
                }}
            >
                <Button primary text="Resume" />
            </a>
            <div className="space" />
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/umangg21"
                onClick={() => {
                    Analytics.track("Click on Git Profile")
                }}
            >
                <Button secondary text="Git Profile" />
            </a>
        </div>
    )
}

export default React.memo(LandingCta) 
