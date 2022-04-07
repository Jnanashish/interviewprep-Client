import React from 'react'

// import css 
import styles from "./telegrambanner.module.scss"

// import telegram logo
import telegramlogo from "../../Image/telegramlogo.png";

const Telegrambanner = () => {
    return (
        <div className = {styles.telegram_con}>
           <img className = {styles.telegram_logo} src={telegramlogo} alt="Telegram logo" />
           <div className = {styles.telegram_details}>
               <h2>Join interviewPrep on <b>Telegram</b></h2>
               <p><span>🤯 </span> Get resources to prepare for interviews</p>
               <p><span>📚 </span> Free eBooks & DSA notes</p> 
               <p><span>🎯 </span> Direct links of off-campus drives</p>
               <a href="https://bit.ly/ip-website-banner" target="_blank" rel="noopener noreferrer" >
                   <button className = {styles.btn}>🔥 Join Now 🔥</button>
               </a>
           </div>
        </div>
    )
}

export default Telegrambanner;