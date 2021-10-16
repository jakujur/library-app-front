import './SearchTab.css'
import React, {useState, useContext} from 'react';
import {SearchBar} from "./SearchBar/SearchBar";
import {SearchResults} from "./SearchResults/SearchResults";
import {BookstoreResults} from "./BookstoreResults/BookstoreResults";
import {GoogleResults} from "./GoogleResults/GoogleResults";
import {Search} from '../../util/Search';
import {Watchlist} from '../../util/Watchlist';
import {Rentals} from '../../util/Rentals'
import {UserContext} from "../../contexts/UserContext";


export const SearchTab = () => {

    const [librarySearchResults, setLibrarySearchResults] = useState([]);
    const [bookstoreSearchResults, setBookstoreSearchResults] = useState([]);
    const [googleSearchResults, setGoogleSearchResults] = useState([]);
    const {user} = useContext(UserContext);
    const [input, setInput] = useState('');

    const search = () => {
        Search.searchLibrary(input).then(results => {
            setLibrarySearchResults(results)
        });

        Search.searchBookstore(input, user.id).then(results => {
            setBookstoreSearchResults(results)
        });

        Search.searchGoogleBooks(input, user.id).then(results => {
            setGoogleSearchResults(results)
        })
    }

    const addToWatchlist = (book) => {
        Watchlist.addToWatchlist(user.id, book).then(() => {
            search()
        })
    }

    const addToRentals = (bookId) => {
        Rentals.addToRentals(user.id, bookId).then(() => {
            search()
        })
    }


    return (
        <div className={"search-tab"}>
            <h1><span className={"highlight"}>Search for a book</span></h1>
            <SearchBar onSearch={search} setInput={setInput}/>
            <div className={'searches'}>
                <SearchResults searchResults={librarySearchResults} addToRentals={addToRentals}/>
                <BookstoreResults searchResults={bookstoreSearchResults} addToWatchlist={addToWatchlist}/>
                <GoogleResults searchResults={googleSearchResults} addToWatchlist={addToWatchlist}/>
            </div>
        </div>
    )
}