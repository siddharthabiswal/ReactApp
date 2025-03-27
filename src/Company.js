import { useCallback, useState } from "react";
import EmployeeComp from "./Employee";



function CompanComp() {
    
    const[value, UpdateValue]=useState(0);
    const[values, UpdateValues]=useState(0);
    const[childData, UpdateChildData]=useState('')

    const handleIncrement = function(){
        UpdateValue(value+1)
    }

    // const CalBack= function(data){
    //     UpdateChildData(data)
    // }

    const CalBack= useCallback(function(data){
        UpdateChildData(data)
    },[childData])
    //const CalBackUSe= useCallback(handleIncrement,[])
    return(
        <div>
            <h1>helo</h1>
            <button onClick={handleIncrement}>Counter</button>
            <button onClick={()=>{UpdateValues(values+1)}}>Counterssssss</button>
            {/* <EmployeeComp CalBack={CalBack}></EmployeeComp> */}
            <EmployeeComp CalBack={CalBack}></EmployeeComp>
            <h2>value{value  }{values}{childData}</h2>

        </div>
    )
}


export default CompanComp;