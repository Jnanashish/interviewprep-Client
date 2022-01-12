import React from 'react'

function LinkCard(props) {
    return ( 
        <div className = "adminlink container">
            <h2>{props.title}</h2>
            <div className = "grid"><h5>Last date :</h5><p>{props.lastdate}</p></div>
            <div className = "grid"><h4>Total Click :</h4><h4 className="jd-date">{props.totalclick}</h4></div>
        </div>
        
    )
}

export default LinkCard;