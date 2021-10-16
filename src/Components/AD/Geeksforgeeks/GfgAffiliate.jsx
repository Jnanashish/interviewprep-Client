import React from 'react'

// import css
import "../../../CSS/link.css"

//import image
import gfg from "../../../Image/gfg-affiliate.png"

const GfgAffiliate = () => {
    return (
        <div>
            <a href="https://bit.ly/ip-gfg-banner" target="_blank" rel="noopener noreferrer">
                <img className = "img-container" src={gfg} alt="datacamp" />
            </a>
            
        </div>
    )
}

export default GfgAffiliate;