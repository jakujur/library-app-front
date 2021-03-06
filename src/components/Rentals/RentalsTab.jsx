import React, {useState, useEffect, useContext} from 'react';
import {RentalsList} from './RentalsList/RentalsList'
import {Rentals} from '../../util/Rentals';
import {UserContext} from "../../contexts/UserContext";

export const RentalsTab = () => {

    const [rentals, setRentals] = useState([]);
    const {user} = useContext(UserContext);

    useEffect(() => {
        if (user) {
            Rentals.getUserRentals(user.id).then(results => {
                setRentals(results);
            })
        }
    }, [user]);

    return (
        <div>
            <h1 className={"mb-3 text-2xl font-semibold text-white"}>Your rentals</h1>
            <RentalsList rentals={rentals}/>
        </div>
    )
}