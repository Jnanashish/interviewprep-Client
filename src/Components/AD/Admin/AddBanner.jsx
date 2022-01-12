import React, {useState, useEffect} from 'react'

//import css
import "../../../CSS/Admin Panel/admanager.css"

// import react toast
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { API } from "../../../Backend"

const AddBanner = () => {
    // state to store link of ad website
    const [link, setLink] = useState('');
    
    const formData = new FormData();   
    const handleimginp = (e) =>{
        const file = e.target.files ;
        formData.append('photo', file[0]);
    }

    // add data to backend via API
    const addData = async (e) =>{
        e.preventDefault();

        formData.append("link", link)
        const res = await fetch(`${API}/sda/banner/add`,{
            method : "POST",
            body : formData
        })

        if(res.status === 201){
            toast('Data Added Successfully')
        } else {
            toast.error("An error Occured")
        }
    }

    // load the already existed data if any
    useEffect(() => {
        getData();
    }, [])

    // store the ad data from website 
    const [data, setData] = useState([]);
    const getData = async() =>{
        try {
            const res = await fetch(`${API}/sda/banner/get`, { method : "GET" });
            const data = await res.json();  
            setData(data);
        } catch (error) {
            console.log("Some error happend");
        }
    }

    // delete the particular ad with id
    const deleteData = (id) =>{
        fetch(`${API}/sda/banner/delete/${id}`, { method: 'DELETE' })
        .then((res) => getData()) 
        .catch((err) => {toast.error("Can not delete Data")})        
    }    


    return (
        <div className="admin">
            <h2 className="adminpanel-title">Ads with Banner</h2>
            {/* Add the data through the form  */}
            <div>
                <form> 
                    <div className="admin-grid">
                        <h3 className="admin-label">Link to register : </h3>
                        <input className="admin-input" value = {link} 
                             onChange = {(e) => setLink(e.target.value)}
                             type="text" placeholder = "Link"/>
                    </div>
                    <div className="admin-grid">  
                        <div></div>
                        <div>  
                        <input onChange = {handleimginp} name="image" type="file"/>              
                        <button className = "addlink-data" type= "button" onClick = {addData}>Submit</button>
                        </div> 
                    </div>  
                </form>
            </div> 

            {/* Show the existed ad banners  */}
            <hr />
            <br />
            <h2 className="adminpanel-title">Ad banner count : {data.length}</h2> 
               {data.map(item => { 
                return(
                    <div>
                        <img  className="adimage" src={item.imagePath} alt="Ad-poster" />
                        <br />
                        <div>
                            <button onClick={() => deleteData(item._id)} className = "update">Delete</button>
                            <a href={item.link} target="_blank" rel="noopener noreferrer">
                                <button className = "update">Visit Link</button>
                            </a>
                            <ToastContainer /> 
                        </div>
                        <h2>Total Click : {item.totalclick}</h2>
                    </div>
                )
            })}
        
         </div>
    )
}

export default AddBanner;