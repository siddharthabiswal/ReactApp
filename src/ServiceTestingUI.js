import { useState } from "react";
import Getdata from "./ServiceCustom";
// import { Getdata } from "./ServiceCustom";

//Getdata



function ServiceTestingUI(params) {

    const [dataFromService, UpdateData] = useState([])
    function handleBtnClick(params) {
        console.log('btn clicked');
        var x = Getdata();
        UpdateData(x)
        console.log(x)
    }
    return(
        <div>
            <h1>Hello</h1>
            <button onClick={handleBtnClick}>Click to get Data</button>

           {/* {dataFromService} */}
           {dataFromService.map((ele)=>{
            return(
                <li>{ele.userId} {ele.title }</li>
                
            )
           })}
        </div>
    )
    
}

export default ServiceTestingUI; 