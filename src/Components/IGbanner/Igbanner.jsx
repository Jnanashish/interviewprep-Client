import React from 'react'

// import css
import styles from "./igbanner.module.scss"

function Igbanner() {
  return (
    <div className={styles.banner_con}>
        <img src="https://i.ibb.co/ZL8kX8r/ig2-min-1.png" alt="Instagram long logo" />
        <h4>Be a part of community with 70000+ students</h4>
        <a className={styles.join_btn} 
            href="https://www.instagram.com/interviewprep.tech/">Join Now
        </a>
    </div>
  )
}

export default Igbanner