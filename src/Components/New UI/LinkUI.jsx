import React from 'react'

// import css
import "./linkUi.css"

// import images
import logo from "../../Image/dunzo.png"
import sap from "../../Image/SAP.png"
import arrowRight from "../../Image/arrow-right.png";
import JobDesc from './JobDesc';
import { Redirect } from 'react-router'
import { useHistory } from "react-router-dom";

const LinkUI = (props) => {
    let history = useHistory();

    const showjd = (data) =>{
        console.log(data);
        history.push("/jd", { id: 1, role:data.role, batch:data.batch, degree:data.degree});
    }

    return (
        <div onClick={() => showjd(props.data)} className = "link-container">
            <img className = "company-logo" src={props.imagePath} alt="Company logo" />
            <p className = "title">{props.role}</p>
            <img className = "icon" src={arrowRight} alt="Right arrow" />
        </div>
    )
}

export default LinkUI;