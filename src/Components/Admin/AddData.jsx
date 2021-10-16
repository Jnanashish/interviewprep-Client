import {useState} from "react";

// css
import "../../CSS/addData.css"

const AddData = () =>{
    // state to store all the links data
    const [role, setRole] = useState('');
    const [batch, setBatch] = useState('2022');
    const [position, setPosition] = useState('Software engineer');
    const [jobtype, setJobtype] = useState('Intern');
    const [degree, setDegree] = useState('B.E/ B.Tech/ M.Tech');
    const [salary, setSalary] = useState('Not disclosed');
    const [link, setLink] = useState('');
    const [jobdesc, setJobdesc] = useState('N');
    const [eligibility, setEligibility] = useState('N');
    const [experience, setExperience] = useState('N');
    const [lastdate, setLastdate] = useState('23/10/2021');
    const [skills, setSkills] = useState('N');
    const [responsibility, setResponsibility] = useState('N');

    const formData = new FormData();    
    const handleimginp = (e) =>{
        const file = e.target.files ;
        formData.append('photo', file[0]);
    }

    const addData = async (e) =>{
        console.log("In add data");
        e.preventDefault();

        formData.append("role", role)
        formData.append("batch", batch)
        formData.append("position", position)
        formData.append("jobtype", jobtype)
        formData.append("degree", degree)
        formData.append("salary", salary)
        formData.append("link", link)
        formData.append("jobdesc", jobdesc)
        formData.append("eligibility", eligibility)
        formData.append("experience", experience)
        formData.append("lastdate", lastdate)
        formData.append("skills", skills)
        formData.append("responsibility", responsibility)

        const res = await fetch("https://interviewprep-api.herokuapp.com/add",{
            method : "POST",
            body : formData
        })

        if(res.status === 201){
            // reload the page after successfully added
            window.location.reload(false);
        } else {
            window.alert("Data cannot added");
        }
    }

    return(
        <div className="admin">
        <form method = "POST" className = "flex" >
            <input 
                value = {role} 
                onChange = {(e) => setRole(e.target.value)}
                type="text" 
                placeholder = "Title of the job"/>
            <input 
                value = {link} 
                onChange = {(e) => setLink(e.target.value)}
                type="text" 
                placeholder = "Link"/>
            <input 
                value = {batch} 
                onChange = {(e) => setBatch(e.target.value)}
                type="text" />
            <input 
                value = {position} 
                onChange = {(e) => setPosition(e.target.value)}
                type="text" />
            <h4 className = "label">Job Type</h4>  
            <input 
                value = {jobtype} 
                onChange = {(e) => setJobtype(e.target.value)}
                type="text" />
            <input 
                value = {degree} 
                onChange = {(e) => setDegree(e.target.value)}
                type="text" />
            <h4 className = "label">Salary</h4>  
            <input 
                value = {salary} 
                onChange = {(e) => setSalary(e.target.value)}
                type="text" />
            <h4 className = "label">Last application date</h4>  
            <input 
                value = {lastdate} 
                onChange = {(e) => setLastdate(e.target.value)}
                type="text" />
            <h4 className = "label">Experience needed</h4>  
            <input 
                value = {experience} 
                onChange = {(e) => setExperience(e.target.value)}
                type="text" 
                placeholder = "Salary"/> 
            <h4 className = "label">Description of job</h4>
            <textarea 
                className = "textarea"
                value = {jobdesc} 
                onChange = {(e) => setJobdesc(e.target.value)}
                rows="3" cols="30">
            </textarea>                    
            <h4 className = "label">Eligibility Criteria</h4>
            <textarea 
                className = "textarea"
                value = {eligibility} 
                onChange = {(e) => setEligibility(e.target.value)}
                rows="3" cols="30">
            </textarea>   
            <h4 className = "label">Responsibility of the job</h4>
            <textarea 
                className = "textarea"
                value = {responsibility} 
                onChange = {(e) => setResponsibility(e.target.value)}
                rows="3" cols="30">
            </textarea>  
            <h4 className = "label">Skills needed</h4>
            <textarea 
                className = "textarea"
                value = {skills} 
                onChange = {(e) => setSkills(e.target.value)}
                rows="3" cols="30">
            </textarea>  


            <input onChange = {handleimginp} name="image" type="file"/>              
            <button className = "add-data" 
                type= "button"
                onClick = {addData}
                >Submit</button>
        </form>
       </div> 
    )
}

export default AddData;