import React from 'react'

// import components
import Header from '../../Components/UiComponent/Header/Header';
import Jobdash from "../../Components/Jobdash/Jobdash"; 
import Footer from '../../Components/UiComponent/Footer/Footer';
import Telegrambanner from '../../Components/Telegram/Telegrambanner';
import Linkda from "../../Components/LinkDa/Linkda"
import Sidebar from '../../Components/Sidebar/Sidebar';
import Topda from '../../Components/Topda/Topda';
import Notice from '../../Components/Notice/Notice';

// import css 
import styles from "./home.module.scss"

// import icons from fontawersome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExternalLink } from '@fortawesome/free-solid-svg-icons'



const Home = () => {
    // Check if current device is instagram or not to show open in browser message
    var ua = navigator.userAgent || navigator.vendor || window.opera;
    var isInstagram = (ua.indexOf('Instagram') > -1) ? true : false;

    return (
        <div>
            <Topda/>
            <Header/>

            {/* Main tagline banner for desktop view */}
            <div className={styles.header_banner}>
                <p>One place solution to get off-campus <b>Internship</b> and <b>Job</b> Updates.</p>
                <img src="https://i.ibb.co/85HvDR0/girl-min.png" alt="girl with laptop and coffee" />
            </div>


            {/* ---------------For mobile view only-------------- */}
            <div id='linkda_mobile_id' className = {styles.linkda_mobile}>
                {/* open in browser for instagram only  */}
                {isInstagram && <div className={styles.browser_msg}>
                    <a href="https://openinapp.co/6d4d6">
                        Open this website in your browser <FontAwesomeIcon icon={faExternalLink}/>
                    </a>
                </div>}
                {/* Empty space for devices other than instagram  */}
                {!isInstagram && <div className={styles.emptyspace_mobile}></div>}
                
                {/* link da for mobile view */}
                <h1 className = {styles.linkdatitle_mobile}>Important Links</h1>
                <div className = {styles.adcon}><Linkda/></div>
            </div> 


            {/* ---------------Main job description-------------- */}
            <div className = {styles.home_grid}>    
                <div className = {styles.center}>
                    {/* main job dashboard  */}
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


            {/* ---------------Footer part-------------- */}
            <Notice/>
            <Footer/>          
        </div>
    )
}

export default  Home;