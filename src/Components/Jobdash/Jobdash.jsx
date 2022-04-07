/* eslint-disable react-hooks/exhaustive-deps */
import React ,{useState, useEffect} from 'react'
import Dropdown from 'rc-dropdown';
import Menu, { Item as MenuItem, Divider } from 'rc-menu';

// import icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faChevronDown} from '@fortawesome/free-solid-svg-icons'

// import css
import 'rc-dropdown/assets/index.css';
import styles from "./jobdash.module.scss"

// import components
import LinkMid from './Linkmid'
import Jobcardloader from '../Loader/Jobcardloader'
// import Telegrambanner from "../Telegram/Telegrambanner"
import LinkimgDa from "../LinkimgDa/LinkimgDa"
import Newjobloader from '../Loader/Newjobloader'
import Telegramct from "../Telegramct/Telegramct"

// methods for API Call
import {getjdData, getjdBatchData, getjdDegreeData, getjdJobtypeData, getcompanynamedata} from "../../Helper/Jdapicall"


const Jobdash = () => {
    const [pagenum, setPagenum] = useState(1);
    const [data, setData] = useState([]);  
    const [showloader, setShowloader] = useState(false);
    const [loaddata, setLoaddata] = useState(true);
    const [callcnt, setCallcnt] = useState(1);
    const [companyname, setCompanyname] = useState("")


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
    
    useEffect(() => {loadAlljdData()}, [pagenum])

    window.onscroll = () =>{
        if(loaddata && window.innerHeight + document.documentElement.scrollTop + 20 > document.documentElement.offsetHeight){
            setpagenum()
            setShowloader(true)
        }
    }
    const setpagenum = () => setPagenum(pagenum + 1)
    // const setpagenum = () => setPagenum(pagenum)

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

    const getCompanyData = async() =>{
        console.log(companyname);
        setData([])
        getcompanynamedata(companyname).then(result => {
            console.log(result);
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


    const clearfilter = () => {
        setPagenum(1)
        setData([])
        loadAlljdData()
    }

    const batchmenu = (
        <Menu>
            <MenuItem  onClick = {() => {clearfilter()}} className="dropdown_item" key="8">
                <h3>Clear filter</h3>
            </MenuItem>
            <Divider />
            <MenuItem  onClick = {() => getBatchData("2023")} className="dropdown_item" key="1">
                <h2>2023</h2>
            </MenuItem>
            <Divider />
            <MenuItem onClick = {() => getBatchData("2022")} className="dropdown_item" key="2">
                <h2>2022</h2>
            </MenuItem>
            <Divider />
            <MenuItem onClick = {() => getBatchData("2021")} className="dropdown_item" key="3">
                <h2>2021</h2>
            </MenuItem>
            <Divider />
            <MenuItem onClick = {() => getBatchData("2020")} className="dropdown_item" key="4">
                <h2>2020</h2>
            </MenuItem>
            <Divider />
            <MenuItem onClick = {() => getBatchData("2019")} className="dropdown_item" key="5">
                <h2>2019</h2>
            </MenuItem>
            <Divider />
            <MenuItem onClick = {() => getBatchData("2018")} className="dropdown_item" key="6">
                <h2>2018</h2>
            </MenuItem>
            <Divider />
            <MenuItem onClick = {() => getBatchData("2017")} className="dropdown_item" key="7">
                <h2>2017</h2>
            </MenuItem>
        </Menu>
    );

    const degreemenu = (
        <Menu>
            <MenuItem  onClick = {() => {clearfilter()}} className="dropdown_item" key="8">
                <h3>Clear filter</h3>
            </MenuItem>
            <Divider />
            <MenuItem  onClick = {() => getDegreeData("M.Tech")} className="dropdown_item" key="1">
                <h2>M.E/M.Tech</h2>
            </MenuItem>
            <Divider />
            <MenuItem onClick = {() => getDegreeData("B.Tech")} className="dropdown_item" key="2">
                <h2>B.E/B.Tech</h2>
            </MenuItem>
            <Divider />
            <MenuItem onClick = {() => getBatchData("MCA")} className="dropdown_item" key="3">
                <h2>MCA</h2>
            </MenuItem>
            <Divider />
            <MenuItem onClick = {() => getBatchData("B.Sc")} className="dropdown_item" key="4">
                <h2>B.Sc</h2>
            </MenuItem>
            <Divider />
            <MenuItem onClick = {() => getBatchData("BCA")} className="dropdown_item" key="5">
                <h2>BCA</h2>
            </MenuItem>
        </Menu>
    );

    const jobtypeemenu = (
        <Menu>
            <MenuItem  onClick = {() => {clearfilter()}} className="dropdown_item" key="8">
                <h3>Clear filter</h3>
            </MenuItem>
            <Divider />
            <MenuItem  onClick = {() => getRoleData("full")} className="dropdown_item" key="1">
                <h2>Full Time</h2>
            </MenuItem>
            <Divider />
            <MenuItem onClick = {() => getRoleData("intern")} className="dropdown_item" key="2">
                <h2>Internship</h2>
            </MenuItem>
        </Menu>
    );

    var itemCount = 0;
    return (
        <div>   
            <div className={styles.filter}>
                <div className={styles.search_mobile_flex}>
                <h2 className={styles.filter_text}>Filter By : </h2>
                <div className={styles.dropdown}>
                    <Dropdown
                        trigger={['click']}
                        overlay={batchmenu}
                        animation="slide-up"
                    >
                    <button className={styles.dropdown_btn}>Batch <FontAwesomeIcon className={styles.icon} icon={faChevronDown}/></button>
                </Dropdown>
                </div>

                <div className={styles.dropdown}>
                    <Dropdown
                        trigger={['click']}
                        overlay={degreemenu}
                        animation="slide-up"
                    >
                    <button className={styles.dropdown_btn}>Degree <FontAwesomeIcon className={styles.icon} icon={faChevronDown}/></button>
                </Dropdown>
                </div>

                <div className={styles.dropdown}>
                    <Dropdown
                        trigger={['click']}
                        overlay={jobtypeemenu}
                        animation="slide-up"
                    >
                    <button className={styles.dropdown_btn}>Job Type <FontAwesomeIcon className={styles.icon} icon={faChevronDown}/></button>
                </Dropdown>
                </div>    
                </div>

                <div className={styles.search_con}>
                <input 
                    type="text" 
                    className={styles.searchcompany} 
                    value = {companyname}
                    onChange = {(e) => setCompanyname(e.target.value)}
                    placeholder='Search Job with company name' 
                />   
                <button onClick={getCompanyData} className={styles.search_btn}><FontAwesomeIcon icon={faSearch} /></button>  
                </div> 

            </div>


            {data.length === 0 && <Jobcardloader/> }   
            {data.map(item => { 
                return(   
                    <div>
                        {itemCount%12 === 0 && <LinkimgDa count={0}/>} 
                        {itemCount%12 === 3 && <LinkimgDa count={1}/>} 
                        {itemCount%12 === 6 && <LinkimgDa count={2}/>} 
                        {itemCount%12 === 9 && <LinkimgDa count={3}/>} 

                        <div className={styles.telgram_con_mobile}>
                            {itemCount>1 && itemCount%8 === 0 && <Telegramct/>}
                            {itemCount === 3 && <Telegramct/>}
                            {/* {itemCount>1 && itemCount%10 === 0 && <Telegrambanner/>}  */}
                        </div>

                        <LinkMid 
                            cnt = {itemCount++} data = {item}
                        />   
                    </div>
                )
            })}
            
            {showloader === true && <Newjobloader/>}
        </div>
    )
}
export default Jobdash;