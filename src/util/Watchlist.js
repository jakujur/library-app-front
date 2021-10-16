export const Watchlist = {

    getUserWatchlist(readerId) {

        return fetch(`http://localhost:8080/v1/watchlist/${readerId}`
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
                subtitle: book.subtitle,
                ebook: book.ebook,
                isbn13: book.isbn13,
                image: book.image,
                url: book.url
            }));
        });

    },

    getUserEbooks(readerId) {

        return fetch(`http://localhost:8080/v1/watchlist/e/${readerId}`
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
                subtitle: book.subtitle,
                ebook: book.ebook,
                isbn13: book.isbn13,
                image: book.image,
                url: book.url
            }));
        });

    },

    //check if works
    addToWatchlist(readerId, book) {

        const url = `http://localhost:8080/v1/watchlist/${readerId}`;
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

                throw new Error('Request failed!');

            }, networkError => console.log(networkError.message)
        )

    },

    removeFromWatchlist(bookId) {

        return fetch(`http://localhost:8080/v1/watchlist/${bookId}`, {
                method: 'DELETE',
                headers: {
                    'Content-type': 'application/json',
                    'Content-Length': 0
                },
                body: {}
            }
        ).then(response => {

                if (response.ok) {
                    return response;
                }

                throw new Error('Request failed!');

            }, networkError => console.log(networkError.message)
        )

    }

}