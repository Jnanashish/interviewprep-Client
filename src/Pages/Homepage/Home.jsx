import React from 'react'

// import components
import Header from '../../Components/UiComponent/Header';
import GetData from "../../Components/JobDesc/GetJdData" 
import Footer from '../../Components/UiComponent/Footer';
import Ads from '../../Components/AD/GetAdBanner';
import TelegramJob from '../../Components/SocialMedia/TelegramJob';
import Feedback from '../../Components/UiComponent/Feedback';
import MainAd from '../../Components/AD/GetAdLink';

// import css 
import styles from "./home.module.css"


const Home = () => {
    return (
        <div className = "homeContainer">
            <Header/>
            <div className = "viewMobile">
                <hr className = {styles.hrline}/>
                <h1 className = {styles.titleMobile}>📌 Important Links 📌</h1>
                <div className = {styles.adcon}><MainAd/></div>
            </div> 

            <h1 className = {styles.title}>Get off-campus placement drives & internship updates</h1>
            <h1 className = {styles.titleMobile}>Recent off-campus drives <span>👇</span></h1>
            
            <div className = {styles.gridhome}>
                <div className = {styles.center}>
                    <GetData/>
                </div>  
                
                {/* For desktop view only */}
                <div className = {styles.sidebar}>
                    <br /> <br />
                    <h1 className={styles.linead}>Important Links 🔥</h1>
                    <br />
                    <div className={styles.adcon}><MainAd/></div>
                    <div className={styles.adcon}><Ads/></div> 
                </div>    
            </div>

            {/* For Mobile view only */}
            <div className="viewMobile">
                <div className={styles.adcon}><TelegramJob/></div>
            </div>
            
            <Feedback/>
            <Footer/>          
        </div>
    )
}

export default  Home;