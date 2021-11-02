import {address} from "./Setup";

export const logInUser = (email, password) => {

    return fetch(`${address}/v1/readers/login?email=${email}&password=${password}`
    ).then(response => {

        if (response.ok) {
            return response.json();
        }

        alert("Wrong email or password")

        }, networkError => console.log(networkError.message)
    );
}