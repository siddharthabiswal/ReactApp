import { useEffect, useRef, useState } from "react";




function ReferencHook(params) {
    
    const [btnClick, UpdateBtnCLickCounter] = useState(0)
    const inputRef = useRef();
    const counterRef = useRef(0);

    useEffect(()=>{
        console.log("called")
        counterRef.current=counterRef.current+1
    })

    
    return(
        <div>
            ref
            Enter name<input ref={inputRef} onChange={()=>{inputRef.current.style.backgroundColor= 'red'}}></input>
            <button onClick={()=>{UpdateBtnCLickCounter(btnClick+1)}}>Click me</button>
            {counterRef.current}
        </div>
    )
}


export default ReferencHook;