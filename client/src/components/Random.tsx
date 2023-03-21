import React from "react";


const Random = ({randomWord, handleRandomWord}) => {

    const handlePass = () => {
        console.log("pass");
        handleRandomWord();
    }
   
    return (
        <div className=" bg-blue-100 md:w-screen h-screen flex items-center justify-center"
        style={{ height: 'calc(100vh - 4rem)' }}
        >
            <div>
                <h1 className="text-center text-2xl">Random Word:</h1>
                <input className="p-1 text-center rounded-md text-lg font-extrabold text-blue-800 focus:outline-none" type="text" value={randomWord.French} readOnly/>
                <div className=" my-1 text-center">
                    <button className="bg-red-400 text-white py-1 px-3 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-opacity-50"
                        onClick={handlePass}
                    >
                        Pass
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Random;