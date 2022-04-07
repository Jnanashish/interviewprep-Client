import React ,{useState, useEffect} from 'react'

//import css
import styles from "./joblinks.module.scss"

// import react toast
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {API} from "../../../Backend"

// import components
import Adminlinkcard from "../Adminlinkcard/Adminlinkcard"
import Update from './Update'


const UpdateData = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        getData();
    }, [])

    const deleteData = (id) =>{
        console.log(id);
        fetch(`${API}/jd/delete/${id}`, { method: 'DELETE' })
        .then((res) =>
            getData(),
            toast('Data Deleted Successfully')
        ) 
        .catch((err) => {
            toast.error("An error Occured")
        })             
    }

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
            <h2 className={styles.adminpanel_title}>
                List of available Jobs -  {data.length} 
            </h2>  
            {data.map(item => { 
                return(
                    <div className = {styles.updatedata_con}>
                        <Adminlinkcard 
                            key={item._id} title = {item.title} lastdate={item.lastdate} totalclick = {item.totalclick}                           
                        />
                        <div className={styles.adminlink_con}>
                            <button onClick={() => deleteData(item._id)}
                                className = {styles.adminlinkcard_btn}
                            >
                                Delete
                            </button>
                            
                            <a href={item.link} target="_blank" rel="noopener noreferrer">
                                <button className = {styles.adminlinkcard_btn}>Visit Link</button>
                            </a> 
                        </div>
                        <Update item = {item}/>                  
                        <hr className = {styles.line} />
                    </div>
                )
            })}
            <ToastContainer />
        </div>
    )
}

export default UpdateData;