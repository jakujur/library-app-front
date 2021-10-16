import './GoogleResults.css'

import {GoogleBook} from "../GoogleBook/GoogleBook";

export const GoogleResults = (props) => {
    return (

        <div>

            {props.searchResults.length > 0 &&
            <h2>
                Find more on Google Ebooks
                <br />
            </h2>}

            <div className={"google-list"}>
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