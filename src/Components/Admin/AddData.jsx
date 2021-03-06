import {useState} from "react";

// import css
import "../../CSS/addData.css"

// import react toast
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// import ck editior
import { CKEditor } from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import { config } from "../../Config/editorConfig"

import {API} from "../../Backend"

const AddData = () =>{
    ClassicEditor.defaultConfig = config

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
    const handleimginp = (e) =>{
        const file = e.target.files ;
        formData.append('photo', file[0]);
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

    return(
        <div className="admin">
        <h2 className="adminpanel-title">Add New Job </h2>
        <form method = "POST" >
        <div className="admin-grid">
            <h3 className="admin-label">Title of the Job : </h3>
            <input className="admin-input" value = {title} 
                onChange = {(e) => setTitle(e.target.value)}
                type="text" placeholder = "Title of the job"/>
        </div>
        <div className="admin-grid">
            <h3 className="admin-label">Link to register : </h3>
            <input className="admin-input" value = {link} 
                onChange = {(e) => setLink(e.target.value)}
                type="text" placeholder = "Link"/>
        </div>
        <div className="admin-grid">
            <h3 className="admin-label">Degree : </h3>
            <input className="admin-input" value = {degree} 
                onChange = {(e) => setDegree(e.target.value)}
                type="text" />
        </div>
        <div className="admin-grid">
            <h3 className="admin-label">Batch : </h3>
            <input className="admin-input" value = {batch} 
                onChange = {(e) => setBatch(e.target.value)}
                type="text" />
        </div>
        <div className="admin-grid">
            <h3 className="admin-label">Job Type : </h3>
            <input className="admin-input" value = {jobtype} 
                onChange = {(e) => setJobtype(e.target.value)}
                type="text" />
        </div>
        <div className="admin-grid">
            <h3 className="admin-label">Show jdpage : </h3>
            <input className="admin-input" value = {jdpage} 
                onChange = {(e) => setJdpage(e.target.value)}
                placeholder = "true / false"
                type="text" />
        </div>
        {jdpage === "true" && 
        <div>
        <br />
        <div className="admin-grid">
            <h3 className="admin-label">Companytype : </h3>
            <input className="admin-input" value = {companytype} 
                onChange = {(e) => setCompanytype(e.target.value)}
                type="text" />
        </div>
        <div className="admin-grid">
            <h3 className="admin-label">Role for the job : </h3>
            <input className="admin-input" value = {role} 
                onChange = {(e) => setRole(e.target.value)}
                type="text" />
        </div>
        <div className="admin-grid">
            <h3 className="admin-label">Salary : </h3>
            <input className="admin-input" value = {salary} 
                onChange = {(e) => setSalary(e.target.value)}
                type="text" />
        </div>  
        <div className="admin-grid">
            <h3 className="admin-label">Last application date : </h3>
            <input className="admin-input" value = {lastdate} 
                onChange = {(e) => setLastdate(e.target.value)}
                type="text" />
        </div>
        <div className="admin-grid">
            <h3 className="admin-label">Experience needed : </h3>
            <input className="admin-input" value = {experience} 
                onChange = {(e) => setExperience(e.target.value)}
                type="text" />
        </div>
        <div className="admin-grid">
            <h3 className="admin-label">Location : </h3>
            <input className="admin-input" value = {location} 
                onChange = {(e) => setLocation(e.target.value)}
                type="text" /> 
        </div>
        <br />
        <div className="ck-grid">
            <h3 className="admin-label">Description of job : </h3>
            <CKEditor
                className="ck-input"
                editor={ClassicEditor}
                value = {jobdesc}
                onChange={(event, editor) => {
                    const data = editor.getData()
                    setJobdesc(data)
                }}
            />
        </div>
        <div className="ck-grid">
            <h3 className="admin-label">Eligibility Criteria : </h3>
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
        <div className="ck-grid">
            <h3 className="admin-label">Responsibility of the job : </h3>
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
        <div className="ck-grid">
            <h3 className="admin-label">Skills needed : </h3>
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
        <div className="ck-grid">
            <h3 className="admin-label">About the company : </h3>
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
        <div className="admin-grid">
            <h3 className="admin-label">Company logo : </h3>
            <div>
                <input onChange = {handleimginp} name="image" type="file"/>              
                <button className = "addlink-data" type= "button" 
                onClick = {addData}>Submit</button>
                <ToastContainer /> 
            </div>
        </div>
        </form>
       </div> 
    )
}

export default AddData;