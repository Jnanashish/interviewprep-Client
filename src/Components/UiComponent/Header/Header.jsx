import React, { useState } from "react";

// import css
import styles from "./header.module.scss";
import logo from "../../../Image/logo.svg";

import { Link } from "react-router-dom";

// import icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";

const Header = () => {
    const [opendrawer, setOpendrawer] = useState(false);

    const toggleDrawer = (open) => (event) => {
        if (
            event &&
            event.type === "keydown" &&
            (event.key === "Tab" || event.key === "Shift")
        ) {
            return;
        }
        setOpendrawer(open);
    };

    return (
        <div className={styles.header_con}>
            <div className={styles.header}>
                <h1 className={styles.logo}>
                    <Link to={`/`}>
                        <img src={logo} alt="careersattech logo" />
                    </Link>
                </h1>

                {/* Social media icons for desktop view */}
                {/* <div className={styles.icon_con}>
                    <a
                        href="https://www.instagram.com/interviewprep.tech/"
                        target="_blank"
                        rel="noopener noreferrer">
                        <img
                            className={styles.icon}
                            src="https://img.icons8.com/fluency/240/000000/instagram-new.png"
                            alt="instagram-logo"
                        />
                    </a>
                    <a
                        href="https://t.me/interviewpreptech"
                        target="_blank"
                        rel="noopener noreferrer">
                        <img
                            className={styles.icon}
                            src="https://img.icons8.com/fluency/240/000000/telegram-app.png"
                            alt="telegram-logo"
                        />
                    </a>
                    <a
                        href="https://www.linkedin.com/company/thecodergeek"
                        target="_blank"
                        rel="noopener noreferrer">
                        <img
                            className={styles.icon}
                            src="https://img.icons8.com/color/240/000000/linkedin.png"
                            alt="linkedin-logo"
                        />
                    </a>
                </div> */}

                {/* app drawer for mobile only  */}
                <div className={styles.drawericon}>
                    <FontAwesomeIcon
                        onClick={toggleDrawer(true)}
                        icon={faBars}
                    />
                    <SwipeableDrawer
                        anchor="top"
                        open={opendrawer}
                        onClose={toggleDrawer(false)}
                        onOpen={toggleDrawer(true)}>
                        <div className={styles.drawer_con}>
                            <a
                                href="https://openinapp.co/careersat"
                                className={styles.browser_msg}>
                                <p>Open this website in your browser</p>
                                <i className="fa-solid fa-arrow-up-right-from-square"></i>
                            </a>
                            <h2>Join us On Telegram</h2>
                            <p className={styles.telegram_para}>
                                To get direct links for latest job updates &
                                Free resources for interview preparation 😇
                            </p>
                            <a href="https://t.openinapp.co/careersattech-2">
                                <div className={styles.telegram_btn}>
                                    <p>
                                        <span>2022 Graduates</span> click here
                                        to Join
                                    </p>
                                    <i className="fa-brands fa-telegram"></i>
                                </div>
                            </a>
                            <a href="https://t.openinapp.co/careersattech-1 ">
                                <div className={styles.telegram_btn}>
                                    <p>
                                        <span>2023 Graduates</span> click here
                                        to Join
                                    </p>
                                    <i className="fa-brands fa-telegram"></i>
                                </div>
                            </a>
                            <a href="https://t.openinapp.co/careersattech-3">
                                <div className={styles.telegram_btn}>
                                    <p>
                                        <span>Others</span> click here to Join
                                    </p>
                                    <i className="fa-brands fa-telegram"></i>
                                </div>
                            </a>
                        </div>
                    </SwipeableDrawer>
                </div>
            </div>
        </div>
    );
};

export default Header;
