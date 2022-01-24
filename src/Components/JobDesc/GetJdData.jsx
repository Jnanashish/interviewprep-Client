/* eslint-disable react-hooks/exhaustive-deps */
import React ,{useState, useEffect} from 'react'

// import css
import "../../CSS/link.css"
import "../../CSS/filter.css"

// import components
import LinkUI from './LinkUi'
import Homeloader from '../Loader/Homeloader'
import Ads from "../AD/GetAdBanner"
import TelegramJob from "../SocialMedia/TelegramJob"
import GetAdLinkImg from '../AD/GetAdLinkImg'
import HomePageLoader from '../Loader/HomePageLoader'

// methods for API Call
import {getjdData, getjdBatchData, getjdDegreeData, getjdJobtypeData, gettypeofad} from "./Helper/jdapicall";


const Data = () => {
    const [pagenum, setPagenum] = useState(1);
    // store the data coming from database
    const [data, setData] = useState([]);
    const [adpoptype, setAdpoptype] = useState("none");
    const [showloader, setShowloader] = useState(false);
    const [loaddata, setLoaddata] = useState(true);
    const [callcnt, setCallcnt] = useState(1);

    const loadAlljdData = () => {
        getjdData(pagenum).then(result => {
            if(!result){
                console.log("Cannot Load data")
            }
            if(result.data.length === 0){ 
                setCallcnt(callcnt+1) 
                if(callcnt === 3){
                    setLoaddata(false)
                }
            }
            setData([...data, ...result.data])
            setShowloader(false)
            localStorage.setItem('links', JSON.stringify(result.data));
        })
    } 
    useEffect(() => {getadpoptype()}, [])
    useEffect(() => {loadAlljdData()}, [pagenum])

    window.onscroll = () =>{
        if(loaddata && window.innerHeight + document.documentElement.scrollTop + 5 > document.documentElement.offsetHeight){
            setpagenum()
            setShowloader(true)
        }
    }
    //TODO: const setpagenum = () => setPagenum(pagenum + 1)
    const setpagenum = () => setPagenum(pagenum)

    const getBatchData = async(batch) =>{
        setData([])
        getjdBatchData(batch).then(result => {
            if(result.error){
                if(!result){
                    console.log("Cannot Load data")
                }
                let collection = localStorage.getItem('links')
                setData(JSON.parse(collection));
            }
            setData(result.data);
            localStorage.setItem('links', JSON.stringify(result.data));            
        })
    }   

    const getDegreeData = async(deg) =>{
        setData([])
        getjdDegreeData(deg).then(result => {
            if(result.error){
                if(!result){
                    console.log("Cannot Load data")
                }
                let collection = localStorage.getItem('links')
                setData(JSON.parse(collection));
            }
            setData(result.data);
            localStorage.setItem('links', JSON.stringify(result.data));            
        })
    }   

    const getRoleData = async(role) =>{
        setData([])
        getjdJobtypeData(role).then(result => {
            if(result.error){
                if(!result){
                    console.log("Cannot Load data")
                }
                let collection = localStorage.getItem('links')
                setData(JSON.parse(collection));
            }
            setData(result.data);
            localStorage.setItem('links', JSON.stringify(result.data));            
        })
    }

    // Get type of ad need to show
    const getadpoptype = async(role) =>{  
        gettypeofad().then(result => {
            if(!result){
                console.log("Some error in getting adtype")
            } else {
                setAdpoptype("")
                setAdpoptype(result[0].adpoptype);
            }          
        })
    }

    var itemCount = 0;
    return (
        <div>
            <div className="filter">
            <label class="dropdown">   
                <div class="dd-button">Batch</div>
                <input type="checkbox" class="dd-input" id="test"/>
                <ul class="dd-menu">
                    <li onClick = {() => getBatchData("2023")}>2023</li>
                    <li onClick = {() => getBatchData("2022")}>2022</li>
                    <li onClick = {() => getBatchData("2021")}>2021</li>
                    <li onClick = {() => getBatchData("2020")}>2020</li>
                    <li onClick = {() => getBatchData("2019")}>2019</li>
                </ul>
            </label>

            <label class="dropdown">   
                <div class="dd-button">Degree</div>
                <input type="checkbox" class="dd-input" id="test"/>
                <ul class="dd-menu">
                    <li onClick = {() => getDegreeData("M.Tech")}>M.E/M.Tech</li>
                    <li onClick = {() => getDegreeData("B.Tech")}>B.E/B.Tech</li>
                    <li onClick = {() => getDegreeData("MCA")}>MCA</li>
                    <li onClick = {() => getDegreeData("B.Sc")}>B.Sc</li>
                    <li onClick = {() => getDegreeData("BCA")}>BCA</li>
                </ul>
            </label>

            <label class="dropdown">   
                <div class="dd-button">Job Type</div>
                <input type="checkbox" class="dd-input" id="test"/>
                <ul class="dd-menu">
                    <li onClick = {() => getRoleData("full")}>Full Time</li>
                    <li onClick = {() => getRoleData("intern")}>Internship</li>
                </ul>
            </label>
            </div>

            {data.length === 0 && <Homeloader/> }   
            {data.map(item => { 
                return(   
                    <div>
                        {itemCount%12 === 0 && <GetAdLinkImg count={0}/>} 
                        {itemCount%12 === 3 && <GetAdLinkImg count={1}/>} 
                        {itemCount%12 === 6 && <GetAdLinkImg count={2}/>} 
                        {itemCount%12 === 9 && <GetAdLinkImg count={3}/>} 

                        {/* Ads for only mobile device */}
                        <div className="m-view">
                            {itemCount === 5 && <div className="ad-con"> <TelegramJob/></div>} 
                            {itemCount === 10 && <div className="ad-con"><Ads/></div>} 
                            {itemCount === 16 && <div className="ad-con"> <TelegramJob/></div>} 
                            {itemCount === 26 && <div className="ad-con"><Ads/></div>} 
                        </div>

                        {/* Call the links for each job item */}
                        <LinkUI 
                            cnt = {itemCount++} key={item._id} id={item.id} title={item.title} jdpage = {item.jdpage} link={item.link} imagePath = {item.imagePath} batch={item.batch} degree = {item.degree}  jobtype={item.jobtype} adpoptype={adpoptype}
                        />   
                    </div>
                )
            })}
            {/* <HomePageLoader/> */}
            {showloader === true && <HomePageLoader/>}
        </div>
    )
}
export default Data;