/* eslint-disable no-useless-concat */
import {useState} from "react";

// import css
import styles from "./adddata.module.scss"

// import react toast
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// import ck editior
import { CKEditor } from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import { config } from "../../../Config/editorConfig"

import {API} from "../../../Backend"

const AddData = () =>{
    ClassicEditor.defaultConfig = config
    const BOT_API_KEY = process.env.REACT_APP_BOT_API_KEY
    const MY_CHANNEL_NAME = process.env.REACT_APP_MY_CHANNEL_NAME

    // state to store all the links data
    const [title, setTitle] = useState('');
    const [role, setRole] = useState('N');
    const [batch, setBatch] = useState('2022');
    const [jobtype, setJobtype] = useState('Intern');
    const [degree, setDegree] = useState('B.E / B.Tech / M.Tech');
    const [salary, setSalary] = useState('Not disclosed');
    const [link, setLink] = useState('');
    const [jobdesc, setJobdesc] = useState('N');
    const [eligibility, setEligibility] = useState('N');
    const [experience, setExperience] = useState('N');
    const [lastdate, setLastdate] = useState('23/10/2021');
    const [skills, setSkills] = useState('N');
    const [responsibility, setResponsibility] = useState('N');
    const [aboutCompany, setAboutCompany] = useState('N');
    const [location, setLocation] = useState('N');
    const [jdpage, setJdpage] = useState('false');
    const [companytype, setCompanytype] = useState('product / service');
    
    const formData = new FormData();    
    const formDataTelegram = new FormData();    
    const handleimginp = (e) =>{
        const file = e.target.files ;
        formData.append('photo', file[0]);
    }
    const handletelegramimg = (e) =>{
        const file = e.target.files ;
        formDataTelegram.append("photo", file[0])
    }
    const addData = async (e) =>{
        e.preventDefault();

        formData.append("title", title)
        formData.append("link", link)
        formData.append("batch", batch)
        formData.append("role", role)
        formData.append("jobtype", jobtype)
        formData.append("degree", degree)
        formData.append("salary", salary)
        formData.append("jobdesc", jobdesc)
        formData.append("eligibility", eligibility)
        formData.append("experience", experience)
        formData.append("lastdate", lastdate)
        formData.append("skills", skills)
        formData.append("responsibility", responsibility)
        formData.append("aboutCompany", aboutCompany)
        formData.append("location", location)
        formData.append("jdpage", jdpage)
        formData.append("companytype", companytype)

        const res = await fetch(`${API}/jd/add`,{
            method : "POST",
            body : formData
        })

        if(res.status === 201){
            toast('Job Data Added Successfully')
        } else {
            toast.error("An error Occured")
        }
    }

    function translate (char){
        let diff;
        if (/[A-Z]/.test (char)){
            diff = "𝗔".codePointAt (0) - "A".codePointAt (0);
        }
        else{
            diff = "𝗮".codePointAt (0) - "a".codePointAt (0);
        }
        return String.fromCodePoint (char.codePointAt (0) + diff);
    }

    const btitle = title.replace (/[A-Za-z]/g, translate);
    const msg = btitle + "%0A%0A" + "Batch" + "%20%3A%20" + batch + "%0A" + "Degree" + "%20%3A%20" + degree + "%0A" + "Apply Link" + "%20%3A%20" + link;
     
    
    const sendtelegrammsg = () =>{
        return fetch(`https://api.telegram.org/bot${BOT_API_KEY}/sendPhoto?chat_id=${MY_CHANNEL_NAME}&caption=${msg}&disable_web_page_preview=true&disable_notification=true`,{  
            method : "POST", 
            body : formDataTelegram
        })
        .then(res => {
            console.log(res);
            toast('Message sent')
        })
        .catch(err => {
            console.log(err)
            toast.error("An error Occured")
        });
    }

    return(
        <div className={styles.admin_con}>
        <h2 className={styles.adminpanel_title}>Add New Job </h2>

        <form method = "POST" >
        <div className = {styles.admin_grid}>
            <h3 className = {styles.admin_label}>Title of the Job : </h3>
            <input className = {styles.admin_input} value = {title} 
                onChange = {(e) => setTitle(e.target.value)}
                type="text" placeholder = "Title of the job"/>
        </div>

        <div className={styles.admin_grid}>
            <h3 className = {styles.admin_label}>Link to register : </h3>
            <input className = {styles.admin_input} value = {link} 
                onChange = {(e) => setLink(e.target.value)}
                type="text" placeholder = "Link"/>
        </div>

        <div className={styles.admin_grid}>
            <h3 className={styles.admin_label}>Degree : </h3>
            <input className={styles.admin_input} value = {degree} 
                onChange = {(e) => setDegree(e.target.value)}
                type="text" />
        </div>

        <div className={styles.admin_grid}>
            <h3 className={styles.admin_label}>Batch : </h3>
            <input className={styles.admin_input} value = {batch} 
                onChange = {(e) => setBatch(e.target.value)}
                type="text" />
        </div>

        <div className={styles.admin_grid}>
            <h3 className={styles.admin_label}>Job Type : </h3>
            <input className={styles.admin_input} value = {jobtype} 
                onChange = {(e) => setJobtype(e.target.value)}
                type="text" />
        </div>

        <div className={styles.admin_grid}>
            <h3 className={styles.admin_label}>Show jdpage : </h3>
            <input className={styles.admin_input} value = {jdpage} 
                onChange = {(e) => setJdpage(e.target.value)}
                placeholder = "true / false"
                type="text" />
        </div>

        {jdpage === "true" && 
        <div>
        <br />
        <div className={styles.admin_grid}>
            <h3 className={styles.admin_label}>Companytype : </h3>
            <input className={styles.admin_input} value = {companytype} 
                onChange = {(e) => setCompanytype(e.target.value)}
                type="text" />
        </div>

        <div className={styles.admin_grid}>
            <h3 className={styles.admin_label}>Role for the job : </h3>
            <input className={styles.admin_input} value = {role} 
                onChange = {(e) => setRole(e.target.value)}
                type="text" />
        </div>

        <div className={styles.admin_grid}>
            <h3 className={styles.admin_label}>Salary : </h3>
            <input className={styles.admin_input} value = {salary} 
                onChange = {(e) => setSalary(e.target.value)}
                type="text" />
        </div>  

        <div className={styles.admin_grid}>
            <h3 className={styles.admin_label}>Last application date : </h3>
            <input className={styles.admin_input} value = {lastdate} 
                onChange = {(e) => setLastdate(e.target.value)}
                type="text" />
        </div>

        <div className={styles.admin_grid}>
            <h3 className={styles.admin_label}>Experience needed : </h3>
            <input className={styles.admin_input} value = {experience} 
                onChange = {(e) => setExperience(e.target.value)}
                type="text" />
        </div>

        <div className={styles.admin_grid}>
            <h3 className={styles.admin_label}>Location : </h3>
            <input className={styles.admin_input} value = {location} 
                onChange = {(e) => setLocation(e.target.value)}
                type="text" /> 
        </div>
        <br />
        <div className={styles.ck_grid}>
            <h3 className={styles.admin_label}>Description of job : </h3>
            <CKEditor
                className={styles.ck_input}
                editor={ClassicEditor}
                value = {jobdesc}
                onChange={(event, editor) => {
                    const data = editor.getData()
                    setJobdesc(data)
                }}
            />
        </div>
        <div className={styles.ck_grid}>
            <h3 className={styles.admin_label}>Eligibility Criteria : </h3>
            <CKEditor
                className="ck-input"
                editor={ClassicEditor}
                value = {eligibility}
                onChange={(event, editor) => {
                    const data = editor.getData()
                    setEligibility(data)
                }}
            />
        </div>
        <div className={styles.ck_grid}>
            <h3 className={styles.admin_label}>Responsibility of the job : </h3>
            <CKEditor
                className="ck-input"
                editor={ClassicEditor}
                value = {responsibility}
                onChange={(event, editor) => {
                    const data = editor.getData()
                    setResponsibility(data)
                }}
            />
        </div>
        <div className={styles.ck_grid}>
            <h3 className={styles.admin_label}>Skills needed : </h3>
            <CKEditor
                className="ck-input"
                editor={ClassicEditor}
                value = {skills}
                onChange={(event, editor) => {
                    const data = editor.getData()
                    setSkills(data)
                }}
            />
        </div>
        <div className={styles.ck_grid}>
            <h3 className={styles.admin_label}>About the company : </h3>
            <CKEditor
                className="ck-input"
                editor={ClassicEditor}
                value = {aboutCompany}
                onChange={(event, editor) => {
                    const data = editor.getData()
                    setAboutCompany(data)
                }}
            />
        </div> 
        </div>}  
        <div className={styles.admin_grid}>
            <h3 className={styles.admin_label}>Company logo : </h3>
            <div>
                <input 
                    onChange = {handleimginp} 
                    name="image" 
                    type="file"                   
                />              
                <button 
                    className = {styles.addlink_data} 
                    type= "button" 
                    onClick = {addData}>
                    Submit
                </button>
            </div>
        </div>
        <div className={styles.admin_grid}>   
            <h3 className={styles.admin_label}>Telegram Banner : </h3> 
            <div>
                <input 
                    onChange = {handletelegramimg} 
                    name="image" 
                    type="file"                   
                />
                <button 
                    style={{"backgroundColor" : "#229ED9"}}
                    className = {styles.addlink_data} 
                    type= "button" 
                    onClick = {sendtelegrammsg}>
                    Send to Telegram
                </button>
            </div>            
        </div>
        <ToastContainer />
        </form>
       </div> 
    )
}

export default AddData;