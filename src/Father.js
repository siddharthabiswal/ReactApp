import { useState } from "react";
import Son from "./Son";
import { Consumer } from "./ContextApiLearn";




function Father() {
    const [dataFromSon, setDataFromSon] = useState("");

    function handleDataFromSon(data) {
        setDataFromSon(data);
    }
  
    return(
        <div>
          
            <Consumer>
         {/* {
            (value)=>{
                <h1>{value.name}</h1>
            }
         } */}
             {/* {(value) =>{ return(
                    <h2>
                        Name: {value.name} id :{value.id}{" "}
                    </h2>
                )}} */}

              

            </Consumer>
            <h1> I am the father</h1>
            <Son sendDataToParent={handleDataFromSon}/>
            {dataFromSon}
        </div>
    )
    
}

export default Father;