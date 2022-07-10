import React,{useState, useEffect}  from 'react'

// methods from API Call
import {getAdBannerData, countBannerClick} from "../../Helper/adapicall"

// import css
import styles from "./bannerda.module.scss"


const Bannerda = () => {
    useEffect(() => {loadAdBannerData()}, [])
    const [data, setData] = useState([]);

    // load data of banners 
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
                    <a onClick={() => countBannerClick(item._id)} 
                        href={item.link} target="_blank" rel="noopener noreferrer">
                            {/* Show AD text on top of the banner  */}
                            <p className={styles.ad_text}>Click here 👇</p>
                            <img 
                                className = {styles.bannerda_con} 
                                src={item.imagePath} 
                                alt="Ads Poster"                                
                            />
                    </a>
                )
            })}
        </div>
    )
}

export default Bannerda;