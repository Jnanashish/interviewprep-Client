import React ,{useState, useEffect} from 'react'

//import css
import "../../CSS/Admin Panel/updateData.css"
import "../../CSS/link.css"


// import react toast
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {API} from "../../Backend"

// import components
import LinkCard from "./LinkCard"
import Update from './Update'

const UpdateData = () => {
    useEffect(() => {
        getData();
    }, [])

    const deleteData = (id) =>{
        fetch(`${API}/jd/delete/${id}`, { method: 'DELETE' })
        .then((res) =>
            getData(),
            toast('Data Deleted Successfully')
        ) 
        .catch((err) => {
            toast.error("An error Occured")
        })
                
    }

    const [data, setData] = useState([]);

    const getData = async() =>{
        try {
            const res = await fetch(`${API}/jd/get/all`, {
                method : "GET",
            });
            const data = await res.json(); 
            setData(data);
        } catch (error) {
              console.log("no");
        }
    }

    return (
        <div className = "update-data-container">  
            <h2 className="adminpanel-title">List of available Jobs -  {data.length} </h2>  
            {data.map(item => { 
                return(
                    <div className = "updateData">
                        <LinkCard 
                            key={item._id} title = {item.title} lastdate={item.lastdate} totalclick = {item.totalclick}                           
                        />
                        <div className="adminlink-btn">
                            <button onClick={() => deleteData(item._id)} className = "update">Delete</button>
                            <ToastContainer />
                            <a href={item.link} target="_blank" rel="noopener noreferrer">
                                <button className = "update">Visit Link</button>
                            </a>
                            
                        </div>
                        <Update item = {item}/>                  
                        <hr className = "line" />
                    </div>
                )
            })}
        </div>
    )
}

export default UpdateData;