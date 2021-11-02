import {TitleForm} from './TitleForm/TitleForm'
import React, {useEffect, useState} from "react";
import {Titles} from "../../util/Titles";
import {TitleTable} from "./TitleTable/TitleTable";

export const TitlesTab = () => {

    const [titles, setTitles] = useState([]);

    const update = () => {
        Titles.getAllTitles().then(results => {
            setTitles(results);
        })
    }

    useEffect(() => {
        update()
    }, []);

    return (
        <>
            <TitleForm update={update}/>
            <br/>
            <TitleTable titles={titles}
                        update={update}/>
        </>
    )
}