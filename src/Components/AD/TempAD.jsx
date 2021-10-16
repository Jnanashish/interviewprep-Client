import React from 'react'

// import css
import "../../CSS/link.css"

//import image
import tata from "../../Image/tata.png"

const TempAD = () => {
    return (
        <div>
            <a href="https://bit.ly/D2C-Tata" target="_blank" rel="noopener noreferrer">
                <img className = "img-container" src={tata} alt="datacamp" />
            </a>
            
        </div>
    )
}

export default TempAD;