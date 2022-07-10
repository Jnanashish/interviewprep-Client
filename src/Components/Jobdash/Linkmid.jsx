import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";

// import components
import Jobcard from "../UiComponent/Jobcard/Jobcard.jsx" 
import {countClickinJd, gettypeofad} from "../../Helper/Jdapicall"

// import css
import styles from "./linkmid.module.scss"

// react modal to show popup
import ReactModal from 'react-modal';
import Bannerda from "../BannerDa/Bannerda"

// import icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark, faArrowRight } from '@fortawesome/free-solid-svg-icons'

import { useHistory } from "react-router-dom";

const LinkUI = (props) => {
    const [adpoptype, setAdpoptype] = useState("none");
    const [showModal, setShowModal] = useState(false)
    const {id, link, jdpage} = props.data

    let history = useHistory();
    useEffect(() => { getadpoptype() }, [])

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
        setShowModal(true)
    }

    const handleCloseModal = () =>{
        setShowModal(false)
        if(jdpage === "true"){
            history.push(`/jd/${id}`)
        } else if(jdpage === "false"){
            countClickinJd(id)
            window.location.assign(link);
        }
    }

    const handleClosepopup = () =>{
        setShowModal(false)
    }
    
    return (  
        <div>
            <div>
                <ReactModal 
                    isOpen={showModal}
                    contentLabel="Minimal Modal Example"  
                    className={styles.modal_con} 
                >   
                    <FontAwesomeIcon 
                        onClick={handleClosepopup} 
                        className={styles.cross_icon} 
                        icon={faXmark}                  
                    />
                    <Bannerda/>
                    <button 
                        className={styles.close_btn} 
                        onClick={handleCloseModal}>
                            Redirect to Job page  
                        <FontAwesomeIcon icon={faArrowRight}/>
                    </button>
                </ReactModal>
            </div>

            <div className={styles.linkcard_con} > 
                {jdpage === "true" && adpoptype === "none" &&  
                    <Link to = {`/jd/${id}`}> 
                        <Jobcard data = {props.data}/>
                    </Link>}
            
                {jdpage === "true" && adpoptype !== "none" &&
                    <div onClick={() =>handleOpenModal()}>
                        <Jobcard data = {props.data}/>
                    </div>}

                {jdpage === "false" && adpoptype !== "none" &&
                    <div onClick={() =>handleOpenModal()}>
                        <Jobcard data = {props.data}/>
                    </div>}

                {jdpage === "false" && adpoptype === "none" &&
                    <a onClick={() => countClickinJd(id)} 
                        target="_blank" rel="noopener noreferrer" 
                        href= {link}>
                            <Jobcard data = {props.data}/>
                    </a>}
            </div>
        </div>
    )
}

export default LinkUI;  


 