import React from 'react'

//import css
import "../../CSS/link.css"
import "../../CSS/linkUi.css"

// import static images
import arrowRight from "../../Image/arrow-right.png";
import logoimg from "../../Image/logoimage.png";


const LinkCard = (props) =>{ 
    return (
        <div className="container grid">
            <div className = "company-logo-con">
                {props.imagePath === 'none' && <img src={logoimg} alt="Company Logo"/>}
                {props.imagePath !== 'none' && <img src={props.imagePath} alt="Company logo"/>}     
            </div>

            <p className="job-title">{props.title}</p>
            <div className="details">
                <div className="detail-item"><h5>Degree :</h5><p>{props.degree}</p></div> 
                <div className="detail-item"><h5>Batch :</h5><p>{props.batch}</p></div>
                <div className="detail-item"><h5>Jobtype :</h5><p>{props.jobtype}</p></div>
            </div>
            
            <img className = "m-jd-btn" src={arrowRight} alt="Right arrow" />
            <button className="view-jd-btn">View Job</button>   
        </div>
    )
}

export default LinkCard;