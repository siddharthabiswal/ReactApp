import { useEffect, useState } from "react";




function ChildBtn(props) {
    
    // console.log(props.colorDataFromParent);
   
    const [btnColor, UpdateBtnColor] = useState('red');
    // UpdateBtnColor(props.colorDataFromParent);

    useEffect(()=>{
        console.log("use effect called")
        UpdateBtnColor(props.colorDataFromParent);
    },[props])


    return(
        <div> 
            <button style={{color:btnColor}}>Submit </button>
        </div>
    )
    
}

export default ChildBtn;