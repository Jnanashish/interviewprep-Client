/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react'

import styles from "./jobdesc.module.scss"

import parse from "html-react-parser";
import { useParams } from 'react-router';

// copy text to device
import useClipboard from "react-use-clipboard";

// import icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShareSquare, faCopy } from '@fortawesome/free-solid-svg-icons'

// import components
import Email from "../Emailmini/Email"
import Bannerda from "../BannerDa/Bannerda"
import JdLoader from '../Loader/JdLoader';
// import Feedback from "../UiComponent/Feedback/Feedback"
import Footer from '../UiComponent/Footer/Footer';
import Header from "../UiComponent/Header/Header";
import LinkdaDesktop from "../Linkda_desktop/LinkdaDesktop";

import { getAlljdData, countClickinJd } from "../../Helper/Jdapicall"


const JobDesc = () => {
    const props = useParams()
    const [data, setData] = useState([]);

    const loadAlljdData = () => {
        getAlljdData(props.id).then(result => {
            setData(result)
        })
    }
    useEffect(() => { loadAlljdData()}, [])

    const sharejob = () =>{
        if (navigator.share) {
            navigator.share({
                title: `${data.title} | ${data.title}`,
                text: `Check out this job : ${data.title}`,
                url: document.location.href,
            }).then(() => {
                console.log('Successfully shared');
            }).catch(error => {
                console.error('Something went wrong sharing the blog', error);
            });
        }
    }
    
    const [isCopied, setCopied] = useClipboard(data.link);

    return (
        <div>
        <Header/>
        <div className={styles.jobddesc_con}>
            <div className = {styles.jd_con}>
                {data.length === 0 && <JdLoader/>}
                {data.length !== 0 && <div>

                {/* Title of the job */}
                <h1 className = {styles.jd_title}>
                    {data.title}
                </h1>
                
                {/* Job details table */}
                <div className = {styles.jd_details}>
                    <table>
                        <tr>
                            <th>Particulars</th>
                            <th>Details</th>
                        </tr>
                        {data.role !== 'N' && <tr><td><b>Role</b></td><td>{data.role}</td></tr>}
                        {data.batch !== 'N' && <tr><td><b>Batch</b></td><td>{data.batch}</td></tr>}
                        {data.degree !== 'N' && <tr><td><b>Degree</b></td><td>{data.degree}</td></tr>}
                        {data.jobtype !== 'N' && <tr><td><b>Job Type</b></td><td>{data.jobtype}</td></tr>}
                        {data.salary !== 'N' && <tr><td><b>Salary</b></td><td>{data.salary}</td></tr>}   
                        {data.location !== 'N' && <tr><td><b>Location</b></td><td>{data.location}</td></tr>}                 
                    </table>
                </div>
                
                <div className="viewMobile">
                    <Bannerda/>
                </div>
                
                {/* Job Description  */}
                {data.jobdesc !== '<p>N</p>' && 
                <div className={styles.detail_con}>              
                    <h2 className={styles.jd_subheading}>Job Description</h2>
                    <p>{parse(data.jobdesc)}</p>
                </div> }
                
                {/* Eligibilty criteria , Skills, Responsibility */}
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
                
                {/* About the company  */}
                {data.aboutCompany !== "<p>N</p>" && 
                <div className={styles.detail_con}>
                    <h2 className={styles.jd_subheading}>About Company</h2>
                    <p>{parse(data.aboutCompany)}</p>
                </div> }
                
                {/* Last date to apply  */}
                {data.lastdate !== 'N' && <span className={styles.lastdate}>
                    <h5>Last date to Apply : {data.lastdate}</h5></span>
                }
                
                {/* Apply button for desktop */}
                <div className={styles.apply_con}>
                    <h2 className={styles.jd_subheading}> How to apply ? </h2>
                    <p>For more information and to apply for this job opportunity, 
                        <b><a href={data.link}> click here</a></b>
                    </p>
                </div>
                
            
                {/* Apply button for mobile */}
                <div className={styles.apply_mobile_btn}>
                    Apply Now : 
                    <a onClick={() => countClickinJd(data._id)} href={data.link}> Link</a> 
                </div>
                
                {/* Share button  */}
                {navigator.share && 
                    <button onClick={sharejob} className = {styles.jd_share_btn}>
                        Share this Job <FontAwesomeIcon icon={faShareSquare} />
                    </button>
                }
                
                {/* Copy the apply link of the job  */}
                <button onClick={setCopied} className = {styles.jd_copy_btn}>
                    {isCopied ? "Copied" : <span>Copy the Link <FontAwesomeIcon icon={faCopy}/></span> }
                </button>                      
                </div>}
            </div>   

            {/* Sidebar for desktop  */}
            <div className={styles.jd_sidebar}>
                <LinkdaDesktop/>
                <Bannerda/>
                <Email/>
            </div>
        
        </div>
        <Footer/>
        </div>
    )
}

export default JobDesc;