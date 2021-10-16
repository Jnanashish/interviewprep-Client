import React from 'react'

// import css
import "./jobDesc.css";

const JobDesc = (props) => {
    const { state } = props.history.location;
    console.log(state);
    return (
        <div className = "jd-container">
            <h1 className = "jd-title">{state.role}</h1>
            <div className = "jd-details">
                <span><b>Position :</b> SDE intern</span>
                <span><b>Batch :</b> {state.batch} </span>
                <span><b>Degree :</b> {state.degree}</span> 
            </div>
            <h3 className="jd-subheading">Job Description</h3>
            <p>
               We are Looking for a Web Developer with 2+ years of professional experience. Below are the requirements :
            </p>
            <h3 className="jd-subheading">Eligibility</h3>
            <p>
            - Bachelors Degree required in fields such as Computer Science, Engineering.
            <br/>
            - 2+ years of professional experience
            <br/>
            - Must be able to hand code in HTML, CSS, Javascript and frameworks such as jquery, VueJs etc
            <br/>
            - Must have experience programming in PHP server side language.  
            </p>
            <button className = "jd-apply-btn">Apply Now</button>
        </div>
    )
}

export default JobDesc;
