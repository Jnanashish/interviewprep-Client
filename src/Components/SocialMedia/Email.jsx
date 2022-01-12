import {useState} from "react"
import {v4} from "uuid";
import validator from 'validator'

// import firebase config
import { getDatabase, ref, set } from "firebase/database";

// import css
import "../../CSS/email.css"


const Email = (props) => {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [year, setYear] = useState("");
    const [emailError, setEmailError] = useState(''); 
    const [flag, setFlag] = useState(true);     

    const addemail = (e) =>{
      e.preventDefault();
      const db = getDatabase();
      if (!validator.isEmail(email)) {
        setEmailError('* Enter valid Email!')
      }
      else{
          try { 
              set(ref(db, 'email/' + v4()), {
                  email : email,
                  name : name,
                  year: year,
              })
          } catch (error) { console.log(error);}   
          setFlag(false);
      }
    }

    return (
    <div className="email">
      <p>Get new job updates by email 😇</p>
      <p className="error-msg">{emailError}</p>
      {(flag === true) && 
      <div className="form">
        <input 
          className = "email-input"
          type="text" 
          placeholder="Which year you are in college ? (or Passout)" 
          value={year} 
          onChange={(e) => setYear(e.target.value)}
        />
        <input 
          className = "email-input"
          type="text" 
          placeholder="Enter your name" 
          value={name} 
          onChange={(e) => setName(e.target.value)}
        />
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
          onClick={addemail}>Get Updates
        </button>
      </div>
      }
      {(flag === false) && <h3 className="thank">Thank You ❤️</h3>} 
    </div>
    )
}

export default Email;