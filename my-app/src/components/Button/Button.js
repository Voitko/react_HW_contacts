import React, { Component } from 'react';
import './Button.css'
export class Button extends Component {
    render() {
        return (
            <button
                onClick = { this.props.onClick }
                className={ this.props.className + ' button' }>
                { this.props.name }
            </button>
        )
    }
}

export default Button;
