import React from 'react'

// import css 
import "../../CSS/link.css";
import "../../CSS/telegramJob.css";

// import telegram logo
import telegramlogo from "../../Image/telegram-logo.png";

const TelegramJob = () => {


    // window.onscroll = function() {myFunction()};

    // // Get the header
    // var ele = document.getElementsByClassName("scroll");
    // var header = ele.getBoundingClientRect();
    // console.log(header);
    // // for (let i = 0; i < header.length; i++) {
    // //   console.log(header[i]);
    // // }
    // // Get the offset position of the navbar
    // var sticky = header.offsetTop;
    // console.log(sticky);

    // function myFunction() {
    //   if (window.pageYOffset > sticky) {
    //     header.classList.add("sticky");
    //   } else {
    //     header.classList.remove("sticky");
    //   }
    // }


    return (
        <div className = "container grid telegram-promo scroll">
           <img className = "company-logo" src={telegramlogo} alt="Telegram logo" />
           <div className = "detail">
               <h2>Join interviewPrep on Telegram</h2>
               <p>🤯 Get resources to prepare for interviews</p>
               <p>📚 Free eBooks & <b> DSA notes</b></p> 
               <p>🎯 Direct links of off-campus placement drives</p>
               <a href="https://bit.ly/ip-website-banner" target="_blank" rel="noopener noreferrer" >
                   <button className = "btn">🔥 Join Now 🔥</button>
               </a>
           </div>
        </div>
    )
}

export default TelegramJob;