import React from 'react'

import styles from "./notice.module.scss"

function Notice() {
  return (
    <div className={styles.notice_con}>
        <h1 className={styles.notice_title}>Notice</h1>
        <p>All Company names , logos and trademarks are the Intellectual Property of the respective owners. All company, product and service names used in this website are for identification purposes only. Use of these names,trademarks and brands does not imply endorsement. 
        We do not charge any money or commision fees from students, we are just an information provider for job openings.</p>
    </div>
  )
}

export default Notice