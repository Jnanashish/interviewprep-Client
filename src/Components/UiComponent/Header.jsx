import React from 'react'

//import css
import "../../CSS/header.css"


const Header = () => {
    return (
        <div>
            <div className="header flex">
                <h1 className="logo">interview<span children="logo-2nd-part">Prep</span></h1>
                <div className = "icons">
                    <a href="https://www.instagram.com/interviewprep.tech/" target="_blank" rel="noopener noreferrer">
                        <img className="icon" src="https://img.icons8.com/fluency/240/000000/instagram-new.png" alt="ig-logo"/>
                    </a>
                    <a href="https://t.me/interviewpreptech" target="_blank" rel="noopener noreferrer">
                        <img className="icon" src="https://img.icons8.com/fluency/240/000000/telegram-app.png" alt="telegram-logo"/>
                    </a>
                    <a href="https://www.linkedin.com/company/thecodergeek" target="_blank" rel="noopener noreferrer">
                        <img className="icon" src="https://img.icons8.com/color/240/000000/linkedin.png" alt="telegram-logo"/>
                    </a>
                </div>
            </div> 
        </div>
    )
}

export default Header;