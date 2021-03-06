import {address} from "./Setup";

export const Rentals = {

    getUserRentals(userId) {

        return fetch(`${address}/v1/rentals/${userId}`
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

    getAllRentals() {
        return fetch(`${address}/v1/rentals/`
        ).then(response => {

                if (response.ok) {
                    return response.json();
                }

                throw new Error('Request failed!');

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

    returnRental(rentalId){
        const url = `${address}/v1/rentals/${rentalId}`;

        return fetch(url, {
                method: 'PUT',
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
    },

    addToRentals(readerId, bookId) {

        const url = `${address}/v1/rentals/${bookId}?readerId=${readerId}`;

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