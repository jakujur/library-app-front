import {address} from "./Setup";

export const Search = {

    searchLibrary(keyword) {

        return fetch(`${address}/v1/books/search/${keyword}`
        ).then(response => {

                if (response.ok) {
                    return response.json();
                }

                return [];

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

    searchBookstore(keyword, readerId) {

        return fetch(`${address}/v1/bookstore/${keyword}?readerId=${readerId}`
        ).then(response => {

                if (response.ok) {
                    return response.json();
                }

                return [];

            }, networkError => console.log(networkError.message)
        ).then(jsonResponse => {
            return jsonResponse.map(book => ({
                id: book.id,
                title: book.title,
                subtitle: book.subtitle,
                ebook: book.ebook,
                isbn13: book.isbn13,
                image: book.image,
                url: book.url
            }));
        });

    },

    searchGoogleBooks(keyword, readerId) {

        return fetch(`${address}/v1/google/${keyword}?readerId=${readerId}`
        ).then(response => {

                if (response.ok) {
                    return response.json();
                }

                return [];

            }, networkError => console.log(networkError.message)
        ).then(jsonResponse => {
            return jsonResponse
                .filter(book => book.industryIdentifiers)
                .map(book => ({
                id: book.id,
                title: book.title,
                subtitle: book.subtitle,
                ebook: true,
                isbn13: book.industryIdentifiers[0].identifier,
                image: book.imageLinks.thumbnail,
                url: book.infoLink
            }));
        });

    }
}