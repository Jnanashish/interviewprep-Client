import React from 'react'


//import css
import "../../CSS/bookCard.css"


const BookCard = (props) => {
    return (
            <div className = "book-container">
                <img className = "book-img" src={props.img} alt="" />
                <div className = "book-detail">
                    <h3>{props.title}</h3>
                    <h6>By : {props.author}</h6>
                    <a href={props.link} target="_blank" rel="noopener noreferrer">
                        <button className = "buy-btn">Get it for FREE 🎁</button>
                    </a>
                    <br />
                    <br />
                    {/* <button className = "buy-btn">Buy on Amazon</button> */}
                </div>
            </div>
    )
}

export default BookCard;