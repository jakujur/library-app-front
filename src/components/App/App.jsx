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
import "tailwindcss/tailwind.css"

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
        if (user) {
            if (user.admin) {
                return (
                    <div className="max-w-8xl mx-auto px-4">
                        <div className="flex justify-between">
                            <div className="flex space-x-7">
                                <div className={"flex items-center space-x-3"}>
                                    <NavLink to={ROUTES.TITLES}
                                             activeClassName="py-4 px-2 text-blue-900 border-b-4 border-blue-900 font-semibold"
                                             className={"py-4 px-2 text-gray-900 font-semibold hover:text-blue-900 transition duration-300"}>
                                        Titles
                                    </NavLink>
                                    <NavLink to={ROUTES.BOOKS}
                                             activeClassName="py-4 px-2 text-blue-900 border-b-4 border-blue-900 font-semibold"
                                             className={"py-4 px-2 text-gray-900 font-semibold hover:text-blue-900 transition duration-300"}>
                                        Books
                                    </NavLink>
                                    <NavLink to={ROUTES.ALL_RENTALS}
                                             activeClassName="py-4 px-2 text-blue-900 border-b-4 border-blue-900 font-semibold"
                                             className={"py-4 px-2 text-gray-900 font-semibold hover:text-blue-900 transition duration-300"}>
                                        Rentals
                                    </NavLink>
                                    <NavLink to={ROUTES.READERS}
                                             activeClassName="py-4 px-2 text-blue-900 border-b-4 border-blue-900 font-semibold"
                                             className={"py-4 px-2 text-gray-900 font-semibold hover:text-blue-900 transition duration-300"}>
                                        Readers
                                    </NavLink>
                                </div>
                            </div>
                            <div className="flex items-center space-x-6 ">
                                <NavLink to={ROUTES.LOGIN}
                                         activeClassName="py-4 px-2 text-blue-900 border-b-4 border-blue-900 font-semibold"
                                         className="py-2 px-2 font-medium text-gray-500 rounded hover:900 hover:text-blue-900 transition duration-300">
                                    Account
                                </NavLink>
                            </div>
                        </div>
                    </div>
                )
            } else {
                return (
                    <div className="max-w-8xl mx-auto px-4">
                        <div className="flex justify-between">
                            <div className="flex space-x-7">
                                <div className={"flex items-center space-x-3"}>
                                    <NavLink to={ROUTES.SEARCH}
                                             activeClassName="py-4 px-2 text-blue-900 border-b-4 border-blue-900 font-semibold"
                                             className={"py-4 px-2 text-gray-500 font-semibold hover:text-blue-900 transition duration-300"}>
                                        Search
                                    </NavLink>
                                    <NavLink to={ROUTES.WATCHLIST}
                                             activeClassName="py-4 px-2 text-blue-900 border-b-4 border-blue-900 font-semibold"
                                             className={"py-4 px-2 text-gray-500 font-semibold hover:text-blue-900 transition duration-300"}>
                                        Watchlist
                                    </NavLink>
                                    <NavLink to={ROUTES.RENTALS}
                                             activeClassName="py-4 px-2 text-blue-900 border-b-4 border-blue-900 font-semibold"
                                             className={"py-4 px-2 text-gray-500 font-semibold hover:text-blue-900 transition duration-300"}>
                                        Rentals
                                    </NavLink>
                                </div>
                            </div>
                            <div className="flex items-center space-x-6 ">
                                <NavLink to={ROUTES.LOGIN}
                                         activeClassName="py-4 px-2 text-blue-900 border-b-4 border-blue-900 font-semibold"
                                         className="py-2 px-2 font-medium text-gray-500 rounded hover:text-blue-900 transition duration-300">
                                    Account
                                </NavLink>
                            </div>
                        </div>
                    </div>
                )
            }
        } else {
            return (
                <div className="flex items-center space-x-6 ">
                    <NavLink to={ROUTES.LOGIN}
                             activeClassName="py-4 px-2 text-blue-900 border-b-4 border-blue-900 font-semibold"
                             className="ml-4 py-2 px-4 font-medium text-gray-500 rounded hover:text-blue-900 transition duration-300">
                        Log In
                    </NavLink>
                </div>
            )
        }
    }

    return (
        <div>
            <nav className={"bg-white shadow-lg"}>
                {navigation()}
            </nav>

            <main className={"m-6"}>
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
