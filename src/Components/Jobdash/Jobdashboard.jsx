/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";

import "rc-dropdown/assets/index.css";
import styles from "./jobdashboard.module.scss";
import { useSelector } from "react-redux";

// import components
import LinkMid from "./Linkmid";
import Jobcardloader from "../Loader/Jobcardloader";
import Newjobloader from "../Loader/Newjobloader";

// methods for API Call
import { getjdData } from "../../Helper/Jdapicall";
import Linkda from "../Das/DasLink";
import BannerDa from "../Das/DasBanner";

const Jobdash = () => {
    const [pagenum, setPagenum] = useState(1);
    const [data, setData] = useState([]);
    const [showloader, setShowloader] = useState(false);
    const [loaddata, setLoaddata] = useState(true);
    const [callcnt, setCallcnt] = useState(1);
    const [errmsg, setErrmsg] = useState(false);
    const [loader, setLoader] = useState(false);

    const dasBannerData = useSelector((state) => state.dasReducer.dasBanner);
    const dasLinkData = useSelector((state) => state.dasReducer.dasLink);

    // load all job description data with page number
    const loadAlljdData = () => {
        setLoader(true);
        getjdData(pagenum).then((result) => {
            if (!result) {
                console.log("Cannot Load data");
                // setErrmsg(true);
                setLoader(false);
                setShowloader(false);
            }
            if (result && result.data.length === 0) {
                setCallcnt(callcnt + 1);
                if (callcnt === 3) {
                    setLoaddata(false);
                }
                setLoader(false);
                // setErrmsg(true);
                setShowloader(false);
            } else if (result) {
                setData([...data, ...result.data]);
                setShowloader(false);
                setLoader(false);
                localStorage.setItem("links", JSON.stringify(result.data));
            }
        });
    };
    // intial jd loading with 1 as pagenum
    useEffect(() => {
        loadAlljdData();
    }, [pagenum]);

    window.onscroll = () => {
        if (
            !errmsg &&
            !loader &&
            loaddata &&
            window.innerHeight + document.documentElement.scrollTop + 300 >
                document.documentElement.offsetHeight
        ) {
            setpagenum();
            setShowloader(true);
        }
    };
    const setpagenum = () => setPagenum(pagenum + 1);

    var itemCount = 0;
    return (
        <div>
            <div className={styles.jobdashboard_con}>
                {dasBannerData.length === 0 && <Linkda />}
                <BannerDa />
                {!errmsg && (
                    <h1 className={styles.title_mobile}>
                        Recent off-campus drives :
                    </h1>
                )}
                {!errmsg && data.length === 0 && <Jobcardloader />}
                {!errmsg &&
                    data.map((item) => {
                        return (
                            <div key={item.id} className={styles.job_cards}>
                                {itemCount % 5 === 2 && <Linkda />}
                                <LinkMid cnt={itemCount++} data={item} />
                            </div>
                        );
                    })}
                {errmsg && setpagenum > 1 && (
                    <div className={styles.error_msg}>
                        <h2>Sorry 😥</h2>
                        <p>
                            An error has occurred and we're working to fix the
                            problem ! We'll be up and running shortly.
                        </p>

                        <h4>
                            Meanwhile You can find all the job links in our
                            telegram group.
                        </h4>
                        <a href="https://t.openinapp.co/careersattech-3 ">
                            Join Now <i className="fa-brands fa-telegram"></i>
                        </a>
                    </div>
                )}
            </div>
            {showloader === true && <Newjobloader />}
        </div>
    );
};

export default Jobdash;
