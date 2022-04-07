import React from 'react'
import Bannerda from "../BannerDa/Bannerda"

import { Link} from "react-router-dom";
import { useParams } from 'react-router';


//import css
import styles from "./bannerpop.module.scss"

const Adpop = () => {

  const [show, setShow] = React.useState(false)

    React.useEffect(() => {
      const timeout = setTimeout(() => {
        setShow(true)
      }, 5000)

      return () => clearTimeout(timeout)

    }, [show])

    const props = useParams()
    return (
        <div>
            <div className={styles.ad_pop}><Bannerda/></div>  
        </div>
    )
}

export default Adpop;