import {useState} from "react"
import {v4} from "uuid";
import validator from 'validator'

// import firebase config
import { getDatabase, ref, set } from "firebase/database";

// import css
import styles from "./email.module.scss"


const Email = () => {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [year, setYear] = useState("");
    const [emailError, setEmailError] = useState(''); 
    const [flag, setFlag] = useState(true);     

    // add email to firebase
    const addemail = (e) =>{
        e.preventDefault();
        const db = getDatabase();
        // check email is formated or not
        if (!validator.isEmail(email)) {
            setEmailError('* Enter valid Email!')
        } else{
            try { 
                set(ref(db, 'email/' + v4()), {
                    email : email,
                    name : name,
                    year: year,
                })
            } 
            catch (error) { console.log(error);}   
            setFlag(false);
        }
    }

    return (
    <div className={styles.email_con}>
        <p>Get new jobs in your inbox </p>
        <p className={styles.error_msg}>
            {emailError}
        </p>
        {(flag === true) && 
        <div className="form">
            <input 
                className = {styles.email_input}
                type="text" 
                placeholder="Which year you are in college ? (or Passout)" 
                value={year} 
                onChange={(e) => setYear(e.target.value)}
            />
            <input 
                className = {styles.email_input}
                type="text" 
                placeholder="Enter your name" 
                value={name} 
                onChange={(e) => setName(e.target.value)}
            />
            <input 
                className = {styles.email_input}
                type="email" 
                placeholder="Enter your email address" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)}
            />
            <button 
                className = {styles.submit_btn}
                type="submit" 
                onClick={addemail}> Get Updates
            </button>
        </div>
        }
        {/* Successfully add data to firebase  */}
        {(flag === false) && <h3 className={styles.thank_msg}>Thank You ❤️</h3>} 
    </div>
    )
}

export default Email;