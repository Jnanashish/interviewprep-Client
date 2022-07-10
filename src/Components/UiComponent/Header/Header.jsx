import React from 'react'

// import css
import styles from "./header.module.scss"
// imoport main logo
import logo from "../../../Image/logo.svg"

import { Link } from 'react-router-dom'


const Header = () => {
    return (
    <div className={styles.header_con}>
        <div className={styles.header}>
            <h1 className={styles.logo}>
                <Link to = {`/`}>
                    <img src={logo} alt="careersattech logo"/>
                </Link>
            </h1>

            {/* Social media icons for desktop view */}
            <div className={styles.icon_con}>
                <a href="https://www.instagram.com/interviewprep.tech/" 
                    target="_blank" rel="noopener noreferrer">
                    <img 
                        className={styles.icon} 
                        src="https://img.icons8.com/fluency/240/000000/instagram-new.png" 
                        alt="instagram-logo"                         
                    />
                </a>
                <a href="https://t.me/interviewpreptech" 
                    target="_blank" rel="noopener noreferrer">
                    <img 
                        className={styles.icon} 
                        src="https://img.icons8.com/fluency/240/000000/telegram-app.png" 
                        alt="telegram-logo"     
                    />
                </a>
                <a href="https://www.linkedin.com/company/thecodergeek" 
                    target="_blank" rel="noopener noreferrer">
                    <img 
                        className={styles.icon} 
                        src="https://img.icons8.com/color/240/000000/linkedin.png" 
                        alt="linkedin-logo"
                    />
                </a>
            </div>

            {/* Telegram icon for mobile only  */}
            <div className={styles.icon_con_mb}>
                <a href="https://t.me/interviewpreptech" 
                    target="_blank" rel="noopener noreferrer">
                    <img 
                        src="https://img.icons8.com/fluency/240/000000/telegram-app.png" 
                        alt="telegram-logo"     
                    />
                </a>
            </div>
        </div> 
    </div>
    )
}

export default Header;