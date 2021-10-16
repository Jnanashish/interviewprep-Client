import React ,{useState, useEffect} from 'react'

// import css
import "../../CSS/link.css"
import "../../CSS/filter.css"

//import components
import LinkCard from "../UiComponent/LinkCard"
import Loading from '../UiComponent/Loading'
import TelegramJob from "../SocialMedia/TelegramJob"


import FreeCourse from "../AD/Geeksforgeeks/FreeCourse"

import LinkUI from '../New UI/LinkUI'
const Data = () => {
    useEffect(() => {
        getData();
    }, [])

    const [data, setData] = useState([]);
    const getData = async() =>{
        try {
            const res = await fetch('http://localhost:5000/get', {
                method : "GET",
                headers : {
                    Accept : "application/json",
                    "Content-Type" : "application/json"
                },
            });
            const data = await res.json();  
            setData(data);
            localStorage.setItem('links', JSON.stringify(data));
        } catch (error) {
            console.log("Some error happend");
            let collection = localStorage.getItem('links')
            setData(JSON.parse(collection));
        }
    }

    var itemCount = 0;

    return (
        <div>   
            {data.map(item => { 
                console.log(item)
                return( 
                    <div>
                        <LinkUI cnt = {itemCount++} key={item._id} role={item.role} data={item} imagePath = {item.imagePath}/>
                    </div>
                )
            })}
        </div>
    )
}

export default Data;