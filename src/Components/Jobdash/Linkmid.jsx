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

const LinkUI = (props) => {
    const { id, link, jdpage } = props.data;

    const [showModal, setShowModal] = useState(false);
    const [showbtn, setShoebtn] = useState(false);

    const adpoptype = "none";

    let history = useHistory();

    setTimeout(() => {
        setShoebtn(true);
    }, "1000");

    const handleOpenModal = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        if (jdpage === "true") {
            history.push(`/jd/${id}`);
        } else if (jdpage === "false") {
            countClickinJd(id);
            window.location.assign(link);
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
                        {showbtn && (
                            <button
                                className={styles.close_btn}
                                onClick={handleCloseModal}>
                                Redirect to Job page
                                <FontAwesomeIcon icon={faArrowRight} />
                            </button>
                        )}
                    </div>
                </ReactModal>
            </div>

            <div className={styles.linkcard_con}>
                {jdpage === "true" && adpoptype === "none" && (
                    <Link to={`/jd/${id}`}>
                        <Jobcard data={props.data} />
                    </Link>
                )}

                {jdpage === "true" && adpoptype !== "none" && (
                    <div onClick={() => handleOpenModal()}>
                        <Jobcard data={props.data} />
                    </div>
                )}

                {jdpage === "false" && adpoptype !== "none" && (
                    <div onClick={() => handleOpenModal()}>
                        <Jobcard data={props.data} />
                    </div>
                )}

                {jdpage === "false" && adpoptype === "none" && (
                    <a
                        onClick={() => countClickinJd(id)}
                        target="_blank"
                        rel="noopener noreferrer"
                        href={link}>
                        <Jobcard data={props.data} />
                    </a>
                )}
            </div>
        </div>
    );
};

export default LinkUI;
