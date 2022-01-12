import React from 'react'


// import components
import Header from './UiComponent/Header';
import GetData from "./JobDesc/GetJdData" 
import Footer from './UiComponent/Footer';
import Ads from './AD/GetAdBanner';
import TelegramJob from './SocialMedia/TelegramJob';
import Feedback from './UiComponent/Feedback';
import MainAd from './AD/GetAdLink';



// import css 
import "../CSS/home.css"


const Home = () => {
    return (
        <div className = "home">
            <Header/>
            <div className="mobile-ad">
                <hr className="hr-line"/>
                <h1 className = "title-mobile">📌 Important Links 📌</h1>
                <div className="ad-con"><MainAd/></div>
            </div>  
            <h1 className = "title-l">Get off-campus placement drives & internship updates</h1>
            <h1 className = "title-mobile">Recent off-campus drives <span>👇</span></h1>
            <div className = "grid-home">
                <div className="center">
                    <GetData/>
                </div>  
                
                {/* For desktop view only */}
                <div className = "sidebar">
                    <br /> <br />
                    <h1 className="line-ad">Important Links 🔥</h1>
                    <br />
                    <div className="ad-con"><MainAd/></div>
                    <div className="ad-con"><Ads/></div> 
                </div>   
            </div>
            {/* For Mobile view only */}
            <div className="mobile-ad">
                <div className="ad-con"><TelegramJob/></div>
            </div>
            <a href="https://t.me/interviewpreptech" target="_blank" rel="noopener noreferrer"><img className='sticky-telegram-logo' src="https://img.icons8.com/fluency/240/000000/telegram-app.png" alt="Telegram logo" /></a>
            
            <Feedback/>
            <Footer/>          
        </div>
    )
}

export default  Home;