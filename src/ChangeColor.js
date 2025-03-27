import { useState } from "react";
import UseHandleOnClickColorChangeHook from "./CustomHookColor";



function ChangeColor() {

    return(
        <div>
            <h1>Change color</h1>
            Name:<input id ="inputId"onClick={()=>{
                UseHandleOnClickColorChangeHook('inputId')
            }}/>

          
     
        </div>
    )
    
}


export default ChangeColor;