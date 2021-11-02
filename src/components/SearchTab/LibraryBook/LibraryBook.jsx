import './LibraryBook.css'
import React, {useEffect, useState} from "react";

export const LibraryBook = (props) => {

    const [isRented, setRented] = useState(false);

    const handleClick = () => {
        setRented(true)
        props.addToRentals(props.book.id)
    }

    useEffect(() => {

        if (props.book.status !== 'available') {
            setRented(true);
        }

    }, [props.book.status]);

    return (
        <div className={"library-book"}>
            <img src={props.book.image} alt={"book front cover"} height={230}/>

            {isRented ?
                "Rented"
                :
                <button className={"add-to-rentals"} onClick={() => {
                    handleClick()
                }}>Book</button>}


        </div>
    )
}