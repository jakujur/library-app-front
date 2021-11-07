import React, {useContext} from "react";
import {UserContext} from "../../contexts/UserContext";
import {LoginForm} from "./LoginForm/LoginForm";

export function Login() {
    const {user, setUser} = useContext(UserContext);

    return (
        <div className={"m-auto max-w-lg"}>
            <h2 className={"text-2xl font-semibold text-blue-900"}>Account</h2>
            {user ? (
                <button
                    className={"p-1 pl-2 pr-2 bg-transparent border-2 border-blue-900 text-blue-900 text-sm rounded-lg hover:bg-blue-900 hover:text-gray-100 focus:border-4 focus:border-blue-900"}
                    onClick={() => {
                        // call logout
                        setUser(null);
                        localStorage.setItem('user', null);
                    }}
                >
                    Log Out
                </button>
            ) : (
                <div>
                    <LoginForm setUser={setUser}/>
                </div>
            )}
        </div>
    );
}