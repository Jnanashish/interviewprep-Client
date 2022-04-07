import React from 'react'

// import css
import styles from "./adminlinkcard.module.scss"

function LinkCard(props) {
    return ( 
        <div className = {styles.adminlinkcard_con}>
            <h2>{props.title}</h2>
            <br />
            <div className = {styles.adminlink_item}>
                <h5>Last date : </h5>
                <h5>{props.lastdate}</h5>
            </div>
            <div className = {styles.adminlink_item}>
                <h4>Total Click : </h4>
                <h4 className={styles.jd_date}>{props.totalclick}</h4>
            </div>
        </div>
        
    )
}

export default LinkCard;