import React, {useContext} from "react";
import {UserContext} from "../../contexts/UserContext";
import "./Login.css"
import {LoginForm} from "./LoginForm/LoginForm";
import {NavLink} from "react-router-dom";

export function Login() {
    const {user, setUser} = useContext(UserContext);

    return (
        <div>
            <h2>Account</h2>
            {user ? (
                    <button
                        onClick={() => {
                            // call logout
                            setUser(null);
                            localStorage.setItem('user', null);
                        }}
                    >
                        Log Out
                    </button>
            ) : (
                <div className={"login-form"}>
                    <LoginForm setUser={setUser}/>
                    <NavLink to={"/register"} activeClassName="active">
                        Not registered yet? Click me!
                    </NavLink>
                </div>
            )}
        </div>
    );
}