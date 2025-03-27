import { useState } from "react";



function CapitalString() {
    const regexs = /^[a-zA-Z0-9 ]*$/;
    const [inputState, UpdateState] = useState('')

function HandleSubmit() {
    
}

function HandleChangeInput(event) {
   
    const value = event.target.value;
    regexs.test(value);
    if(!regexs.test(value)){
//   
    }else{
        UpdateState(value.toUpperCase().trim())
    }
   
}

    return(
        <div>
            <h1>Capital</h1>
            <form onSubmit={HandleSubmit}>
            <input type="text" onChange={HandleChangeInput} value={inputState}/>
{inputState}
                <button type="submit"></button>
            </form>
        </div>
    )
}


export default CapitalString;