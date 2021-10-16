import  './WatchListBookList.css'

import { WatchlistBook } from '../WatchlistBook/WatchlistBook'
import React from "react";

export const WatchlistBookList = (props) => {
    return(


            <div className={"watchlist"}>
                {
                    props.watchlist.map(book => {
                        return <WatchlistBook  book={book} key = {book.id} removeFromWatchlist={props.removeFromWatchlist}/>
                    })
                }
            </div>

    )
}