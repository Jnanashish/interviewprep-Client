/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react'

// import css
import "../../CSS/jobDesc.css"
import parse from "html-react-parser";
import { useParams } from 'react-router';

// react router
import { Link} from "react-router-dom";

import useClipboard from "react-use-clipboard";

// import components
import Email from "../SocialMedia/Email"
import Ads from "../AD/GetAdBanner"
import TelegramJob from '../SocialMedia/TelegramJob';
import JdLoader from '../Loader/JdLoader';
import Feedback from "../UiComponent/Feedback"
import Footer from '../UiComponent/Footer';


// imprt image
import lefticon from "../../Image/left.png";

import { getAlljdData, countClickinJd } from './Helper/jdapicall';

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
    const [isCopied, setCopied] = useClipboard(data.link);

    return (
        <div>
        {/* Back home button  */}
        <Link to = {`/`}>
            <div className="back-home-btn"> 
                <img className="icon" src={lefticon} alt="lefticon" /> 
                <p> Home</p>
            </div>
        </Link>

        <div className="job-desc">
            <div className = "jd-container">
                {data.length === 0 && <JdLoader/> }
                {data.length !== 0 && <div>
                <h1 className = "jd-title">{data.title}</h1>
                <div className = "jd-details">
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

                <div className="jd-mobile">
                    <Ads/>
                </div>
                <div className='detail-con'>
                {data.jobdesc !== '<p>N</p>' && <div>
                    <h2 className="jd-subheading">Job Description 🎓</h2>
                    <p>{parse(data.jobdesc)}</p>
                </div> }
                {data.eligibility !== '<p>N</p>' && <div>
                    <h2 className="jd-subheading">Eligibility ✋</h2>
                    
                    <p>{parse(data.eligibility)}</p>
                </div> }
                {data.skills !== '<p>N</p>' && <div>
                    <h2 className="jd-subheading">Prefered Skills</h2>
                    <p>{parse(data.skills)}</p>
                </div> }


                {data.responsibility !== '<p>N</p>' && <div>
                    <h2 className="jd-subheading">Responsibility </h2>
                    <p>{parse(data.responsibility)}</p>
                </div> }
                </div>
                <div className="jd-mobile">
                    <Ads/>
                </div> 
                {data.aboutCompany !== "<p>N</p>" && 
                <div className='detail-con'>
                    <h2 className="jd-subheading">About Company</h2>
                    <p>{parse(data.aboutCompany)}</p>
                </div> 
                }

                <br />
                {data.lastdate !== 'N' && <span className="lastdate"><b>Last date to Apply : {data.lastdate}</b></span>}
                <a href={data.link}>
                    <button onClick={() => countClickinJd(data._id)} className = "jd-apply-btn">Apply Now
                    </button>
                </a> 
                {navigator.share && 
                    <button onClick={sharejob} className = "jd-share-btn">Share this Job 🪁</button>
                }
                {!navigator.share && 
                    <button onClick={setCopied} className = "jd-copy-btn">{isCopied ? "👍" : "Copy the Link 💾"}
                    </button>
                }                       

                </div>
                }
                <div className="m-view"><TelegramJob/></div>
            </div>
            
            <div className="jd-sidebar">
                <Ads/>
                <br />
                <br />
                <Email/>
            </div>
            
            {/* Back home button for bottom part */}
            <Link to = {`/`}>
                <div className="back-home-btn"> 
                    <img className="icon" src={lefticon} alt="lefticon" /> 
                    <p> Home</p>
                </div>
            </Link>

        </div>
        <Feedback/>
        <Footer/>
        </div>
    )
}

export default JobDesc;