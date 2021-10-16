export const Search = {

    searchLibrary(keyword) {

        return fetch(`http://localhost:8080/v1/books/search/${keyword}`
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

        return fetch(`http://localhost:8080/v1/bookstore/${keyword}?readerId=${readerId}`
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

        return fetch(`http://localhost:8080/v1/google/${keyword}?readerId=${readerId}`
        ).then(response => {

                if (response.ok) {
                    return response.json();
                }

                return [];

            }, networkError => console.log(networkError.message)
        ).then(jsonResponse => {
            return jsonResponse
                .filter(book => book.volumeInfo.industryIdentifiers)
                .map(book => ({
                id: book.volumeInfo.id,
                title: book.volumeInfo.title,
                subtitle: book.volumeInfo.subtitle,
                ebook: true,
                isbn13: book.volumeInfo.industryIdentifiers[0].identifier,
                image: book.volumeInfo.imageLinks.thumbnail,
                url: book.volumeInfo.infoLink
            }));
        });

    }
}