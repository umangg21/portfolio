import React from 'react'
import "./Landing.scss"

const Landing = () => {
    return (
        <div className="bg-blue landing-container">
            <div className="landing-block-left">
                <div className="content">
                    <p className="text-white ls-3 p-1 fw-400">hi, i am <br />umang gupta</p>
                </div>

            </div>
            <div className="landing-block-right text-white">
                <div className="content">
                    <p className="mb-4">A frontend developer having 3+ years of experience in developing enterprise-level web apps.</p>
                    <p>I am currently working as a Frontend Developer at <b><i><a className="link" rel="noopener noreferrer" target="_blank" href="https://www.indmoney.com/">INDmoney</a></i></b>,
                        where we are building a wealth management platform where you can earn, save, and track all your investments and liabilities.
                        </p>
                </div>
            </div>
        </div>
    )
}

export default React.memo(Landing)
