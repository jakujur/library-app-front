import {GoogleBook} from "../GoogleBook/GoogleBook";

export const GoogleResults = (props) => {
    return (

        <div>

            {props.searchResults.length > 0 &&
            <h2 className={"mb-3 mt-3 text-xl font-semibold text-white"}>
                Find more on Google Ebooks
                <br />
            </h2>}

            <div className={"inline-flex overflow-x-auto w-full scrollbar"}>
                {
                    props.searchResults.map(book => {
                        return <GoogleBook book={book} key={book.isbn13}
                                           addToWatchlist={props.addToWatchlist}/>
                    })
                }
            </div>
        </div>

    )
}