import {BooksForm} from "./BooksForm/BooksForm";
import React, {useEffect, useState} from "react";
import {Books} from "../../util/Books";
import {BooksTable} from "./BooksTable/BooksTable";

export const BooksTab = () => {

    const [books, setBooks] = useState([]);

    const update = () => {
        Books.getAllBooks().then(results => {
            setBooks(results);
        })
    }

    useEffect(() => {
        update()
    }, []);

    return (
        <>
            <BooksForm update={update}/>
            <br/>
            <BooksTable books={books}
                        update={update}/>
        </>
    )
}