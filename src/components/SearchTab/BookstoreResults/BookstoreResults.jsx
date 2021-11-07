import {BookstoreBook} from "../BookstoreBook/BookstoreBook";

export const BookstoreResults = (props) => {
    return (

        <div>

            {props.searchResults.length > 0 &&
            <h2 className={"mb-3 mt-3 text-xl font-semibold text-white"}>
                Buy books from IT Bookstore
                <br />
            </h2>}

            <div className={"inline-flex overflow-x-auto w-full"}>
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