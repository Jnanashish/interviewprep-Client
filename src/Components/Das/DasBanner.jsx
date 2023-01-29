import React from "react";
import styles from "./das.module.scss";
import { countAdLinkClick } from "../../Helper/adapicall";
import { useSelector } from "react-redux";

const BannerDa = () => {
    const data = useSelector((state) => state.dasReducer.dasBanner);
    return (
        <div>
            {data.length > 0 && (
                <a href={data[0].link}>
                    <div
                        onClick={() => countAdLinkClick(data[0]._id)}
                        className={styles.dasBanner_container}>
                        <img
                            className={styles.dasBanner}
                            src={data[0].imagePath}
                            alt="banner"
                        />
                        <p className={styles.clickhereMsg}>
                            Click on this banner.
                        </p>
                    </div>
                </a>
            )}
        </div>
    );
};

export default BannerDa;
