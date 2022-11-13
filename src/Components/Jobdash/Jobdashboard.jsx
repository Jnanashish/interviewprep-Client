/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import Dropdown from "rc-dropdown";
import Menu, { Item as MenuItem, Divider } from "rc-menu";

// import icons from fontawersome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faChevronDown } from "@fortawesome/free-solid-svg-icons";

// import css

import "rc-dropdown/assets/index.css";
import styles from "./jobdashboard.module.scss";

// import components
import LinkMid from "./Linkmid";
import Jobcardloader from "../Loader/Jobcardloader";
import LinkimgDa from "../LinkimgDa/LinkimgDa";
import Newjobloader from "../Loader/Newjobloader";
import Linkda from "../LinkDa/Linkda";

// methods for API Call
import {
    getjdData,
    getjdBatchData,
    getjdDegreeData,
    getjdJobtypeData,
    getcompanynamedata,
} from "../../Helper/Jdapicall";

const Jobdash = () => {
    const [pagenum, setPagenum] = useState(1);
    const [data, setData] = useState([]);
    const [showloader, setShowloader] = useState(false);
    const [loaddata, setLoaddata] = useState(true);
    const [callcnt, setCallcnt] = useState(1);
    const [companyname, setCompanyname] = useState("");
    const [errmsg, setErrmsg] = useState(false);
    const [loader, setLoader] = useState(false);

    // load all job description data with page number
    const loadAlljdData = () => {
        setLoader(true);
        getjdData(pagenum).then((result) => {
            if (!result) {
                console.log("Cannot Load data");
                setErrmsg(true);
                setLoader(false);
                setShowloader(false);
            }
            if (result && result.data.length === 0) {
                setCallcnt(callcnt + 1);
                if (callcnt === 3) {
                    setLoaddata(false);
                }
                setLoader(false);
                setErrmsg(true);
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

    // get job data based in batch
    const getBatchData = async (batch) => {
        setData([]);
        getjdBatchData(batch).then((result) => {
            if (result.error) {
                if (!result) {
                    console.log("Cannot Load data");
                }
                let collection = localStorage.getItem("links");
                setData(JSON.parse(collection));
                setErrmsg(true);
                setShowloader(false);
            }
            setData(result.data);
            localStorage.setItem("links", JSON.stringify(result.data));
        });
    };

    // get job data based in degree
    const getDegreeData = async (deg) => {
        setData([]);
        getjdDegreeData(deg).then((result) => {
            if (result.error) {
                if (!result) {
                    console.log("Cannot Load data");
                }
                let collection = localStorage.getItem("links");
                setData(JSON.parse(collection));
                setErrmsg(true);
                setShowloader(false);
            }
            setData(result.data);
            localStorage.setItem("links", JSON.stringify(result.data));
        });
    };

    // get job data based in role
    const getRoleData = async (role) => {
        setData([]);
        getjdJobtypeData(role).then((result) => {
            if (result.error) {
                if (!result) {
                    console.log("Cannot Load data");
                }
                let collection = localStorage.getItem("links");
                setData(JSON.parse(collection));
                setErrmsg(true);
                setShowloader(false);
            }
            setData(result.data);
            localStorage.setItem("links", JSON.stringify(result.data));
        });
    };

    const getCompanyData = async () => {
        setData([]);
        getcompanynamedata(companyname).then((result) => {
            console.log(result);
            if (result.error) {
                if (!result) {
                    console.log("Cannot Load data");
                }
                let collection = localStorage.getItem("links");
                setData(JSON.parse(collection));
                setErrmsg(true);
            }
            setData(result.data);
            localStorage.setItem("links", JSON.stringify(result.data));
        });
    };

    const clearfilter = () => {
        setPagenum(1);
        setData([]);
        loadAlljdData();
    };

    const batchmenu = (
        <Menu className={styles.dropdown_con}>
            <MenuItem
                onClick={() => {
                    clearfilter();
                }}
                className="dropdown_item"
                key="8">
                <h3>Clear filter</h3>
            </MenuItem>
            <Divider />
            <MenuItem
                onClick={() => getBatchData("2023")}
                className="dropdown_item"
                key="1">
                <h2>2023</h2>
            </MenuItem>
            <Divider />
            <MenuItem
                onClick={() => getBatchData("2022")}
                className="dropdown_item"
                key="2">
                <h2>2022</h2>
            </MenuItem>
            <Divider />
            <MenuItem
                onClick={() => getBatchData("2021")}
                className="dropdown_item"
                key="3">
                <h2>2021</h2>
            </MenuItem>
            <Divider />
            <MenuItem
                onClick={() => getBatchData("2020")}
                className="dropdown_item"
                key="4">
                <h2>2020</h2>
            </MenuItem>
            <Divider />
            <MenuItem
                onClick={() => getBatchData("2019")}
                className="dropdown_item"
                key="5">
                <h2>2019</h2>
            </MenuItem>
            <Divider />
            <MenuItem
                onClick={() => getBatchData("2018")}
                className="dropdown_item"
                key="6">
                <h2>2018</h2>
            </MenuItem>
            <Divider />
            <MenuItem
                onClick={() => getBatchData("2017")}
                className="dropdown_item"
                key="7">
                <h2>2017</h2>
            </MenuItem>
        </Menu>
    );

    const degreemenu = (
        <Menu className={styles.dropdown_con}>
            <MenuItem
                onClick={() => {
                    clearfilter();
                }}
                className="dropdown_item"
                key="8">
                <h3>Clear filter</h3>
            </MenuItem>
            <Divider />
            <MenuItem
                onClick={() => getDegreeData("M.Tech")}
                className="dropdown_item"
                key="1">
                <h2>M.E/M.Tech</h2>
            </MenuItem>
            <Divider />
            <MenuItem
                onClick={() => getDegreeData("B.Tech")}
                className="dropdown_item"
                key="2">
                <h2>B.E/B.Tech</h2>
            </MenuItem>
            <Divider />
            <MenuItem
                onClick={() => getBatchData("MCA")}
                className="dropdown_item"
                key="3">
                <h2>MCA</h2>
            </MenuItem>
            <Divider />
            <MenuItem
                onClick={() => getBatchData("B.Sc")}
                className="dropdown_item"
                key="4">
                <h2>B.Sc</h2>
            </MenuItem>
            <Divider />
            <MenuItem
                onClick={() => getBatchData("BCA")}
                className="dropdown_item"
                key="5">
                <h2>BCA</h2>
            </MenuItem>
        </Menu>
    );

    const jobtypeemenu = (
        <Menu className={styles.dropdown_con}>
            <MenuItem
                onClick={() => {
                    clearfilter();
                }}
                className="dropdown_item"
                key="8">
                <h3>Clear filter</h3>
            </MenuItem>
            <Divider />
            <MenuItem
                onClick={() => getRoleData("full")}
                className="dropdown_item"
                key="1">
                <h2>Full Time</h2>
            </MenuItem>
            <Divider />
            <MenuItem
                onClick={() => getRoleData("intern")}
                className="dropdown_item"
                key="2">
                <h2>Internship</h2>
            </MenuItem>
        </Menu>
    );
    var itemCount = 0;
    return (
        <div>
            <div className={styles.filter}>
                {/* For mobile device only  */}
                <h4 className={styles.m_tagline}>
                    One place solution to get off-campus <b>Internship</b> and{" "}
                    <b>Job</b> Updates 🚀.
                </h4>
                <div className={styles.search_mobile_flex}>
                    <h2 className={styles.filter_text}>Filter By : </h2>
                    <div className={styles.dropdown}>
                        <Dropdown
                            trigger={["click"]}
                            overlay={batchmenu}
                            animation="slide-up">
                            <button className={styles.dropdown_btn}>
                                Batch{" "}
                                <FontAwesomeIcon
                                    className={styles.icon}
                                    icon={faChevronDown}
                                />
                            </button>
                        </Dropdown>
                    </div>

                    <div className={styles.dropdown}>
                        <Dropdown
                            trigger={["click"]}
                            overlay={degreemenu}
                            animation="slide-up">
                            <button className={styles.dropdown_btn}>
                                Degree{" "}
                                <FontAwesomeIcon
                                    className={styles.icon}
                                    icon={faChevronDown}
                                />
                            </button>
                        </Dropdown>
                    </div>

                    <div className={styles.dropdown}>
                        <Dropdown
                            trigger={["click"]}
                            overlay={jobtypeemenu}
                            animation="slide-up">
                            <button className={styles.dropdown_btn}>
                                Job Type{" "}
                                <FontAwesomeIcon
                                    className={styles.icon}
                                    icon={faChevronDown}
                                />
                            </button>
                        </Dropdown>
                    </div>
                </div>

                <div className={styles.search_con}>
                    <input
                        type="text"
                        className={styles.searchcompany}
                        value={companyname}
                        onChange={(e) => setCompanyname(e.target.value)}
                        placeholder="Search Jobs with company name"
                    />
                    <button
                        onClick={getCompanyData}
                        className={styles.search_btn}>
                        <FontAwesomeIcon icon={faSearch} />
                    </button>
                </div>
            </div>

            <div className={styles.jobdashboard_con}>
                {/* <h1 className={styles.linkdatitle_mobile}>Important link 👇</h1> */}
                <div id="linkda_mobile_id" className={styles.linkda_mobile}>
                    <Linkda />
                </div>

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
                                <div className={styles.linkimgda_con}>
                                    {itemCount % 4 === 1 && (
                                        <LinkimgDa count={0} />
                                    )}
                                    {itemCount % 4 === 3 && (
                                        <LinkimgDa count={1} />
                                    )}
                                </div>

                                <LinkMid cnt={itemCount++} data={item} />
                            </div>
                        );
                    })}
                {errmsg && (
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
