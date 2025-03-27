import React, { memo } from "react";



// const EmployeeComp = React.memo(() => {
//     console.log("Child component rendered");
//     return <div>I am the new functions of child </div>;
//   });
//  const EmployeeComp=React.memo(()=>{
//     function Display(){
//         console.log(" I am called in childssssssssssss")
//     }
//     console.log("oooops")
//     return(
//         <div>Heyyyy
//             {Display()}
//         </div>
//     )
// })
function EmployeeComp({CalBack}) {
    
    function sendData() {
        console.log("send data to parent");
        CalBack("Hey I got you");
    }

    function Display(){
        console.log(" I am called in child")
    }
    return(
        <div>
            <h1>I am the Employee</h1>
            <button onClick={sendData}>Send data to parent</button>
            { Display()}
        </div>
        )
       
}

export default memo(EmployeeComp) ;