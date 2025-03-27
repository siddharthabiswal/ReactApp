import { useEffect, useRef, useState } from "react";


function RenderingCheck() {

    const[renderCount, updateCount] = useState(0);
    //const[valueInput, UpdateInput] =useState('');
    const count=useRef(0);
    useEffect(()=>{
        console.log("i am called");
        //updateCount(renderCount+1)
    })


    return(
        <div>
            <label>Enter name</label>
            {/* <input onChange={(event)=>UpdateInput(event.target.value)}/> */}
            {/* {valueInput}{renderCount}{count} */}
            {count.current}
        </div>
    )
    
}

export default RenderingCheck;