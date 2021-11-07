import React from "react";
import MaterialTable from "material-table";
import {Books} from "../../../util/Books";

export const BooksTable = (props) => {

    const columns = [
        {title: "ID", field: 'id', editable: 'never'},
        {title: "Title", field: 'title', editable: 'never'},
        {title: "Status", field: 'status'},
        {title: "Release Date", field: 'releaseDate', type: 'date'}
    ]

    const editable = {

        onRowUpdate: (newData, oldData) =>
            new Promise((resolve, reject) => {
                setTimeout(() => {
                    Books.changeBook(newData).then(r => props.update());
                    resolve();
                }, 200)
            })
    }

    return (
        <div>
            <MaterialTable title={"Books"}
                           columns={columns}
                           data={props.books}
                           editable={editable}
                           options={{
                               paging:true,
                               pageSize:4,       // make initial page size
                               emptyRowsWhenPaging: false,   // To avoid of having empty rows
                               pageSizeOptions:[4,12,20,50],    // rows selection options
                           }}
            />
        </div>
    )
}