import './WatchListBookList.css'

import {WatchlistBook} from '../WatchlistBook/WatchlistBook'
import React from "react";

export const WatchlistBookList = (props) => {
    return (

        <div className={"block h-screen p-4 mr-3 w-4/12 rounded-xl overflow-y-scroll bg-white min-w-min"}>
            {
                props.watchlist.map(book => {
                    return <WatchlistBook book={book} key={book.id} removeFromWatchlist={props.removeFromWatchlist}/>
                })
            }
        </div>

    )
}