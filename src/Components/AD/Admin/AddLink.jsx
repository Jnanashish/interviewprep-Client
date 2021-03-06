import React,{useEffect, useState}  from 'react'

// import react toast
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { API } from "../../../Backend"

const AddLink = () => {
    const [link, setLink] = useState('');
    const [title, setTitle] = useState('');
    const [para, setPara] = useState('');

    const formData = new FormData();    

    const addData = async (e) =>{
        e.preventDefault();

        formData.append("link", link)
        formData.append("title", title)
        formData.append("para", para)
        const res = await fetch(`${API}/sda/link/add`,{
            method : "POST",
            body : formData
        })

        if(res.status === 201){
            toast('Data Added Successfully')
        } else {
            toast.error("An error Occured")
        }
    }

    useEffect(() => {
        getData();
    }, [])

    const [data, setData] = useState([]);
    const getData = async() =>{
        try {
            const res = await fetch(`${API}/sda/link/get`, { method : "GET" });
            const data = await res.json();  
            setData(data);
        } catch (error) {
            console.log("Some error happend");
        }
    }

    const deleteData = (id) =>{
        fetch(`${API}/sda/link/delete/${id}`, { method: 'DELETE' })
        .then((res) => 
            getData()
        ) 
        .catch((err) => {
            toast.error("An error Occured")
        })        
    }  

    return (
        <div className="admin">
            <h2 className="adminpanel-title">Ad (Link Only)</h2>
            <div>
                <form> 
                    <div className="admin-grid">
                        <h3 className="admin-label">Link : </h3>
                        <input className="admin-input" value = {link} 
                            onChange = {(e) => setLink(e.target.value)}
                            type="text" placeholder = "Link"/>
                        <h3 className="admin-label">Title for ad : </h3>
                        <input className="admin-input" value = {title} 
                            onChange = {(e) => setTitle(e.target.value)}
                            type="text" placeholder = "Title"/>
                        <h3 className="admin-label">Paragraph(If any) : </h3>
                        <input className="admin-input" value = {para} 
                            onChange = {(e) => setPara(e.target.value)}
                            type="text" placeholder = "Paragraph"/>
                    </div>                   
                    <button className = "update" type= "button" onClick = {addData}>Submit</button>
                </form>
            </div> 
            <hr />
            <br />
            <div className = "update-data-container">   
                <h3 className="adminpanel-title">Total Ads with Links count : {data.length}</h3> 
                   {data.map(item => { 
                    return(
                        <div className="adlink-con">
                            <h2>{item.title}</h2>
                            <button onClick={() => deleteData(item._id)} className = "update">Delete</button>
                            <a href={item.link} target="_blank" rel="noopener noreferrer">
                                <button className = "update">Visit Link</button>
                            </a>
                            <ToastContainer /> 
                            <h3>Total Click : {item.totalclick}</h3>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default AddLink;