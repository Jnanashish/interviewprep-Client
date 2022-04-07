import React from 'react'

// import css
import styles from "./telegramct.module.scss"

import telegram_banner from "../../Image/telegram_banner.svg"

function Telegrambanner() {
    return (
        <div className={styles.telegram_banner}>
            <a href="https://bit.ly/careersattech_web_ad">
                <img src={telegram_banner} alt="Telegram banner" />
            </a>
        </div>
    )
}

export default Telegrambanner