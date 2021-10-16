import './WatchlistBook.css'

export const WatchlistBook = (props) => {

    return (
        <div className={"watchlist-book"}>

            {props.book.ebook ? <img src={props.book.image} alt={"book front cover"} height={120}/>
                : <img src={props.book.image} alt={"book front cover"} height={150}/>}

            <div className={"watchlist-info"}>
                <h3>{props.book.title}</h3>
                <div>
                    <button className="remove-button" onClick={() => {
                        props.removeFromWatchlist(props.book.id)
                    }}>Remove from Watchlist
                    </button>
                    <button className={"bookstore-button"}><a href={props.book.url} className={"book-link"}
                                                              target={"_blank"}>Find on IT Bookstore</a></button>
                </div>
            </div>

        </div>
    )
}