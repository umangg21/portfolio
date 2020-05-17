import React, { Component } from 'react'
import "./Landing.scss"
import Button from '../../common/Button/Button'

export class Landing extends Component {
    render() {
        return (
            <div className="min-vh-100 bg-blue d-flex landing-container">
                <div className="block-left landing-block-left">
                    <div className="min-vh-70 content">
                        <p className="text-white ls-3 p-1 fw-400">hi, i am umang gupta</p>
                    </div>
                    <div className="min-vh-30 btn-container">
                        <a download="Umang_Resume" target="_blank" rel="noopener noreferrer"  href="assets/files/Umang-Resume.pdf">
                            <Button primary text="Resume" />
                        </a>
                    </div>
                </div>
                <div className="block-right landing-block-right text-white">
                    <div className="min-vh-70 content">
                        <p className="mb-4">A frontend developer aiming to make tech easy and humane with the help of cool development.</p>
                        <p>I am currently working as Frontend Developer at <b><i><a className="link" rel="noopener noreferrer" target="_blank" href="https://www.indmoney.com/">INDmoney</a></i></b>,
                        where we are building a wealth mangement platform where you can earn, save and track all your investments and liabilities.
                        </p>
                    </div>
                    <div className="min-vh-30 btn-container">
                        <a target="_blank" rel="noopener noreferrer" href="https://github.com/umangg21">
                            <Button secondary text="Git Profile" />
                        </a>
                    </div>
                </div>
            </div >
        )
    }
}

export default Landing
