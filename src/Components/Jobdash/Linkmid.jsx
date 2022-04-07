import React, {Fragment, useEffect, useState} from 'react';
import {Link} from "react-router-dom";

// import components
import Jobcard from "../UiComponent/Jobcard/Jobcard.jsx" 
import {countClickinJd, gettypeofad} from "../../Helper/Jdapicall"

// import css
import styles from "./linkmid.module.scss"


import ReactModal from 'react-modal';
import Bannerda from "../BannerDa/Bannerda"


// import icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

import { Redirect } from "react-router-dom";
import { useHistory } from "react-router-dom";

const LinkUI = (props) => {
    const [adpoptype, setAdpoptype] = useState("none");
    const [showModal, setShowModal] = useState(false)
    const {id, link, jdpage} = props.data
    let history = useHistory();
    useEffect(() => {getadpoptype()}, [])

    // Get type of ad need to show
    const getadpoptype = async(role) =>{  
        gettypeofad().then(result => {
            if(!result){
                console.log("Some error in getting adtype")
            } else {
                setAdpoptype("")
                setAdpoptype(result[0].adpoptype);
            }          
        })
    }

    const handleOpenModal = () =>{
        console.log("clicl");
        setShowModal(true)
    }

    const handleCloseModal = () =>{
        setShowModal(false)
        history.push(`/jd/${id}`)
    }
    return (  
        <div>
            <div>
                <ReactModal 
                    isOpen={showModal}
                    contentLabel="Minimal Modal Example"  
                    className={styles.modal_con} 
                >   <FontAwesomeIcon onClick={handleCloseModal} className={styles.cross_icon} icon={faXmark}/>
                    <Bannerda/>
                    <button className={styles.close_btn} onClick={handleCloseModal}>Close popup <FontAwesomeIcon icon={faXmark}/></button>
                </ReactModal>
            </div>
            <div className={styles.linkcard_con} > 
            {jdpage === "true" &&  adpoptype === "none" &&  
                <Link to = {`/jd/${id}`}> 
                    <Jobcard data = {props.data}/>
                </Link>
            }
        
            {jdpage === "true" &&  adpoptype !== "none" &&
                <div onClick={() =>handleOpenModal()}>
                    <Jobcard data = {props.data}/>
                </div>
            }

            {jdpage === "false" && 
            <a 
                onClick={() => countClickinJd(id)} 
                target="_blank" rel="noopener noreferrer" 
                href= {link}>
                    <Jobcard data = {props.data}/>
            </a> 
            }
        </div>
        </div>
    )
}

export default LinkUI;  

            //   <button onClick={handleOpenModal} className={styles.jd_con} >
            //         <Jobcard data = {props.data}/>
            //     </button>