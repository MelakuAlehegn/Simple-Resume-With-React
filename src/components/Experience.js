import React from "react";
import '../index.css'

export default function Experience(props) {
    return(
    <div className="experience">
        <h2>Expereince</h2>
        <p>{props.experience1}</p>
        <p>{props.experience2}</p>
    </div>
    )
}
Experience.defaultProps= {
    experience1: "Computer Engineer at NERD Center Ethiopia",
    experience2: "Frontend Developer at LSSYA"
}