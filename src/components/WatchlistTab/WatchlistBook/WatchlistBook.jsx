export const WatchlistBook = (props) => {

    return (
        <div className={"mb-2 flex w-full h-32 border-b-2 min-w-80 "}>

            {props.book.ebook ? <img className={"h-32"} src={props.book.image} alt={"book front cover"} height={120}/>
                : <img className={"h-30"} src={props.book.image} alt={"book front cover"} height={150}/>}

            <div className={"grid ml-8 text-lg"}>
                <h3>{props.book.title}</h3>
                <div>
                    <button
                        className="p-1 pl-2 pr-2 bg-transparent border-2 border-blue-900 text-blue-900 text-sm rounded-lg hover:bg-blue-900 hover:text-gray-100 focus:border-4 focus:border-blue-900"
                        onClick={() => {
                            props.removeFromWatchlist(props.book.id)
                        }}>Remove from Watchlist
                    </button>
                    <button
                        className={"ml-2 p-1 pl-2 pr-2 bg-transparent border-2 border-blue-900 text-blue-900 text-sm rounded-lg hover:bg-blue-900 hover:text-gray-100 focus:border-4 focus:border-blue-900"}>
                        <a href={props.book.url} className={"book-link"}
                           target={"_blank"} rel="noreferrer">Find on IT Bookstore</a></button>
                </div>
            </div>

        </div>
    )
}