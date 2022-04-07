import {useState, useEffect} from "react";

// import css
import styles from "./footer.module.scss"

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
        <div className={styles.footer}>
            <h3 className={styles.footer_font}>Total Page view 👁️ {count}</h3>
            <h3 className={styles.footer_font}>Made with ❤️ in India by 
                <a target="_blank" rel="noopener noreferrer" 
                    href="https://bit.ly/jsh_linkedin_footer"> @JSH
                </a>
            </h3>
        </div>
    )
}

export default Footer;

