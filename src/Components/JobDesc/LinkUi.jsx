import React from 'react';
import {Link} from "react-router-dom";

// import css
import "../../CSS/linkUi.css"

// import components
import LinkCard from "./LinkCard.jsx" 

import {countClickinJd} from "./Helper/jdapicall"

const LinkUI = (props) => {
    return (  
        <div> 
            {props.jdpage === "true" &&  props.adpoptype === "none" &&
            <Link to = {`/jd/${props.id}`}> 
                <LinkCard 
                    imagePath = {props.imagePath} 
                    title = {props.title} 
                    degree = {props.degree} 
                    batch = {props.batch} 
                    jobtype = {props.jobtype} />
            </Link>}

            {props.jdpage === "true" &&  props.adpoptype !== "none" &&
            <Link to = {`/${props.adpoptype}/${props.id}`}>  
                <LinkCard 
                    imagePath = {props.imagePath} 
                    title = {props.title} 
                    degree = {props.degree} 
                    batch = {props.batch} 
                    jobtype = {props.jobtype} />
            </Link>}

            {props.jdpage === "false" && 
            <a onClick={() => countClickinJd(props.id)} target="_blank" rel="noopener noreferrer" href={props.link}>
            <LinkCard 
                imagePath = {props.imagePath} 
                title = {props.title} 
                degree = {props.degree} 
                batch = {props.batch} 
                jobtype = {props.jobtype} />
            </a> }
        </div>
    )
}
export default LinkUI;  