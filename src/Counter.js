import { useState } from "react";



function ButtonCounter() {

    const[counter, UpdateCounter] =useState(0)

    function handleBtnClick(e) {
        e.preventDefault();
        UpdateCounter(counter+1);
        
    }
    return(
        <div>This is counter btn page

            <button onClick={handleBtnClick}> Click me </button>

            {counter }
        </div>

        
    )
    
}


export default ButtonCounter;