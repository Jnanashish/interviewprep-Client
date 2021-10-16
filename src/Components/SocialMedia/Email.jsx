import {useState} from "react"
import {v4} from "uuid";
import validator from 'validator'

// import firebase config
import { getDatabase, ref, set } from "firebase/database";

//import css
import "../../CSS/email.css"


const Email = () => {
    const [email, setEmail] = useState("");
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
              })
          } catch (error) { console.log(error);}   
        
          setFlag(false);
      }
    }

    return (
    <div className="main">
    <div className="email">
      <h1>Comming Soon...</h1>
      <p>Hello👋, We are currently working on a guided Roadmap for Interview Preparation. Sign up to join our exclusive email list and be the first one to know when it’s released!</p>
      <p className="error-msg">{emailError}</p>
      {(flag === true) && <div className="form">
        <input 
          type="email" 
          placeholder="yourname@gmail.com" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)}
        />

        <button 
          type="submit" 
          onClick={addemail}>Get Updates
        </button>
      </div>
      }
      {(flag === false) && <h3 className="thank">Thank You ❤️</h3>} 
    </div>
    </div>
    )
}

export default Email;
