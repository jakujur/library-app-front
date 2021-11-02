import './SearchResults.css'

import { LibraryBook } from "../LibraryBook/LibraryBook";

export const SearchResults = (props) => {
    return(

        <div>

            {props.searchResults.length > 0 &&
            <h2>
                Rent a book from our library
                <br />
            </h2>}

            <div className={"library-list"}>
                {
                    props.searchResults.map(book => {
                        return  <LibraryBook book={book} key = {book.id} addToRentals={props.addToRentals}/>
                    })
                }
            </div>
        </div>
    )
}