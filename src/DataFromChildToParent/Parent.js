import { useState } from "react";
import Child from "./Child";



function Parent(){
    const [dataFromChild, UpdateDataFromChild] = useState('');


    function handleChildData(childData){
        UpdateDataFromChild(childData)
    }



    return(
        <div>I am the parent
            {dataFromChild}
            <Child handleChildData={handleChildData}></Child>
        </div>
    )
}


export default Parent;