import React from 'react'

//import image of books
import dsa from "../../Image/dsa-made-easy.jpg";
import sde from "../../Image/cracking-sde.jpg";

//import css
import "../../CSS/ebook.css"

const EbookCard = () => {
    return (
        <div className = "ebook-card">
            <img className="book-poster" src={dsa} alt=""/>  
            <img className="book-poster book2"  src={sde} alt=""/>
            <a href="https://bit.ly/ip-web-ebook"  target="_blank" rel="noopener noreferrer">
                <h3 className = "title">Get these eBooks for FREE 🤗</h3>
            </a>  
            
        </div>
    )
}

export default EbookCard;