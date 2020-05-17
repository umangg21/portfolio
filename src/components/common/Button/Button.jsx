import React, { Component } from 'react'
import PropTypes from 'prop-types'
import "./Button.scss"

class Button extends Component {
    render() {
        const { text, className, children, primary, secondary, ...restProps } = this.props
        const style = secondary ? "secondary" : "primary"
        return (
            <button className={`btn ${style} ${className}`} type="button" {...restProps}>
                <p>{text || children}</p>
            </button>
        )
    }
}

Button.propTypes = {
    text : PropTypes.string,
    primary: PropTypes.bool,
    secondary: PropTypes.bool
}

export default Button

