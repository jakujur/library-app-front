import { LibraryBook } from "../LibraryBook/LibraryBook";

export const SearchResults = (props) => {
    return(

        <div>

            {props.searchResults.length > 0 &&
            <h2 className={"mb-3 mt-3 text-xl font-semibold text-white"}>
                Rent a book from our library
                <br />
            </h2>}

            <div className={"inline-flex overflow-x-auto w-full"}>
                {
                    props.searchResults.map(book => {
                        return  <LibraryBook book={book} key = {book.id} addToRentals={props.addToRentals}/>
                    })
                }
            </div>
        </div>
    )
}