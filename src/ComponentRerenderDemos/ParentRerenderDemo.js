
import React, { memo, useCallback, useMemo, useState } from "react";
import ChildRerenderDemo from "./ChildRerenderDemo";



function ParentRerenderDemo() {

const [value, UpdateValue] = useState(0) ;
const [constVal, UpdateConstVal] = useState(0);
function handleOnclick(){
    console.log('btn clicked');
    UpdateValue(value+1);
}

const demoFunc = useMemo(()=>{
    console.log("HEY DEMO IS CALLED");
},[])

const PassFunctionToChildAsProp= useCallback(()=>{
    console.log('PassFunctionToChildAsProp clicked');
},[]) ;


// const demoFunc= useMemo(()=>{
//     console.log('demo func called on calling other function as well')
// },[]);
// useCallback(()=>{})

// function  PassFunctionToChildAsProp(params) {
//     console.log("I am calledsss")
// }


    return(
        <div>
            <h1>Hello I am the parent component</h1>
            <button onClick={handleOnclick}>click me</button>
            
            {value}
            {demoFunc}
         {/* //   {PassFunctionToChildAsProp()} */}
            {/* <ChildRerenderDemo PassFunctionToChildAsProp={PassFunctionToChildAsProp}/> */}
            {/* <ChildRerenderDemo PassFunctionToChildAsProp={PassFunctionToChildAsProp}/> */}
        </div>
    )
}


export default ParentRerenderDemo;