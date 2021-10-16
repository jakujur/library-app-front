export const Titles = {

    addToWatchlist(title) {

        const url = `http://localhost:8080/v1/titles`;
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

}