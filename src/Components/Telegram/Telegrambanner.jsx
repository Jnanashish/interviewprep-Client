import React from "react";

// import css
import styles from "./telegrambanner.module.scss";

const Telegrambanner = () => {
    return (
        <div className={styles.telegram_con}>
            <img
                className={styles.telegram_logo}
                src="https://img.icons8.com/fluency/240/000000/telegram-app.png"
                alt="Telegram logo"
            />
            <div className={styles.telegram_details}>
                <h2>Get Free resources for your interview preparation</h2>
                <p>
                    <span>🤯 </span> Get resources to prepare for interviews
                </p>
                <p>
                    <span>📚 </span> Free eBooks & DSA notes
                </p>
                <p>
                    <span>🎯 </span> Direct links of off-campus drives
                </p>
                <a
                    href="https://t.openinapp.co/interviewprep-1"
                    target="_blank"
                    rel="noopener noreferrer">
                    <button className={styles.btn}>🔥 Join Telegram 🔥</button>
                </a>
            </div>
        </div>
    );
};

export default Telegrambanner;
