import { useState } from 'react';
// import GetDataService from './GetDataService';





function GetDataFromServiceUI() {
function GetData(){
     var primarryVar =[];
     console.log("clk")
    //  primarryVar= GetDataService();
     console.log(primarryVar)
    //  UpdateData(data);
  
}

    return(
        <div>
            <h1> I can call the service to get data</h1>

            <button onClick={GetData}> Click </button>
            {/* {data} */}
        </div>
    )
}

export default GetDataFromServiceUI;