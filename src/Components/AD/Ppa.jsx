import React from 'react'

import "../../CSS/ppa.css"

// import images
import ppalogo from "../../Image/ppa-logo.png"

const Ppa = () => {
    return (
        <a href="https://bit.ly/ip-ppa">
        <div className = "ppa">
            <img src={ppalogo} alt="programming pathshala logo" />
            <h3>Master Data Structure, Algorithms and System Design 🚀</h3>
            <h4>Become 100% Coding Interview Ready</h4>
            <ul>
                <li><h5>✅ Get trained by experienced Industry experts</h5></li>
                <li><h5>✅ 250+ hours of lectures | 600+ problems</h5></li>
                <li><h5>✅ Performance based referrals to top companies</h5></li>
            </ul>
            <div className="promo-code">
                Use Coupon Code <b>"CODERGEEK"</b> to get upto 3000₹ off🎁
            </div>
            <div>
                <h4 className="btn ">🚀Start your FREE trial 🚀</h4>
            </div>
        </div>
        </a>

    )
}

export default  Ppa;