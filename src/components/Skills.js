import React from "react";
import '../index.css'

export default function Skills(props) {
    return (
        <div className="skills">
        <ul>
          <h2>Skills</h2>
          <li>{props.s1}</li>
          <li>{props.s2}</li>
          <li>{props.s3}</li>
          <li>{props.s4}</li>
          <li>{props.s5}</li>
        </ul>
      </div>
    )
}
Skills.defaultProps = {
    s1: "React",
    s2: "Python",
    s3: "Git/Github",
    s4: "Linux/DevOps",
    s5: "CI/CD"
}
