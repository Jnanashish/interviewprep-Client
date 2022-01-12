import React from 'react'

// import css 
// import "../../CSS/link.css";
import "../../CSS/telegramJob.css";

// import telegram logo
import telegramlogo from "../../Image/telegram-logo.png";

const TelegramJob = () => {
    return (
        <div className = "telegram-con telegram-promo">
           <img className = "company-logo" src={telegramlogo} alt="Telegram logo" />
           <div className = "telegram-detail">
               <h2>Join interviewPrep on Telegram</h2>
               <p><span>🤯 </span> Get resources to prepare for interviews</p>
               <p><span>📚 </span> Free eBooks & <b> DSA notes</b></p> 
               <p><span>🎯 </span> Direct links of off-campus drives</p>
               <a href="https://bit.ly/ip-website-banner" target="_blank" rel="noopener noreferrer" >
                   <button className = "btn">🔥 Join Now 🔥</button>
               </a>
           </div>
        </div>
    )
}

export default TelegramJob;