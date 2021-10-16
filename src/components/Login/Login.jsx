import React, {useContext} from "react";
import {UserContext} from "../../contexts/UserContext";
import {login} from "../../util/login";

export function Login() {
    const {user, setUser} = useContext(UserContext);

    return (
        <div>
            <h2>Home</h2>
            <pre>{JSON.stringify(user, null, 2)}</pre>
            {user ? (
                <button
                    onClick={() => {
                        // call logout
                        setUser(null);
                        localStorage.setItem('user', null);
                    }}
                >
                    logout
                </button>
            ) : (
                <button
                    onClick={async () => {
                        const user = await login();
                        setUser(user);
                        localStorage.setItem('user', JSON.stringify(user));
                    }}
                >
                    login
                </button>
            )}
        </div>
    );
}