import React from 'react'

// import css
// import styles from "./sidebar.module.scss"

// import component
// import Bannerda from "../../Components/BannerDa/Bannerda"
import Igbanner from '../IGbanner/Igbanner'
import LinkdaDesktop from '../Linkda_desktop/LinkdaDesktop'


function Sidebar() {
  	return (
      <div>  
        <Igbanner/>
        <LinkdaDesktop/>
        {/* <div className={styles.adcon}><Bannerda/></div>  */}
        <br />
      </div>
  	)
}

export default Sidebar