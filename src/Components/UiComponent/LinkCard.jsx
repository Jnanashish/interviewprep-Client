import React from 'react'

//import css
import "../../CSS/link.css"

const LinkCard = (props) =>{ 
    return (
        <div className = "container">
            <a className = "grid" href={props.link}  target="_blank" rel="noopener noreferrer"> 
           <img className = "company-logo" src={props.imagePath} alt="" />
           <div className = "detail">
               <h2>{props.title}</h2>
               <div className = "grid"><h5>Position :</h5><p>{props.position}</p></div>
               <div className = "grid"><h5>Degree :</h5><p>{props.degree}</p></div> 
               <div className = "grid"><h5>Batch :</h5><p>{props.batch}</p></div>
           </div>
        </a>
        </div>
    )
}

export default LinkCard;