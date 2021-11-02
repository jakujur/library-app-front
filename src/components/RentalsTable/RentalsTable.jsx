import React, {useEffect, useState} from "react";
import MaterialTable from "material-table";
import {Rentals} from "../../util/Rentals";

export const RentalsTable = () => {

    const [rentals, setRentals] = useState([]);

    const update = () => {
        Rentals.getAllRentals().then(results => {
            setRentals(results);
        })
    }

    useEffect(() => {
        update()
    }, []);

    const columns = [
        {title: "ID", field: 'id', editable: 'never'},
        {title: "Book id", field: 'bookId', editable: 'never'},
        {title: "Book title", field: 'bookTitle', editable: 'never'},
        {title: "Reader Id", field: 'readerId', editable: 'never'},
        {title: "Rent Date", field: 'rentDate', type: 'date', editable: 'never'},
        {title: "Return Date", field: 'returnDate', type: 'date', editable: 'never'},
        {title: "Status", field: 'status', editable: 'never'}
    ]

    const actions=[
            rowData => ({
                icon: 'check',
                tooltip: 'Return book',
                onClick: (event, rowData) => {
                    Rentals.returnRental(rowData.id).then(() => update())
                },
                disabled: rowData.status === 'returned'
            })
        ]


    return (
        <div>
            <br/>
            <MaterialTable title={"Titles"}
                           columns={columns}
                           data={rentals}
                           actions={actions}
                           options={{
                               pageSize:10,
                               emptyRowsWhenPaging: false,
                           }}
            />
        </div>
    )
}