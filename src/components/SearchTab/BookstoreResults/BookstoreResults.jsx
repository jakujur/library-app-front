import './BookstoreResults.css'

import {BookstoreBook} from "../BookstoreBook/BookstoreBook";

export const BookstoreResults = (props) => {
    return (

        <div>

            {props.searchResults.length > 0 &&
            <h2>
                Buy books from IT Bookstore
                <br />
            </h2>}

            <div className={"bookstore-list"}>
                {
                    props.searchResults.map(book => {
                        return <BookstoreBook book={book} key={book.isbn13}
                                              addToWatchlist={props.addToWatchlist}/>
                    })
                }
            </div>
        </div>

    )
}