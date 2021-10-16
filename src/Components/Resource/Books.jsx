import React from 'react'
import BookCard from '../UiComponent/BookCard';

// import css
import "../../CSS/Resource/books.css"

import Footer from "../Footer"

// import data from books
import data from "../../Data/book.json"
// import TelegramJob from '../SocialMedia/TelegramJob';
import UdemyDSA from "../AD/UdemyDSA"

const Books = () => {
    console.log(data);
    return (
        <div>
            <h1 className = "res-book-title">📚 Best books and notes for your interview Preparation</h1>
            <div className = "book-body">
                {data.map(book => {
                    return(
                        <BookCard img = {book.img} title = {book.title} author = {book.author} link = {book.link} />
                    )
                })}
            </div>
            {/* <TelegramJob/> */}
            {/* <UdemyDSA/> */}
            <Footer/> 
        </div>
    )
}

export default Books;