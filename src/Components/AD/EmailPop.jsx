import React,{useState} from 'react'
import {v4} from "uuid";
import validator from 'validator'
import { getDatabase, ref, set } from "firebase/database";

// react Router staff
import { Link} from "react-router-dom";
import { useParams } from 'react-router';

// import css
import "../../CSS/email-mid.css"


const EmailAd = () => {
    const props = useParams()
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [year, setYear] = useState("");
    const [branch, setBranch] = useState("");
    const [college, setCollege] = useState("");
    const [emailError, setEmailError] = useState(''); 
    const [flag, setFlag] = useState(true);     

    const addemail = (e) =>{
      e.preventDefault();
      const db = getDatabase();
      if (!validator.isEmail(email)) {setEmailError('* Enter valid Email!')}
      else{
          try { 
              set(ref(db, 'newemaillist/' + v4()), {
                  email : email,
                  name : name,
                  year: year,
                  college : college,
                  branch : branch,
              })
          } catch (error) { console.log(error);}   
          setFlag(false);
      }
    }

    const [showyear, setShowYear] = useState(false);
    const [showdegree, setShowdegree] = useState(false);
    return (
        <div className="email-con" id="email-con">
        <div>
            <Link to = {`/jd/${props.id}`}>
            	<button className="ignore email-btn">If already filled ignore this | Skip ▶️▶️▶️</button>
            </Link>
        </div>

        <p>Get new job updates by email 😇</p>
        {(flag === true) && <div>
        <div className="email-dropdown">
            <div onClick={()=>setShowYear(!showyear)} 
              	className="email-input email-dropbtn" variant="success" id="dropdown-basic">
              	{year === "" ? <text>Which year you are in college ? (or Passout) <text className="dropdown-icon">&#9660;</text> </text> : year}
            </div>
            {showyear === true && 
            <div className="dropdown-content" onClick={()=>setShowYear(!showyear)}>
               	<span onClick={()=>setYear("1st year")} >1st year</span>
               	<span onClick={()=>setYear("2nd year")} >2nd year</span>
               	<span onClick={()=>setYear("3rd year")} >3rd year</span>
               	<span onClick={()=>setYear("4th year")} >4th year</span>
               	<span onClick={()=>setYear("Passout")} >Passout</span>
            </div>}
        </div> 

        <div className="email-dropdown">
            <div 
				onClick={()=>setShowdegree(!showdegree)} 
				className="email-input email-dropbtn" id="dropdown-basic"
				variant="success">
            	{branch === "" ? <text>What is your educational qualification ? <text className="dropdown-icon">&#9660;</text> </text>  : branch}
            </div>
            {showdegree === true && 
            <div className="dropdown-content" onClick={()=>setShowdegree(!showdegree)}>
               	<span onClick={()=>setBranch("B.E / B.Tech")} >B.E / B.Tech</span>
               	<span onClick={()=>setBranch("M.E / M.Tech")} >M.E / M.Tech</span>
               	<span onClick={()=>setBranch("BCA / MCA")} >BCA / MCA</span>
               	<span onClick={()=>setBranch("BBA / MBA")} >BBA / MBA</span>
               	<span onClick={()=>setBranch("BSc")} >BSc</span>
               	<span onClick={()=>setBranch("others")} >Others</span>
            </div>}
        </div> 

        <input 
          	className = "email-input"
          	type="text" 
          	placeholder="College / University Name (Optional) " 
          	value={college} 
          	onChange={(e) => setCollege(e.target.value)}
        />
        <input 
          	className = "email-input"
          	type="text" 
          	placeholder="Enter your name" 
          	value={name} 
          	onChange={(e) => setName(e.target.value)}
        />
        <text className="error-msg">{emailError}</text>
        <input 
          	className = "email-input"
          	type="email" 
          	placeholder="Enter your email address" 
          	value={email} 
          	onChange={(e) => setEmail(e.target.value)}
        />
        <button
          	className = "email-btn"
          	type="submit" 
          	onClick={addemail}
          	>Get Updates</button>
        </div>
        }
        {(flag === false) && <div>
            <h3 className="thank">Thank You ❤️</h3>
            <Link to = {`/jd/${props.id}`}> 
            <button
              	className = "email-btn"
              	type="submit" 
              	>View Job</button>
            </Link>        
        </div> }         
        <h6 className="point">* We don't use any cookie so this may appear again & again, once filled ignore 🙄</h6>
        <h6 className="point">* We are working on the platform so it may take time till you start receiving any mail</h6>
        <h6 className="point"><b>* No spam emails, we hate them too.</b></h6>
      </div>
    )
}

export default EmailAd;
