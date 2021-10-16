import React from 'react'

// import css
import "../../CSS/link.css"

//import image
import datacamppromo from "../../Image/Promo-1.png"

const Datacamp = () => {
    return (
        <div>
            <a href="https://datacamp.pxf.io/c/2393879/1012793/13294" target="_blank" rel="noopener noreferrer">
                <img className = "img-container" src={datacamppromo} alt="datacamp" />
            </a>
            
        </div>
    )
}

export default Datacamp;