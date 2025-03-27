import { useEffect, useState } from "react";




function Child({handleChildData}){

    const [data, UpdateData] = useState('Ram Ram');

   // useEffect(()=>{sendDataToParent(data)},[])
 
    return(
        <div>
            i am the childsss
            <button onClick={()=>{handleChildData(data)}}></button>
        </div>
    )
}


export default Child;