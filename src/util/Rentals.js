import {url} from "./Setup";

export const Rentals = {

    getUserRentals(userId) {

        return fetch(`${url}/v1/rentals/${userId}`
        ).then(response => {

                if (response.ok) {
                    return response.json();
                }

                throw  new Error('Request failed!');

            }, networkError => console.log(networkError.message)
        ).then(jsonResponse => {
            return jsonResponse.map(rental => ({
                id: rental.id,
                bookId: rental.bookId,
                bookTitle: rental.bookTitle,
                readerId: rental.readerId,
                rentDate: rental.rentDate,
                returnDate: rental.returnDate,
                status: rental.status
            }));
        });

    },

    removeFromRentals() {

    },

    //check if works
    addToRentals(readerId, bookId) {

        const url = `${url}/v1/rentals/${bookId}?readerId=${readerId}`;

        return fetch(url, {
                method: 'POST',
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