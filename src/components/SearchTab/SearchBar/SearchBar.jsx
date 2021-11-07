import React from 'react';

export const SearchBar = (props) => {

    const handleTermChange = (e) => {
        props.setInput(e.target.value);
    }

    return (
        <div className="w-full">
            <input className={"w-9/12 border-2 border-white bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"} placeholder="Enter searched title" onChange={handleTermChange}/>
            <button
                className= "w-2/12 ml-2 h-10 p-1 pl-2 pr-2 bg-blue-900 border-2 border-blue-900 text-gray-100 text-sm rounded-lg focus:border-4 focus:border-blue-900"
                onClick={() => {
                    props.onSearch()
                }}>Search
            </button>
        </div>
    )
}