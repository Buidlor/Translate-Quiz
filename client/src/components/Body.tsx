import React from "react";
import InputAnswer from "./InputAnswer";
import Random from "./Random";


const MainContent = ({words, randomWord, handleScore, handleRandomWord, handleWords}) => {
    
    
    return (
        <div 
            className="flex flex-col md:flex-row justify-center bg-yellow-200 w-window "
                
            >
                <Random 
                    words = {words}
                    randomWord = {randomWord}
                    handleRandomWord = {handleRandomWord}
                    
                />
                <InputAnswer 
                    words = {words}
                    randomWord = {randomWord}
                    handleScore = {handleScore}
                    handleRandomWord = {handleRandomWord}
                    handleWords = {handleWords}
                />
        </div>
    )
}

export default MainContent
