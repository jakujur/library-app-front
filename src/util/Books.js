import {address} from "./Setup";

export const Books = {

    addBook(book) {

        const url = `${address}/v1/books`;
        const data = JSON.stringify(book);

        return fetch(url, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                    'Content-Length': 0
                },
                body: data
            }
        ).then(response => {

                if (response.ok) {
                    return response;
                }

                alert('Title name not found in the database!')

            }, networkError => console.log(networkError.message)
        )

    },

    getAllBooks() {

        return fetch(`${address}/v1/books/all`
        ).then(response => {

                if (response.ok) {
                    return response.json();
                }

                return []

            }, networkError => console.log(networkError.message)
        ).then(jsonResponse => {
            return jsonResponse.map(book => ({
                id: book.id,
                title: book.title,
                status: book.status,
                image: book.image,
                releaseDate: book.releaseDate
            }));
        });

    },

    changeBook(book){

        const url = `${address}/v1/books`;
        const data = JSON.stringify(book);

        return fetch(url, {
                method: 'PUT',
                headers: {
                    'Content-type': 'application/json',
                    'Content-Length': 0
                },
                body: data
            }
        ).then(response => {

                if (response.ok) {
                    return response;
                }

                console.log("Title has not changed")

            }, networkError => console.log(networkError.message)
        )
    }

}