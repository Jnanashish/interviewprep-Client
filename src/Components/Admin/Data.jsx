import React ,{useState, useEffect} from 'react'

// import css
import "../../CSS/link.css"
import "../../CSS/filter.css"

//import components
import LinkCard from "../UiComponent/LinkCard"
import Loading from '../UiComponent/Loading'
import TelegramJob from "../SocialMedia/TelegramJob"
// import InstagramMid from '../SocialMedia/InstagramMid'
// import Datacamp from '../AD/Datacamp'
// import PpaMob from '../AD/PpaMob'
import GfgAffiliate from "../AD/Geeksforgeeks/GfgAffiliate";

import FreeCourse from "../AD/Geeksforgeeks/FreeCourse"
import down from "../../Image/down-arrow.png"
import TempAD from '../AD/TempAD'
import LinkUI from '../New UI/LinkUI'
const Data = () => {
    useEffect(() => {
        getData();
    }, [])

    const [data, setData] = useState([]);
    const getData = async() =>{
        try {
            const res = await fetch('https://interviewprep-api.herokuapp.com/get', {
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

    const getBatchData = async(batch) =>{
        setData([])
        console.log(batch);
        try {
            const res = await fetch(`https://interviewprep-api.herokuapp.com/get/batch?year=${batch}`, {
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


    const getDegreeData = async(deg) =>{
        setData([])
        try {
            const res = await fetch(`https://interviewprep-api.herokuapp.com/get/degree?degree=${deg}`, {
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

    const getRoleData = async(role) =>{
        setData([])
        try {
            const res = await fetch(`https://interviewprep-api.herokuapp.com/get/role?role=${role}`, {
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
            <div className = "filter">
            <div className="dropdown">
                <button className="dropbtn">Batch <img src={down} alt="down-arrow"></img></button>
                <div className="dropdown-content">
                    <button onClick = {() => getBatchData("2023")}>2023</button>
                    <button onClick = {() => getBatchData("2022")}>2022</button>
                    <button onClick = {() => getBatchData("2021")}>2021</button>
                    <button onClick = {() => getBatchData("2020")}>2020</button>
                    <button onClick = {() => getBatchData("2019")}>2019</button>
                </div>
            </div>  

            <div className="dropdown">
                <button className="dropbtn">Degree <img src={down} alt="down-arrow"></img></button>
                <div className="dropdown-content">
                    <button onClick = {() => getDegreeData("M.Tech")}>M.Tech</button>
                    <button onClick = {() => getDegreeData("B.Tech")}>B.Tech</button>
                    <button onClick = {() => getDegreeData("MCA")}>MCA</button>
                    <button onClick = {() => getDegreeData("B.Sc")}>B.Sc</button>
                </div>
            </div> 

            <div className="dropdown">
                <button className="dropbtn">Job Type <img src={down} alt="down-arrow"></img></button>
                <div className="dropdown-content">
                    <button onClick = {() => getRoleData("full")}>Full Time</button>
                    <button onClick = {() => getRoleData("intern")}>Internship</button>
                </div>
            </div> 
            </div>
            <div className = "tele-data">
                <TelegramJob/>
                <FreeCourse/>
            </div>
            
                { data.length === 0 && <div><Loading/></div>}
                {data.map(item => { 
                return( 
                    <div>
                        
                        {itemCount === 2 && <GfgAffiliate/> }
                        {itemCount === 14 && <GfgAffiliate/> }
                        {itemCount === 18 && <TempAD/> }
                        <LinkCard cnt = {itemCount++} key={item._id} link = {item.link} title = {item.title} position = {item.position} degree = {item.degree} batch = {item.batch} imagePath = {item.imagePath}/>
                    </div>
                )
            })}
        </div>
    )
}

export default Data;