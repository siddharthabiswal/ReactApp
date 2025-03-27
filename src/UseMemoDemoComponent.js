import { useState } from "react";



function UseMemoDemoFunction(){
    ExtensiveCalc();
const[counter, updateCounter] = useState(0);    
var sum =0;
function ExtensiveCalc(){
    console.log("extensive called");
for(let i=0;i<100000;++i){
    sum =sum+i
}
}


return(
    <div>
        I am here to learn
        <button onClick={()=>{updateCounter(counter+1)}}></button>
        {counter}
    </div>
)

}


export default UseMemoDemoFunction;