import React, {useEffect, useState} from 'react'

// import components
import Linkimgcard from "./Linkimgcard"

// import methods of api call
import {getAdLinkImgData, countAdLinkImgClick} from "../../Helper/adapicall"


const LinkimgDa = (props) => {
    
    useEffect(() => {
        loadAdLinkData();
    }, []);

    const [adData, setAdData] = useState([]);
    const loadAdLinkData = () => {
        getAdLinkImgData().then(result => {
            setAdData(result)
            localStorage.setItem('links', JSON.stringify(result.data));
        })
    } 

    return (
        <div>
            {props.count === 0 && adData.length > 0 && 
                <a onClick={() => countAdLinkImgClick(adData[0]._id)} href={adData[0].link} target="_blank" rel="noopener noreferrer">
                    <Linkimgcard 
                        link={adData[0].link} title={adData[0].title} para={adData[0].para} imagePath={adData[0].imagePath}
                    />
                </a> 
            }

            {props.count === 1 && adData.length > 1 && 
                <a onClick={() => countAdLinkImgClick(adData[1]._id)} href={adData[1].link} target="_blank" rel="noopener noreferrer">
                    <Linkimgcard 
                        link={adData[1].link} title={adData[1].title} para={adData[1].para} imagePath={adData[1].imagePath}       
                    />
                </a>
            }   

            {props.count === 2 && adData.length > 2 && 
                <a onClick={() => countAdLinkImgClick(adData[2]._id)} href={adData[2].link} target="_blank" rel="noopener noreferrer">
                    <Linkimgcard 
                        link={adData[2].link} title={adData[2].title} para={adData[2].para} imagePath={adData[2].imagePath}       
                    />
                </a>
            }          

            {props.count === 3 && adData.length > 3 && 
                <a onClick={() => countAdLinkImgClick(adData[3]._id)} href={adData[3].link} target="_blank" rel="noopener noreferrer">
                    <Linkimgcard 
                        link={adData[3].link} title={adData[3].title} para={adData[3].para} imagePath={adData[3].imagePath}
                    />
                </a>
            }             
        </div>
    )
}

export default LinkimgDa;