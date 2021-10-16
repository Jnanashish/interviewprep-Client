import React from 'react'

import "../../CSS/udemyDSA.css"

//import image
import UdemyDS from "../../Image/UdemyDS.jpg"

const UdemyDSA = () => {
    return (
        <div className="udemy-card">
            <img className="img" src={UdemyDS} alt="udemy dsa" />
            <h4>Data Structures & Algorithms, Level-up Course(2021)</h4>
            <p>Master problem solving using Data Structures & Algorithms in C++</p>
            <a href="https://click.linksynergy.com/link?id=*qWC*w9iiSw&offerid=507388.3642112&type=2&murl=https%3A%2F%2Fwww.udemy.com%2Fcourse%2Fcpp-data-structures-algorithms-levelup-prateek-narang%2F">
                <button className = "btn">Know More</button>
            </a>
        </div>
    )
}

export default UdemyDSA;