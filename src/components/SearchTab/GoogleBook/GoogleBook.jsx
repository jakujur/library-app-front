import './GoogleBook.css'
import React, {useState, useEffect} from 'react';

export const GoogleBook = (props) => {

    const [isInWatchlist, setIsInWatchlist] = useState(false);

    const handleClick = () => {
        setIsInWatchlist(true)
        props.addToWatchlist(props.book)
    }

    useEffect(() => {

        if (props.book.id !== null) {
            setIsInWatchlist(true);
        }

    }, [props.book.id]);

    return (
        <div className={"google-book"}>
            <img src={props.book.image} alt={"book front cover"} height={230}/>
            {isInWatchlist ?
                "Added to watchlist"
                :
            <button className={"google-button"} onClick={() => {
                handleClick()
            }}>Add to Watchlist</button>}
            <button className={"google-button"}><a href={props.book.url} className={"book-link"} target={"_blank"}>Find on Google
                Books</a></button>
        </div>
    )
}