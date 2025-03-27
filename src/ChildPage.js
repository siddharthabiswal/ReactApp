import { useEffect, useState } from "react";



function ChildPage(inputData) {
   // console.log(inputData.prop);
    const initialColor = "red"
    const [backgroundColor, UpdateColor] = useState(initialColor);


    function EmitAlert() {
    
        console.log('emit error');
        UpdateColor(inputData.prop);
        console.log(backgroundColor);
        //alert("parent changed")
    }


    useEffect(()=>{
        EmitAlert();
    },[inputData])
    return(
        <div style={{backgroundColor:"pink"}}>
            <h1>I am child</h1>
            <button style={{backgroundColor:backgroundColor}}> I am in child btn</button>
            
        </div>
    )
}


export default ChildPage;