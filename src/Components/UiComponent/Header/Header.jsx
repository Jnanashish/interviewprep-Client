import React from 'react'

//import css
import styles from "./header.module.scss"

const Header = () => {
    return (
    <div>
        <div className={styles.header}>
            <h1 className={styles.logo}>
                Careers@<span children="logo-2nd-part">Tech</span>
            </h1>
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
                        alt="telegram-logo"
                    />
                </a>
            </div>
        </div> 
    </div>
    )
}

export default Header;