import React from 'react'

// ---------------------------------------------------
// import components
import Header from "./Header";
import Data from "../Components/Admin/Data"
import Footer from "./Footer";
import Ppa from "./AD/Ppa"
import FreeCourse from './AD/Geeksforgeeks/FreeCourse';
// import TelegramJob from './SocialMedia/TelegramJob';
import Telegram from './SocialMedia/Telegram';
// import Instagram from './SocialMedia/Instagram';
// import Linkedin from './SocialMedia/Linkedin';
// import Ebook from './SocialMedia/Ebook';
import EbookCard from './UiComponent/EbookCard';
import UdemyDSA from './AD/UdemyDSA';

import GetData from "./New UI/GetData"

// ---------------------------------------------------
// import css 
import "../CSS/home.css"


// ---------------------------------------------------
// import images
import gfg from "../Image/gfg.png"
import GfgAffiliate from './AD/Geeksforgeeks/GfgAffiliate';
import TempAD from './AD/TempAD';
// import datacamp from "../Image/datacamp.png"


const Home = () => {
    return (
        <div className = "home">
            <Header/>
            <div className = "tel-job gfg">
                {/* <TelegramJob/> */}
                {/* <FreeCourse/> */}
                {/* <MidUp/> */}
                <TempAD/>
                {/* <Telegram/> */}
            </div>
            {/* <FreeCourse/> */}

            <h1 className = "title-l">Get off-campus placement drives & internship updates</h1>
            <h1 className = "title-mobile">Recent off-campus drives 👇</h1>
            <div className = "grid-home">
                {/* <Data/>  */}
                <GetData/>
                <div className = "sidebar">
                        <h3 className="invv">Invitation code : 
                <span className="code">GFGH1EIFT</span>
            </h3>
            <div>
                <TempAD/>
                <a href="https://bit.ly/3ihtYi1">
                    <img className = "gfg-m" src= {gfg} alt="" />
                </a>
                <h3 className="inv">Invitation code : 
                    <span className="code">GFGH1EIFT</span>
                </h3>
                </div>
                    <h3 className="book-title">Become 100% Interview Ready 🚀</h3>
                    <Ppa/>                    
                    <hr /> 
                    {/* <UdemyDSA/> */}
                    {/* <a href="https://bit.ly/up-ip-ig">
                        <img className = "datacamp-poster" src={up} alt="" />
                    </a> */}
                    <GfgAffiliate/>
                    {/* <a href="https://datacamp.pxf.io/c/2393879/1012793/13294">
                        <img className = "datacamp-poster" src={datacamp} alt="" />
                    </a>*/}
                    <hr /> 
                    <h3 className="book-title">📚 Books for interview preparation</h3>
                    <EbookCard/>
                </div>   
            </div>
            <Footer/>          
        </div>
    )
}

export default  Home;