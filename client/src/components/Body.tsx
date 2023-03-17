import React from "react";
import InputAnswer from "./InputAnswer";
import Random from "./Random";


const MainContent = () => {
 
    return (
        <div 
            className="flex flex-col md:flex-row justify-center bg-yellow-200   md:w-screen"
            style={{ height: "calc(100vh - 55px)" }}
            >
                <Random />
                <InputAnswer />
        </div>
    )
}

export default MainContent
