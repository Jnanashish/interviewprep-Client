import React,{useState} from 'react'
import EditData from './EditData'

const Update = (props) => {
    // flag to decide wheather update btn is clicked or not
    const [flag, setFlag] = useState(false)
    return (
        <div>
            <button onClick={() => setFlag(!flag)}  className = "update">Update</button>
            {flag === true && <EditData data={props.item}/>}            
        </div>
    )
}


export default Update;