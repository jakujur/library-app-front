import './SearchBar.css'
import React, {useState} from 'react';

export const SearchBar = (props) => {

    const handleTermChange = (e) => {
        props.setInput(e.target.value);
    }

    return (
        <div className="search-bar">
            <input placeholder="Enter searched title" onChange={handleTermChange}/>
            <button className="search-button" onClick={() => {
                props.onSearch()
            }}>Search
            </button>
        </div>
    )
}