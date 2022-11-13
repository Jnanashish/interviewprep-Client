import React, { useEffect, useState } from "react";

// import methods from helper
import { getAdLinkData, countAdLinkClick } from "../../Helper/adapicall";

import styles from "./linkdadesktop.module.scss";

function LinkdaDesktop() {
    useEffect(() => {
        loadAdLinkData();
    }, []);

    const [data, setData] = useState([]);
    const loadAdLinkData = () => {
        getAdLinkData().then((result) => {
            setData(result);
        });
    };

    return (
        <div className={styles.linda_con}>
            <p>Important Links</p>
            {data.map((item) => {
                return (
                    <div key={item._id} className={styles.da_item}>
                        <a
                            onClick={() => countAdLinkClick(item._id)}
                            href={item.link}>
                            ✅ {item.title}
                        </a>
                        <br />
                    </div>
                );
            })}

            <div className={styles.da_item}>
                <a href="https://t.me/interviewpreptech">
                    ✅ Free ebooks & DSA notes | Join Telegram
                </a>
                <br />
            </div>
            {data.length <= 2 && (
                <div className={styles.da_item}>
                    <a
                        className={styles.linkedin_con}
                        href="https://t.me/interviewpreptech">
                        <img
                            src="https://i.ibb.co/QbpGFMN/3d-plastilina-linkedin-1-min-1.png"
                            alt="linkedin logo"
                        />
                        <p>Connect with us on Linkedin</p>
                    </a>
                </div>
            )}
        </div>
    );
}

export default LinkdaDesktop;
