import React, {useEffect, useState} from "react";
import {Readers} from "../../util/Readers";
import MaterialTable from "material-table";

export const ReadersTable = () => {
    const [readers, setReaders] = useState([]);

    const update = () => {
        Readers.getAllReaders().then(results => {
            setReaders(results);
        })
    }

    useEffect(() => {
        update()
    }, []);

    const columns = [
        {title: "ID", field: 'id', editable: 'never'},
        {title: "Name", field: 'name', editable: 'never'},
        {title: "Surname", field: 'surname', editable: 'never'},
        {title: "Account creation date", field: 'accountCreationDate', type:'date', editable: 'never'},
        {title: "Email", field: 'email', type: 'email', editable: 'never'},
        {title: "Password", field: 'password', type: 'password', editable: 'never'},
        {title: "Admin", field: 'admin', type:'boolean', editable: 'never'}
    ]




    return (
        <div>
            <br/>
            <MaterialTable title={"Titles"}
                           columns={columns}
                           data={readers}
                           options={{
                               pageSize:10
                           }}
            />
        </div>
    )
}