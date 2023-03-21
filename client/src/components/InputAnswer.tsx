import React from "react";
import { useState } from "react";

const InputAnswer = ({randomWord, words, handleScore, handleRandomWord, handleWords}) => {
    const [answer, setAnswer] = useState("");
    

    const handleInput = (e) => {
        e.preventDefault();
        setAnswer(e.target.value);
    }

    const handleClick = (e) => {
        e.preventDefault();
        
        if (answer === randomWord.English) {
            handleScore();
            // handleWords();
            // handleRandomWord();
            setAnswer("");
            console.log("new words ",handleWords());
            console.log("new randomWord ",handleRandomWord());
        }
        else {
            console.log("Incorrect!");
            setAnswer("");
        }
    }
    
    return (
        <div className="bg-red-300 md:w-screen flex justify-center h-screen items-center"
            style={{ height: 'calc(100vh - 4rem)' }}
            >
            <div>
                <h1 className="text-2xl text-center">Answer:</h1>
                <form action="post">
                    <input className="p-1 text-center rounded-l-md" 
                        type="text" 
                        onChange={handleInput}
                        value={answer}
                        placeholder="Enter your answer"
                     />
                    <button className=" bg-blue-500 text-white py-1 px-3 rounded-r-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-opacity-50"
                        onClick={handleClick}
                    >
                        OK
                    </button>
                </form>
            </div>
        </div>
    )
}
export default InputAnswer;