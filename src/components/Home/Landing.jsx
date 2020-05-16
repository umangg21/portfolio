import React, { Component } from 'react'
import  "./Landing.scss"

export class Landing extends Component {
    render() {
        return (
            <div className="min-vh-100 bg-blue d-flex landing-container">
                <div className="block-left landing-block-left">
                    <h1 className="text-white ls-3 p-1 type-writer">hi, i am umang gupta</h1>
                </div>
                <div className="block-right landing-block-right p-3 text-white">
                    <p>A frontend developer aiming to make tech easy and humane with the help of cool development.</p>
                    <p>I am currently working as Frontend Developer at <b><i><a className="link" rel="noopener noreferrer" i target="_blank" href="https://www.indmoney.com/">INDmoney</a></i></b>, 
                        where we are building a wealth mangement platform where you can earn, save and track all your investments and liabilities.
                    </p>
                </div>
            </div>
        )
    }
}

export default Landing
