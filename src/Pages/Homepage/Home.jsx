import React from 'react'

// import components
import Header from '../../Components/UiComponent/Header/Header';
import Jobdash from "../../Components/Jobdash/Jobdash"; 
import Footer from '../../Components/UiComponent/Footer/Footer';
import Telegrambanner from '../../Components/Telegram/Telegrambanner';
import Feedback from '../../Components/UiComponent/Feedback/Feedback';
import Linkda from "../../Components/LinkDa/Linkda"
import Sidebar from '../../Components/Sidebar/Sidebar';
import Topda from '../../Components/Topda/Topda';

// import css 
import styles from "./home.module.scss"

// import image
import headerbanner from "../../Image/headerbanner.svg"

// import icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExternalLink } from '@fortawesome/free-solid-svg-icons'


const Home = () => {
    var ua = navigator.userAgent || navigator.vendor || window.opera;
    var isInstagram = (ua.indexOf('Instagram') > -1) ? true : false;

    console.log(isInstagram);
    return (
        <div className = "home_container">
            <Topda/>
            <Header/>
            <img className={styles.header_img} src={headerbanner} alt="Header" />
            <div id='linkda_mobile_id' className = {styles.linkda_mobile}>
                {isInstagram && <div className={styles.browser_msg}>
                    <a href="https://openinapp.co/6d4d6">Open this website in your browser <FontAwesomeIcon icon={faExternalLink} /></a>
                </div>}
                {!isInstagram && <div className={styles.emptyspace_mobile}></div>}
                
                <h1 className = {styles.linkdatitle_mobile}>⭐ Important Links ⭐</h1>
                <div className = {styles.adcon}><Linkda/></div>
            </div> 

            
            <div className = {styles.home_grid}>    
                <div className = {styles.center}>
                <h1 className = {styles.title_mobile}>Recent off-campus drives <span>👇</span></h1>
                    <Jobdash/>
                </div>  

                
                {/* For desktop view only */}
                <div className = {styles.sidebar}>
                    <Sidebar/>
                </div>    
            </div>

            {/* For Mobile view only */}
            <div className="viewMobile">
                <Telegrambanner/>
            </div>
            <Feedback/>
            <Footer/>          
        </div>
    )
}

export default  Home;