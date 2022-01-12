import React from 'react'
import Ads from './GetAdBanner';

import { Link} from "react-router-dom";
import { useParams } from 'react-router';
//import css
import "../../CSS/adpop.css"

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
            <div className="ad-pop"><Ads/></div>  
            {show === true && <div className="adcancel"> 
                 <p>Ad</p>
                 <Link to = {`/jd/${props.id}`}>❌</Link>
            </div>}
            {show === false && <div className="adcancel adwait">
                <p>Loading ......</p>
            </div>}
        </div>
    )
}

export default Adpop;