import { useState } from "react";


function ButtonComponent(props) {
  
 const[buttonColor, updateColor] =useState("")

   console.log(props.value);
   
  
    

    return(
        <div>
            <h1>Btn</h1>
     
            <button style={{color:props.value}} >click me</button>
            
         
        </div>
    )
    
}

export default ButtonComponent;