/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react'

// import css
import styles from "./jobdesc.module.scss"

import parse from "html-react-parser";
import { useParams } from 'react-router';

// react router
import { Link} from "react-router-dom";

import useClipboard from "react-use-clipboard";

// import icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faShareSquare, faCopy } from '@fortawesome/free-solid-svg-icons'


// import components
import Email from "../Emailmini/Email"
import Bannerda from "../BannerDa/Bannerda"
import LinkDa from "../LinkDa/Linkda"
import Telegrambanner from "../Telegramct/Telegramct"
import JdLoader from '../Loader/JdLoader';
import Feedback from "../UiComponent/Feedback/Feedback"
import Footer from '../UiComponent/Footer/Footer';
import Header from "../UiComponent/Header/Header"


import { getAlljdData, countClickinJd } from "../../Helper/Jdapicall"

const JobDesc = () => {
    const props = useParams()
    const [data, setData] = useState([]);

    const loadAlljdData = () => {
        getAlljdData(props.id).then(result => {
            setData(result)
        })
    }
    useEffect(() => {
        loadAlljdData();
    }, [])

    const sharejob = () =>{
        if (navigator.share) {
          navigator
            .share({
                title: `${data.title} | ${data.title}`,
                text: `Check out this job : ${data.title}`,
                url: document.location.href,
            })
            .then(() => {
                console.log('Successfully shared');
            })
            .catch(error => {
                console.error('Something went wrong sharing the blog', error);
            });
        }
    }
    const jddata = data.title;
    
    console.log(jddata);
    const [isCopied, setCopied] = useClipboard(data.link);

    return (
        <div>
        <div className='desktopview'><Header/></div>
        
        {/* Back home button  */}
        <Link to = {`/`}>
            <div className={styles.backhome_btn}>  
                <p><FontAwesomeIcon icon={faAngleLeft}/> Home</p>
            </div>
        </Link>

        <div className={styles.jobddesc_con}>
        <div className = {styles.jd_con}>
            {data.length === 0 && <JdLoader/> }
            {data.length !== 0 && <div>
            <h1 className = {styles.jd_title}>
                {data.title}
            </h1>
            <div className = {styles.jd_details}>
                <table>
                    <tr>
                        <th>Particulars</th>
                        <th>Details</th>
                    </tr>
                    {data.role !== 'N' &&
                    <tr><td><b>Role</b></td><td>{data.role}</td></tr>}
                    {data.batch !== 'N' &&
                    <tr><td><b>Batch</b></td><td>{data.batch}</td></tr>}
                    {data.degree !== 'N' &&
                    <tr><td><b>Degree</b></td><td>{data.degree}</td></tr>}
                    {data.jobtype !== 'N' &&
                    <tr><td><b>Job Type</b></td><td>{data.jobtype}</td></tr>}
                    {data.salary !== 'N' &&
                    <tr><td><b>Salary</b></td><td>{data.salary}</td></tr>}   
                    {data.location !== 'N' &&
                    <tr><td><b>Location</b></td><td>{data.location}</td></tr>}                 
                </table>
            </div>
            <div className="viewMobile">
                <Bannerda/>
            </div>
            {data.jobdesc !== '<p>N</p>' && 
            <div className={styles.detail_con}>              
                <h2 className={styles.jd_subheading}>Job Description</h2>
                <p>{parse(data.jobdesc)}</p>
            </div> }
            
            <div className={styles.detail_con}>
                {data.eligibility !== '<p>N</p>' && <div>
                    <h2 className={styles.jd_subheading}>Eligibility</h2>
                    <p>{parse(data.eligibility)}</p>
                </div> }
    
                {data.skills !== '<p>N</p>' && <div>
                    <h2 className={styles.jd_subheading}>Prefered Skills</h2>
                    <p>{parse(data.skills)}</p>
                </div> }

                {data.responsibility !== '<p>N</p>' && <div>
                    <h2 className={styles.jd_subheading}>Responsibility </h2>
                    <p>{parse(data.responsibility)}</p>
                </div> }
            </div>
            <div className="viewMobile">
                <Bannerda/>
            </div> 

            {data.aboutCompany !== "<p>N</p>" && 
            <div className={styles.detail_con}>
                <h2 className={styles.jd_subheading}>About Company</h2>
                <p>{parse(data.aboutCompany)}</p>
            </div> 
            }
            <br />

            {data.lastdate !== 'N' && <span className={styles.lastdate}>
                <b>Last date to Apply : {data.lastdate}</b></span>
            }
            <a href={data.link}>
                <button onClick={() => countClickinJd(data._id)} className = {styles.jd_apply_btn}>Apply Now
                </button>
            </a> 
            <div className={styles.apply_mobile_btn}>
                Apply Now : 
                <a href={data.link}> Link</a> 
            </div>
            
            <div className='mobile-view'>
                <Telegrambanner/>
            </div>
            
            
            
            {navigator.share && 
                <button onClick={sharejob} className = {styles.jd_share_btn}>
                    Share this Job <FontAwesomeIcon icon={faShareSquare} />
                </button>
            }
            <button onClick={setCopied} className = {styles.jd_copy_btn}>
                {isCopied ? "👍" : <span>Copy the Link <FontAwesomeIcon icon={faCopy}/></span> }
            </button>
                                   
            </div>
            }

        </div>   
            <div className={styles.jd_sidebar}>
                <LinkDa/>
                <Bannerda/>
                <br />
                <Email/>
            </div>
            
            {/* Back home button for bottom part */}
            <Link to = {`/`}>
                <div className={styles.backhome_btn}>  
                    <p><FontAwesomeIcon icon={faAngleLeft}/> Home</p>
                </div>
            </Link>
        </div>
        <Feedback/>
        <Footer/>
        </div>
    )
}

export default JobDesc;