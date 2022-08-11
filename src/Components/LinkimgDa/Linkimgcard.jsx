import React from 'react';

// import css 
import styles from "./linkimgcard.module.scss"

const Linkimgcard = (props) => {
    return (   
        <div>
        {props.para !== "" && <div className={styles.adlinkimg_con}>
            <div className = {styles.img_con}>
                <img src={props.imagePath} alt="Company logo" />
            </div>
                       
            <p className={styles.adlinkimg_title}>{props.title}</p>
            {props.para !== "" && 
                <p className={styles.adlinkimg_para}>{props.para}</p>
            }    
        </div> 
        }
        {props.para === "" && <div className={styles.adlinkimg_con_2}>          
            <p className={styles.adlinkimg_title_2}>{props.title}</p>   
        </div> 
        }
        </div>   
    ) 
}

export default Linkimgcard;