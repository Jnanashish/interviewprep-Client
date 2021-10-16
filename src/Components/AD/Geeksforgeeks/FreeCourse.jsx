import React from 'react'

import gfg from "../../../Image/gfg.png"

import "../../../CSS/home.css"
import "../../../CSS/link.css"


export default function FreeCourse() {
    return (
        <div>
            <a href="https://bit.ly/3ihtYi1">
                <img className = "gfg-cover" src={gfg} alt="" />
            </a>
            <h3 className="inv">Invitation code : 
                <span className="code">GFGH1EIFT</span>
            </h3>
        </div>
    )
}
