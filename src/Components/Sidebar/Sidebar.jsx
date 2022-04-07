import React from 'react'

// import css
import styles from "./sidebar.module.scss"

// import component
import Linkda from "../LinkDa/Linkda"
import Bannerda from "../../Components/BannerDa/Bannerda"
import Email from '../Emailmini/Email'


function Sidebar() {
  	return (
      <div>  
        <h1 className={styles.sidebar_header}>Important Links 🔥</h1>
        <div className={styles.linkda_con}><Linkda/></div> 
        <div className={styles.adcon}><Bannerda/></div> 
        <br />
        <Email/>
      </div>
  	)
}

export default Sidebar