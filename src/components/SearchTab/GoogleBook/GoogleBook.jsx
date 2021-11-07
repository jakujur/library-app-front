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
        <div className={"bookstore-book"}>
            <div className={"w-40 h-56 "}>
                <img className={"w-full max-h-56"} src={props.book.image} alt={"book front cover"} height={230}/>
            </div>
            {isInWatchlist ?
                <button
                    className={"p-1 pl-2 pr-2 bg-blue-900 border-2 border-blue-900 text-gray-100 text-sm rounded-lg focus:border-4 focus:border-blue-900 cursor-not-allowed"}>
                    Added to watchlist</button>
                :
                <button
                    className={"p-1 pl-2 pr-2 bg-transparent border-2 border-blue-900 text-blue-900 text-sm rounded-lg hover:bg-blue-900 hover:text-gray-100 focus:border-4 focus:border-blue-900"}
                    onClick={() => {
                        handleClick()
                    }}>Add to Watchlist</button>}
            <button
                className={"p-1 pl-2 pr-2 bg-transparent border-2 border-blue-900 text-blue-900 text-sm rounded-lg hover:bg-blue-900 hover:text-gray-100 focus:border-4 focus:border-blue-900"}>
                <a href={props.book.url} className={"book-link"} target={"_blank"} rel="noreferrer">Find on Google
                    Books</a></button>
        </div>
    )
}