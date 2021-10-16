import './RentalsList.css'
import React from "react";
import MaterialTable from "material-table";

export const RentalsList = (props) => {

    const columns = [
        {title: "Title", field: 'bookTitle'},
        {title: "Rent date", field: 'rentDate'},
        {title: "Return date", field: 'returnDate'},
        {title: "Status", field: 'status'},
    ]
    return (
        <div>
            <MaterialTable title={"Rentals"}
                           columns={columns}
                           data={props.rentals} />
        </div>
    )
}