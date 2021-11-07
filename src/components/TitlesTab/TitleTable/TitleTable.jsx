import React from "react";
import MaterialTable from "material-table";
import {Titles} from "../../../util/Titles";

export const TitleTable = (props) => {

    const columns = [
        {title: "ID", field: 'id', editable: 'never'},
        {title: "Author", field: 'author'},
        {title: "Title", field: 'title'},
        {title: "First Publication Year", field: 'publicationYear', type: 'numeric'}
    ]


    const editable = {

        onRowUpdate: (newData, oldData) =>
            new Promise((resolve, reject) => {
                setTimeout(() => {
                    Titles.changeTitle(newData).then(r => props.update());
                    resolve();
                }, 200)
            })
    }

    return (
        <div>
            <MaterialTable title={"Titles"}
                           columns={columns}
                           data={props.titles}
                           editable={editable}
                           options={{
                               paging:true,
                               emptyRowsWhenPaging: false,   // To avoid of having empty rows
                           }}
            />
        </div>
    )
}