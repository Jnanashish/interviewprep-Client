import React, {useState, useContext} from 'react'

// import css
import "../../CSS/adminpanel.css"

// import react toast
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// import components
import AddData from './AddData'
import UpdateData from './UpdateData'
import AddLink from "../AD/Admin/AddLink"
import AddLinkImg from "../AD/Admin/AddLinkImg"
import AddBanner from "../AD/Admin/AddBanner"

// context
import {UserContext} from "../../Context/userContext"
import {Redirect} from "react-router-dom"

import {API} from "../../Backend"

const AdminPanel = () => {
    const [viewform, setViewform] = useState(false)
    const [viewlinks, setViewlinks] = useState(false)
    const [viewadlink, setViewadlink] = useState(false)
    const [viewadlinkimg, setViewadlinkimg] = useState(false)
    const [viewbanner, setViewbanner] = useState(false)

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

    const context = useContext(UserContext);
    if (!context.user?.email) {
        return <Redirect to="/" />;
    }

    return (
        <div className="adminpanel">
            <h1>Admin Panel</h1>
            <div className="adminpanel-grid">
                <div className="adminpanel-nav">
                    <button onClick={()=>{setViewform(!viewform)}} className="adminpanel-nav-btn">Add New Job</button>
                    <button onClick={()=>{setViewlinks(!viewlinks)}} className="adminpanel-nav-btn">Job Links</button>
                    <button onClick={()=>{setViewadlink(!viewadlink)}} className="adminpanel-nav-btn">Ad (link only)</button>
                    <button onClick={()=>{setViewadlinkimg(!viewadlinkimg)}} className="adminpanel-nav-btn">Ad (link + img)</button>
                    <button onClick={()=>{setViewbanner(!viewbanner)}} className="adminpanel-nav-btn">Ad banner</button>
                    <hr />
                    <a className="adminpanel-nav-btn" target="_blank" rel="noopener noreferrer" href="https://api.counterapi.dev/v1/get?name=goodinterviewprep">Like count</a>
                    <a className="adminpanel-nav-btn" target="_blank" rel="noopener noreferrer" href="https://api.counterapi.dev/v1/get?name=badinterviewprep">Dislike count</a>                    
                </div>
                <div className="adminpanel-home">
                    <div className="adtype-panel">
                        <button onClick={()=>{AddadShowPop('ad')}} className="adminpanel-nav-btn">ad</button>                                   
                        <button onClick={()=>{AddadShowPop('email')}} className="adminpanel-nav-btn">email</button>               
                        <button onClick={()=>{AddadShowPop('none')}} className="adminpanel-nav-btn">none</button>     
                        <ToastContainer />          
                    </div>
                    {viewform === true && <AddData/> }
                    {viewlinks === true && <UpdateData/> }
                    {viewadlink === true && <AddLink/> }
                    {viewadlinkimg === true && <AddLinkImg/> }
                    {viewbanner === true && <AddBanner/> }
                </div>
            </div>
        </div>
    )
}

export default AdminPanel;