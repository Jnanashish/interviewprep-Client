import React,{useState} from 'react'
import EditData from '../Editdata/Editdata'

import styles from "./joblinks.module.scss"

const Update = (props) => {
    // flag to decide wheather update btn is clicked or not
    const [flag, setFlag] = useState(false)
    return (
        <div>
            <button onClick={() => setFlag(!flag)} className = {styles.adminlinkcard_btn}>Update</button>
            {flag === true && <EditData data={props.item}/>}            
        </div>
    )
}


export default Update;