import React,{useState, useEffect}  from 'react'

import {getAdBannerData} from "./Helper/adapicall";

// import css
import "../../CSS/link.css"
import "../../CSS/ads.css"

// method from API Call
import {countBannerClick} from "./Helper/adapicall"


const Ads = () => {
    useEffect(() => {loadAdBannerData()}, [])

    const [data, setData] = useState([]);
    const loadAdBannerData = () => {
        getAdBannerData().then(result => {
            setData(result)
            localStorage.setItem('links', JSON.stringify(result.data));
        })
    } 

    return (
        <div>
            {data.map(item => { 
                return(
                <a onClick={() => countBannerClick(item._id)} href={item.link} target="_blank" rel="noopener noreferrer">
                    <img className = "img-container" src={item.imagePath} alt="Ads Poster" />
                </a>
                )
            })}
        </div>
    )
}

export default Ads;