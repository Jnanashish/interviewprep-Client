import React,{useEffect, useState} from 'react'

// import methods from helper
import {getAdLinkData, countAdLinkClick} from "../../Helper/adapicall"

// import css
import styles from "./linkda.module.scss"


const Linkda = () => {
    useEffect(() => {loadAdLinkData()}, []);

    const [data, setData] = useState([]);
    const loadAdLinkData = () => {
        getAdLinkData().then(result => {
            setData(result)
            localStorage.setItem('links', JSON.stringify(result.data));
        })
    }     
    
    return (
        <div>
            {data.map(item => { 
                return(  
                    <a onClick={() => countAdLinkClick(item._id)} href={item.link}>
                        <div className={styles.ad_container}>
                        <p>{item.title}</p>
                        </div>
                    </a>
                )
            })}            
        </div>
    )
}


export default Linkda;