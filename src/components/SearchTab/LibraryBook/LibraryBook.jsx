import React, {useEffect, useState} from "react";

export const LibraryBook = (props) => {

    const [isRented, setRented] = useState(false);

    const handleClick = () => {
        setRented(true)
        props.addToRentals(props.book.id)
    }

    useEffect(() => {

        if (props.book.status !== 'available') {
            setRented(true);
        }

    }, [props.book.status]);

    return (
        <div className={"bg-white mr-1.5 mb-1.5 h-80 w-52 min-w-52 p-1 grid justify-center items-center rounded-2xl transition duration-500 ease-in-out transform hover:scale-95"}>
            <div className={"w-40 h-56"}>
             <img className={"w-full max-h-56"} src={props.book.image} alt={"book front cover"} height={230}/>
            </div>
            {isRented ?
                <button
                    className={"p-1 pl-2 pr-2 bg-blue-900 border-2 border-blue-900 text-gray-100 text-sm rounded-lg focus:border-4 focus:border-blue-900 cursor-not-allowed"}>
                    Rented</button>
                :
                <button className={"p-1 pl-2 pr-2 bg-transparent border-2 border-blue-900 text-blue-900 text-sm rounded-lg hover:bg-blue-900 hover:text-gray-100 focus:border-4 focus:border-blue-900"} onClick={() => {
                    handleClick()
                }}>Book</button>}


        </div>
    )
}