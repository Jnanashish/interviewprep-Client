import {useState, useEffect} from "react";

// import css
import "../CSS/footer.css"

const Footer = () =>{
    const [count, setCount] = useState('')
    useEffect(()=>{ pageview();},[]) 

    const pageview = () =>{
        // page view 1 for production
        fetch('https://api.countapi.xyz/update/interviewprep/ca0e20b7-5690-4571-a2b0-b45d4c26ec3d/?amount=1')
        .then(res => res.json())
        .then((data) => {
            setCount(data.value)
        })
    }

    return(
        <div className="footer">
            <h3>Total Page view 👁️ {count}</h3>
            <h3>Made with ❤️ in India by @jsh</h3>
        </div>
    )
}

export default Footer;

