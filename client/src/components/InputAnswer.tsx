import React from "react";

const InputAnswer = () => {
    return (
        <div className="bg-red-300 md:w-screen flex justify-center h-screen items-center">
            <div>
                <h1 className="text-2xl text-center">Answer:</h1>
                <form action="post">
                    <input className="p-1 rounded-md" type="text" />
                    <button className="ml-1 bg-blue-500 text-white py-1 px-3 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-opacity-50" >
                        OK
                    </button>
                </form>
            </div>
        </div>
    )
}
export default InputAnswer;