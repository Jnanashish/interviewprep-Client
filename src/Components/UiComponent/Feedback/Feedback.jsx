import React from 'react'
import {CounterAPI} from "counterapi";

// import css
import styles from "./feedback.module.scss"

const Feedback = () => {
    const counter = new CounterAPI();

    const goodcount = () =>(
        counter.up("goodinterviewprep"),
        document.getElementById("toggle_form").style.display = 'none'
    )
    const badcount = () =>(
        counter.up("badinterviewprep"),
        document.getElementById("toggle_form").style.display = 'none'        
    )

    return (
        <div id="toggle_form" className={styles.feedback_con}>
            <h4 className={styles.feedback_title}>Is this Website / Project helpful to you? </h4>
            <div className={styles.feedback_grid}>
                <div id="good_show" onClick={goodcount} className={styles.feedback_good}>Yes 🤩</div>
                <div id="bad_show" onClick={badcount} className={styles.feedback_bad}>No 😒</div>
            </div>          
        </div>
    )
}


export default Feedback;