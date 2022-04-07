import React,{useState} from 'react'
import {API} from "../../../Backend"

import styles from "./adpoptype.module.scss"

// import react toast
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Adpoptype() {
    const [adtype, setAdtype] = useState('none')
    const AddadShowPop = async (e) =>{
        setAdtype(e);
        const formData = new FormData();
        formData.append("adpoptype", adtype)
        const res = await fetch(`${API}/showadpop/update/61b56f22afa325ec398b2770`,{
            method : "PUT",
            body : formData
        })
        if(res.status === 200){
            toast(`Ad type changed to ${e}`)
        } else {
            toast.error("An error Occured")
        }
    }

    return (
        <div className={styles.adtype_panel}>
            <button onClick={()=>{AddadShowPop('ad')}} 
                className={styles.adminpanel_nav_btn}>ad</button>
            <button onClick={()=>{AddadShowPop('email')}} 
                className={styles.adminpanel_nav_btn}>email</button>  
            <button onClick={()=>{AddadShowPop('none')}} 
                className={styles.adminpanel_nav_btn}>none</button>     
            <ToastContainer />          
        </div>
    )
}

export default Adpoptype