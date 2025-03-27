import { useState } from "react";
import ChildComponent from "./ChildComponent";
import { Consumer } from "./Context";



function ParentComponent(params) {

    const[value,UpdateValue]=useState("");

    function CallBackFunc(dataFromChild){
        UpdateValue(dataFromChild);

    }
    const arrayData =["ram","hari","shyam"];
    const data =" I am data from parent";
    return(
       
        <div>
             <Consumer>
             {(value) => (
                    <h2>
                        Name: {value.name} id :{value.id}{" "}
                    </h2>
                )}
             </Consumer>
            I am parent
            <ChildComponent data={arrayData} pa/>
        </div>
    )
    
}

export default ParentComponent;