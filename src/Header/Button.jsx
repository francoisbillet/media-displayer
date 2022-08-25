import React from "react";
import "./Button.css"

const Button = ({text}) => {
    return (
        <button className="myButton">{text}</button>
    )
}

export default Button;