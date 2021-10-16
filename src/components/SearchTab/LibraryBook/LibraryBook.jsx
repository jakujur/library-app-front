import './LibraryBook.css'
import React from "react";

export const LibraryBook = (props) => {

    return (
        <div className={"library-book"}>
            <img src={props.book.image} alt={"book front cover"} height={230}/>

            {props.book.status === "rented" && <p>Unavailable</p>}

            {props.book.status === 'available' && <button className={"add-to-rentals"} onClick={() => {
                props.addToRentals(props.book.id)
            }}>Book</button>}

        </div>
    )
}