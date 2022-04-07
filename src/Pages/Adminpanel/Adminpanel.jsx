import React, {useState, useContext} from 'react'

// import css
import styles from "./adminpanel.module.scss"


// import components
import AddData from '../../Components/Admin/Adddata/Adddata'
import Joblinks from '../../Components/Admin/Joblinks/Joblinks'
import AddLink from "../../Components/Admin/AD/Addlink"
import AddLinkImg from "../../Components/Admin/AD/Addlinkimg"
import AddBanner from "../../Components/Admin/AD/Addbanner"

// context
import {UserContext} from "../../Context/userContext"
import {Redirect} from "react-router-dom"

import Adpoptype from '../../Components/Admin/Dapoptype/Adpoptype'

const AdminPanel = () => {
    const [viewform, setViewform] = useState(true)
    const [viewlinks, setViewlinks] = useState(false)
    const [viewadlink, setViewadlink] = useState(false)
    const [viewadlinkimg, setViewadlinkimg] = useState(false)
    const [viewbanner, setViewbanner] = useState(false)
    const [viewadpoptype, setViewadpoptype] = useState(false)


    const context = useContext(UserContext);
    if (!context.user?.email) {
        return <Redirect to="/" />;
    }

    return (
        <div className={styles.adminpanel}>
            <div className={styles.adminpanel_header}>
                <h1>Admin Panel</h1>
                <h4>Welcome Jnanashish handique</h4>
            </div>
            
            <div className={styles.adminpanel_grid}>
                <div className={styles.adminpanel_nav}>
                    <button id="nav1" onClick={()=>{setViewform(!viewform)}}
                        className={styles.adminpanel_nav_btn}>Add New Job</button>

                    <button id="nav2" onClick={()=>{setViewlinks(!viewlinks)}}
                        className={styles.adminpanel_nav_btn}>Job Links</button>

                    <button id="nav3" onClick={()=>{setViewadlink(!viewadlink)}} 
                        className={styles.adminpanel_nav_btn}>Ad (link only)</button>

                    <button id="nav4" onClick={()=>{setViewadlinkimg(!viewadlinkimg)}} 
                        className={styles.adminpanel_nav_btn}>Ad (link + img)</button>

                    <button id="nav5" onClick={()=>{setViewbanner(!viewbanner)}} 
                        className={styles.adminpanel_nav_btn}>Ad banner</button>

                    <button id="nav6" onClick={()=>{setViewadpoptype(!viewadpoptype)}} 
                        className={styles.adminpanel_nav_btn}>Type of Ad popup</button>                        
                    
                    <a className={styles.adminpanel_nav_btn} target="_blank" rel="noopener noreferrer" href="https://api.counterapi.dev/v1/get?name=goodinterviewprep">Like count</a>
                    <a className={styles.adminpanel_nav_btn} target="_blank" rel="noopener noreferrer" href="https://api.counterapi.dev/v1/get?name=badinterviewprep">Dislike count</a>                    
                </div>

                <div className={styles.adminpanel_home}>
                    {viewform === true && <AddData/> }
                    {viewlinks === true && <Joblinks/> }
                    {viewadlink === true && <AddLink/> }
                    {viewadlinkimg === true && <AddLinkImg/> }
                    {viewbanner === true && <AddBanner/> }
                    {viewadpoptype === true && <Adpoptype/>}
                </div>
            </div>
        </div>
    )
}

export default AdminPanel;









    // if(viewform){nav1.current.style.color = "#92b8f6"}
    // if(!viewform) document.getElementById("nav1").style.backgroundColor = "#fff"
    

    // if(viewlinks) document.getElementById("nav2").style.backgroundColor = "#92b8f6"
    // if(!viewlinks) document.getElementById("nav2").style.backgroundColor = "#fff"

    // if(viewadlink) document.getElementById("nav3").style.backgroundColor = "#92b8f6"
    // if(!viewadlink) document.getElementById("nav3").style.backgroundColor = "#fff"

    // if(viewadlinkimg) document.getElementById("nav4").style.backgroundColor = "#92b8f6"
    // if(!viewadlinkimg) document.getElementById("nav4").style.backgroundColor = "#fff"
    
    // if(viewbanner) document.getElementById("nav5").style.backgroundColor = "#92b8f6"
    // if(!viewbanner) document.getElementById("nav5").style.backgroundColor = "#fff"

    // if(viewadpoptype) document.getElementById("nav6").style.backgroundColor = "#92b8f6"
    // if(!viewadpoptype) document.getElementById("nav6").style.backgroundColor = "#fff"