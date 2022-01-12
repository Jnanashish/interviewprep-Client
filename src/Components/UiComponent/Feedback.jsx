import React from 'react'
import {CounterAPI} from "counterapi";

// import css
import "../../CSS/feedback.css"

const Feedback = () => {
    const counter = new CounterAPI();

    const goodcount = () =>(
        counter.up("goodinterviewprep"),
        document.getElementById("good1").style.display = 'none',
        document.getElementById("bad1").style.display = 'none',
        document.getElementById("good2").style.display = 'block'
    )
    const badcount = () =>(
        counter.up("badinterviewprep"),
        document.getElementById("good1").style.display = 'none',
        document.getElementById("bad1").style.display = 'none',
        document.getElementById("bad2").style.display = 'block'        
    )

    return (
        <div className="feedback">
            <h4 className="feedback-title">Is this Website / Project helpful to you? </h4>
            <div className="feedback-grid">
                <div id="good1" onClick={goodcount} className="feedback-btn">Yes 🤩</div>
                <div id="bad1" onClick={badcount} className="feedback-btn2">No 😒</div>
            </div>   
            
            <div id="good2" onClick={goodcount} className="feedback-btn">🤩</div> 
            <div id="bad2" onClick={badcount} className="feedback-btn2">😒</div>        
        </div>
    )
}


export default Feedback;