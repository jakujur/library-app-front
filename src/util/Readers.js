import {address} from "./Setup";

export const Readers = {

    getAllReaders() {

        return fetch(`${address}/v1/readers/`
        ).then(response => {

                if (response.ok) {
                    return response.json();
                }

                return []

            }, networkError => console.log(networkError.message)
        ).then(jsonResponse => {
            return jsonResponse.map(reader => ({
                id: reader.id,
                name: reader.name,
                surname: reader.surname,
                accountCreationDate: reader.accountCreationDate,
                email: reader.email,
                password: reader.password,
                admin: reader.admin
            }));
        });

    },

    registerReader(reader) {

        const url = `${address}/v1/readers`;
        const data = JSON.stringify(reader);

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
