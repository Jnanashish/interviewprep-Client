import React from "react";
import styles from "./das.module.scss";
import { countAdLinkClick } from "../../Helper/adapicall";
import { useSelector } from "react-redux";

const Linkda = () => {
    const data = useSelector((state) => state.dasReducer.dasLink);

    return (
        <div>
            {data.length > 0 && (
                <a
                    onClick={() => countAdLinkClick(data[0]._id)}
                    href={data[0].link}>
                    <div className={styles.ad_container}>
                        <p>{data[0].title}</p>
                        <img
                            src="https://img.icons8.com/ios-glyphs/60/0050ff/chevron-right.png"
                            alt="forward icon"
                        />
                    </div>
                </a>
            )}
        </div>
    );
};

export default Linkda;
