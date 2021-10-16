import './App.css';
import {Switch, Route, Redirect, NavLink} from "react-router-dom";
import {SearchTab} from '../SearchTab/SearchTab';
import {WatchlistTab} from '../WatchlistTab/WatchlistTab'
import {RentalsTab} from '../Rentals/RentalsTab'
import {Login} from '../Login/Login';
import {UserContext} from "../../contexts/UserContext";
import React, {useState, useMemo, useEffect} from "react";

function App() {

    const [user, setUser] = useState(null);

    useEffect(() => {
        const loggedInUser = localStorage.getItem("user");
        if (loggedInUser) {
            const foundUser = JSON.parse(loggedInUser);
            setUser(foundUser);
        }
    }, []);

    const value = useMemo(() => ({user, setUser}), [user, setUser]);

    const ROUTES = {
        SEARCH: "/search",
        WATCHLIST: "/watchlist",
        RENTALS: "/rentals",
        LOGIN: "/login"
    };

    return (
        <div className={"app"}>
            <nav>
                {user ?
                    <>
                        <NavLink to={ROUTES.SEARCH} activeClassName="active" className={"navigation"}>
                            Search
                        </NavLink>
                        <NavLink to={ROUTES.WATCHLIST} activeClassName="active" className={"navigation"}>
                            Watchlist
                        </NavLink>
                        <NavLink to={ROUTES.RENTALS} activeClassName="active" className={"navigation"}>
                            Rentals
                        </NavLink>
                        <NavLink to={ROUTES.LOGIN} activeClassName="active" className="account">
                            {user.username}
                        </NavLink>
                    </>
                    :
                    <NavLink to={ROUTES.LOGIN} activeClassName="active" className="account">
                        Log In
                    </NavLink>

                }
            </nav>
            <main>
                <Switch>
                    <Route exact path="/">
                        <Redirect to={ROUTES.LOGIN}/>
                    </Route>

                    <UserContext.Provider value={value}>
                        <Route path={ROUTES.SEARCH} component={SearchTab}/>
                        <Route path={ROUTES.WATCHLIST} component={WatchlistTab}/>
                        <Route path={ROUTES.RENTALS} component={RentalsTab}/>
                        <Route path={ROUTES.LOGIN} component={Login}/>
                    </UserContext.Provider>
                </Switch>
            </main>
        </div>
    );
}

export default App;
