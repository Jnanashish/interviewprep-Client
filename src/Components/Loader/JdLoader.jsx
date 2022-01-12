import React from "react"
import ContentLoader from "react-content-loader"


import "../../CSS/linkUi.css"



const JdLoader = (props) => (
  <div>
  <div className="loader-laptop">
  <ContentLoader 
    className="loader"
    speed={2}
    width={400}
    height={1400}
    backgroundColor="#eee"
    foregroundColor="#c0c0c0"
    {...props}
  >
    <rect x="0" y="0" rx="0" ry="30" width="800" height="35" /> 
    <rect x="0" y="45" rx="0" ry="30" width="200" height="35" /> 
    <rect x="0" y="110" rx="0" ry="30" width="250" height="20" /> 
    <rect x="0" y="140" rx="0" ry="30" width="260" height="20" /> 
    <rect x="0" y="170" rx="0" ry="30" width="240" height="20" /> 
    <rect x="0" y="200" rx="0" ry="30" width="250" height="20" /> 
    <rect x="0" y="230" rx="0" ry="30" width="270" height="20" /> 

    <rect x="0" y="330" rx="0" ry="30" width="300" height="50" /> 
    <rect x="0" y="400" rx="0" ry="30" width="1000" height="300" /> 

    <rect x="0" y="800" rx="0" ry="30" width="800" height="50" /> 
    <rect x="0" y="870" rx="0" ry="30" width="800" height="400" /> 
  </ContentLoader>
  </div>
    <div className="loader-mobile">
  <ContentLoader 
    className="loader"
    speed={2}
    width={3000}
    height={1000}
    viewBox="0 0 3000 4000"
    backgroundColor="#eee"
    foregroundColor="#c0c0c0"
    {...props}
  >
    <rect x="0" y="0" rx="3" ry="30" width="3500" height="180" /> 
    <rect x="0" y="210" rx="3" ry="30" width="2000" height="180" /> 
    <rect x="0" y="640" rx="3" ry="30" width="1200" height="120" /> 
    <rect x="0" y="790" rx="3" ry="30" width="1500" height="120" /> 
    <rect x="0" y="940" rx="3" ry="30" width="1300" height="120" /> 
    <rect x="0" y="1090" rx="3" ry="30" width="1400" height="120" /> 
    <rect x="0" y="1310" rx="3" ry="30" width="3000" height="1000" /> 
  </ContentLoader>
  </div>
  </div>

)

export default JdLoader 