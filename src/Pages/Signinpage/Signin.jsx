import React, { useState , useContext } from "react";

// router
import {Redirect} from "react-router-dom"

// context
import {UserContext} from "../../Context/userContext"
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

// firebase stuff
import { initializeApp } from "firebase/app"
import firebaseConfig from "../../Config/firebase_config";
initializeApp(firebaseConfig);


const Signin = () =>{
    const context = useContext(UserContext);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    
    const handleSignin = () =>{
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
        .then( res=>{
            context.setUser({email:res.user.email})
        }).catch(err => {
            alert(err.message);
        })
    }
    
    if (context.user?.email) {
      return <Redirect to="/admin" />;
    }

    return(
        <div>  
            <h1>Sign in for Admin</h1>
            <input 
                type = "email"
                value = {email}
                style={{ width: "90vw", maxWidth: "500px" }}
                onChange={(e) => setEmail(e.target.value)}                
            />
            <input 
                type = "password"
                value = {password}
                style={{ width: "90vw", maxWidth: "500px" }}
                onChange={(e) => setPassword(e.target.value)}                
            />
            <button onClick={handleSignin}>Sign in</button>
        </div>
    )
}

export default Signin;