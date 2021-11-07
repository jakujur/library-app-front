import './WatchlistTab.css'

import React, {useState, useEffect, useContext} from 'react';
import {WatchlistBookList} from './WatchlistBookList/WatchlistBookList';
import {Watchlist} from '../../util/Watchlist';
import {UserContext} from "../../contexts/UserContext";

export const WatchlistTab = () => {

    const [watchlist, setWatchlist] = useState([]);
    const [eBooks, setEBooks] = useState([]);
    const {user} = useContext(UserContext);

    const removeFromWatchlist = bookId => {

        Watchlist.removeFromWatchlist(bookId).then(() => {
            updateWatchlist()
        })

    }

    const updateWatchlist = () => {
        if (user) {
            Watchlist.getUserWatchlist(user.id)
                .then(results => {
                    setWatchlist(results);
                });

            Watchlist.getUserEbooks(user.id)
                .then(results => {
                    setEBooks(results);
                });
        }
    }

    useEffect(() => {
        updateWatchlist();
    }, [user]);

    return (
        <div>
            <h1 className={"mb-3 text-2xl font-semibold text-white"}>Your watchlist</h1>

            <div className={"watchlists"}>
                    <WatchlistBookList watchlist={watchlist} removeFromWatchlist={removeFromWatchlist}/>
                    <WatchlistBookList watchlist={eBooks} removeFromWatchlist={removeFromWatchlist}/>
            </div>
        </div>
    )

}