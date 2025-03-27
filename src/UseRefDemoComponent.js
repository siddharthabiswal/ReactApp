import { useRef,useState,useEffect } from "react";


function UseRefDemo() {
const [count, setCount] = useState(0); 
const inputRef= useRef();    
const prevCountRef = useRef();

useEffect(() => {
    console.log(count);
    prevCountRef.current = count;
}, );
function handleClick(){
inputRef.current.focus();

}
    return (

        <div>
            <h1>I am the ref component</h1>
            <p>Current count: {count}</p>
            <p>Previous count: {prevCountRef.current}</p>
            Enter name <input ref={inputRef}></input> 
            <button  onClick={handleClick}>Click me</button>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    )
}

export default UseRefDemo;