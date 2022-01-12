import React from 'react';

// import css 
import "../../CSS/ads.css"


const Adlinkimg = (props) => {
    return (   
        <div className="container grid ads-link-img">
            <div className = "company-logo-con">
                <img src={props.imagePath} alt="Company logo" />
            </div>
                  
            <p className="job-title">{props.title}</p>
            {props.para !== "" && <p className="ad-para">{props.para}</p>}
        </div>    
    ) 
}

export default Adlinkimg;