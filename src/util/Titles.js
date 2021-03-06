import {address} from "./Setup";

export const Titles = {

    addTitle(title) {

        const url = `${address}/v1/titles`;
        const data = JSON.stringify(title);

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

    getAllTitles() {

        return fetch(`${address}/v1/titles`
        ).then(response => {

                if (response.ok) {
                    return response.json();
                }

                return []

            }, networkError => console.log(networkError.message)
        ).then(jsonResponse => {
            return jsonResponse.map(title => ({
                id: title.id,
                author: title.author,
                title: title.title,
                publicationYear: title.publicationYear
            }));
        });

    },

    changeTitle(title){

        const url = `${address}/v1/titles`;
        const data = JSON.stringify(title);

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