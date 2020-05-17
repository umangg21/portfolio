import React, { Component } from 'react'
import "./Landing.scss"
import Button from '../../common/Button/Button'

export class Landing extends Component {
    render() {
        return (
            <div className="bg-blue min-vh-100">
                <div className="min-vh-70 landing-container">
                    <div className="block-left landing-block-left">
                        <div className="content">
                            <p className="text-white ls-3 p-1 fw-400">hi, i am <br />umang gupta</p>
                        </div>

                    </div>
                    <div className="block-right landing-block-right text-white">
                        <div className="content">
                            <p className="mb-4">A frontend developer having 3+ years of experience in developing enterprise level web apps.</p>
                            <p>I am currently working as Frontend Developer at <b><i><a className="link" rel="noopener noreferrer" target="_blank" href="https://www.indmoney.com/">INDmoney</a></i></b>,
                        where we are building a wealth mangement platform where you can earn, save and track all your investments and liabilities.
                        </p>
                        </div>
                    </div>
                </div>
                <div className="min-vh-30 btn-container">
                    <a download="Umang_Resume" target="_blank" rel="noopener noreferrer" href="assets/files/Umang-Resume.pdf">
                        <Button primary text="Resume" />
                    </a>
                    <div className="space" />
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/umangg21">
                        <Button secondary text="Git Profile" />
                    </a>
                </div>
            </div>
        )
    }
}

export default Landing
