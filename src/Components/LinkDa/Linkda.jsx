import React, { useEffect, useState } from "react";

// import methods from helper
import { getAdLinkData, countAdLinkClick } from "../../Helper/adapicall";

// import css
import styles from "./linkda.module.scss";

const Linkda = () => {
    useEffect(() => {
        loadAdLinkData();
    }, []);

    const [data, setData] = useState([]);
    const loadAdLinkData = () => {
        getAdLinkData().then((result) => {
            if (!result) {
                console.log("Can not load linkda data from backend");
            } else {
                setData(result);
            }
        });
    };

    return (
        <div>
            {data.length > 0 && (
                <a
                    onClick={() => countAdLinkClick(data[0]._id)}
                    href={data[0].link}>
                    <div className={styles.ad_container}>
                        <p>{data[0].title}</p>
                        <i className="fa-solid fa-arrow-up-right-from-square"></i>
                    </div>
                </a>
            )}
        </div>
    );
};

export default Linkda;
