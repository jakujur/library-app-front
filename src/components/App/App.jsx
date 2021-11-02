import './App.css';
import {Switch, Route, Redirect, NavLink} from "react-router-dom";
import {SearchTab} from '../SearchTab/SearchTab';
import {WatchlistTab} from '../WatchlistTab/WatchlistTab'
import {RentalsTab} from '../Rentals/RentalsTab'
import {Login} from '../Login/Login';
import {TitlesTab} from "../TitlesTab/TitlesTab";
import {BooksTab} from "../BooksTab/BooksTab";
import {RentalsTable} from "../RentalsTable/RentalsTable";
import {RegisterForm} from "../Login/RegisterForm/RegisterForm";
import {ReadersTable} from "../ReadersTable/ReadersTable";
import {UserContext} from "../../contexts/UserContext";
import React, {useState, useMemo, useEffect} from "react";

function App() {

    const [user, setUser] = useState(null);
    const value = useMemo(() => ({user, setUser}), [user, setUser]);

    useEffect(() => {
        const loggedInUser = localStorage.getItem("user");
        if (loggedInUser) {
            const foundUser = JSON.parse(loggedInUser);
            setUser(foundUser);
        }
    }, []);

    const ROUTES = {
        SEARCH: "/search",
        WATCHLIST: "/watchlist",
        RENTALS: "/rentals",
        LOGIN: "/login",
        TITLES: "/titles",
        BOOKS: "/books",
        ALL_RENTALS: "/all_rentals",
        REGISTER: "/register",
        READERS: "/readers"
    };

    const navigation = () => {
        if (user){
            if (user.admin) {
                return(
                    <>
                        <NavLink to={ROUTES.TITLES} activeClassName="active" className={"navigation"}>
                            Titles
                        </NavLink>
                        <NavLink to={ROUTES.BOOKS} activeClassName="active" className={"navigation"}>
                            Books
                        </NavLink>
                        <NavLink to={ROUTES.ALL_RENTALS} activeClassName="active" className={"navigation"}>
                            Rentals
                        </NavLink>
                        <NavLink to={ROUTES.READERS} activeClassName="active" className={"navigation"}>
                            Readers
                        </NavLink>
                        <NavLink to={ROUTES.LOGIN} activeClassName="active" className="account">
                            Account
                        </NavLink>
                    </>
                )
            } else {
                return(
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
                            Account
                        </NavLink>
                    </>
                )
            }
        } else {
            return(
                <NavLink to={ROUTES.LOGIN} activeClassName="active" className="account">
                    Log In
                </NavLink>
            )
        }
    }

    return (
        <div className={"app"}>
            <nav>
                {navigation()}
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
                        <Route path={ROUTES.TITLES} component={TitlesTab}/>
                        <Route path={ROUTES.BOOKS} component={BooksTab}/>
                        <Route path={ROUTES.ALL_RENTALS} component={RentalsTable}/>
                        <Route path={ROUTES.REGISTER} component={RegisterForm}/>
                        <Route path={ROUTES.READERS} component={ReadersTable}/>
                        <Route path={ROUTES.LOGIN} component={Login}/>
                    </UserContext.Provider>
                </Switch>
            </main>
        </div>
    );
}

export default App;
