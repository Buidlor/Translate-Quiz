import React from "react";


const Random = () => {
    return (
        <div className=" bg-blue-100 md:w-screen h-screen flex items-center justify-center">
            <div>
                <h1 className="text-center text-2xl">Random Word:</h1>
                <input className="p-1 text-center rounded-md font-bold focus:outline-none" type="text" value={"random word"} readOnly/>
            </div>
        </div>
    )
}

export default Random;