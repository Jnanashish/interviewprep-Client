import React, { useState } from "react";
import { Link } from "react-router-dom";

// import components
import Jobcard from "../UiComponent/JobDetailsCard/JobDetailsCard.jsx";
import { countClickinJd } from "../../Helper/Jdapicall";
import { useSelector } from "react-redux";

// import css
import styles from "./linkmid.module.scss";

// react modal to show popup
import ReactModal from "react-modal";

// import icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { countBannerClick } from "../../Helper/adapicall";
import { useHistory } from "react-router-dom";
import { useEffect } from "react";

const LinkUI = (props) => {
    const { id, link, jdpage } = props.data;

    const [timer, setTimer] = useState(4);
    const [showModal, setShowModal] = useState(false);
    const [showbtn, setShoebtn] = useState(false);
    const [dasData, setDasData] = useState(null);
    const data = useSelector((state) => state.dasReducer.daPopType);
    const bannerdadata = useSelector((state) => state.dasReducer.dasBanner);
    let history = useHistory();

    useEffect(() => {
        if (bannerdadata.length > 1) {
            setDasData(bannerdadata[1]);
        } else if (bannerdadata.length === 1) {
            setDasData(bannerdadata[0]);
        }
    }, [bannerdadata]);

    useEffect(() => {
        if (showModal && timer > 0) {
            setTimeout(() => setTimer(timer - 1), 1000);
        }
    }, [timer, showModal]);

    setTimeout(() => {
        setShoebtn(true);
    }, "1000");

    const handleOpenModal = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        if (jdpage === "true") {
            history.push(`/jd/${id}`);
        } else if (jdpage === "false") {
            countClickinJd(id);
            window.location.assign(link);
            setShowModal(false);
        }
    };

    const handleClosepopup = () => {
        setShowModal(false);
    };

    return (
        <div>
            <div>
                <ReactModal
                    isOpen={showModal}
                    contentLabel="Minimal Modal Example"
                    className={styles.modal_con}>
                    <div className={styles.modal_items}>
                        <FontAwesomeIcon
                            onClick={handleClosepopup}
                            className={styles.cross_icon}
                            icon={faXmark}
                        />
                        {dasData && (
                            <div>
                                <a
                                    key={dasData._id}
                                    onClick={() =>
                                        countBannerClick(dasData._id)
                                    }
                                    href={dasData.link}
                                    target="_blank"
                                    rel="noopener noreferrer">
                                    <p className={styles.ad_text}>
                                        Click here to visit👇
                                    </p>
                                    <img
                                        className={styles.bannerda_con}
                                        src={dasData.imagePath}
                                        alt="Ads Poster"
                                    />
                                </a>
                            </div>
                        )}
                        {showbtn && (
                            <button
                                className={styles.close_btn}
                                style={
                                    timer !== 0
                                        ? {
                                              backgroundColor: "#deebff",
                                              color: "#121212",
                                          }
                                        : {}
                                }
                                onClick={() => handleCloseModal()}>
                                {timer === 0 && (
                                    <p>
                                        Redirect to Job page
                                        <FontAwesomeIcon icon={faArrowRight} />
                                    </p>
                                )}
                                {timer !== 0 && <p>{timer}</p>}
                            </button>
                        )}
                    </div>
                </ReactModal>
            </div>

            {data[0] && (
                <div className={styles.linkcard_con}>
                    {jdpage === "true" && data[0].adpoptype === "none" && (
                        <Link to={`/jd/${id}`}>
                            <Jobcard data={props.data} />
                        </Link>
                    )}

                    {jdpage === "true" && data[0].adpoptype !== "none" && (
                        <div onClick={() => handleOpenModal()}>
                            <Jobcard data={props.data} />
                        </div>
                    )}

                    {jdpage === "false" && data[0].adpoptype !== "none" && (
                        <div onClick={() => handleOpenModal()}>
                            <Jobcard data={props.data} />
                        </div>
                    )}

                    {jdpage === "false" && data[0].adpoptype === "none" && (
                        <a
                            onClick={() => countClickinJd(id)}
                            target="_blank"
                            rel="noopener noreferrer"
                            href={link}>
                            <Jobcard data={props.data} />
                        </a>
                    )}
                </div>
            )}
        </div>
    );
};

export default LinkUI;
