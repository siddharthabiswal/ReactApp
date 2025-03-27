import { useState } from "react";
import ButtonComponent from "./ButtonsComponent";
import useFetch from "./useFetchHookCustom";
import UseMemoDemoFunction from "./UseMemoDemoComponent";




function HomeComponent() {
    // const [data] = useFetch();
    const[btnStatus, updateStatus]= useState("");

    return(
        <div>
            <UseMemoDemoFunction/>
             {/* <h1> Home</h1>
             <button onClick={()=>updateStatus("red")}>Cick to change color to red</button>
             <button onClick={()=>updateStatus("green")}>Cick to able the color to green</button>
             <ButtonComponent value ={btnStatus} /> */}
      </div>
    )
    
}


export default HomeComponent;