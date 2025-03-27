import { useState } from "react";
import ChildBtn from "./ChildBtn";
import DesignWrapper from "./DesignerWrapper";


function ParentBtn(params) {

    const [colorToSend, UpdateColoToSend] = useState('black');

    return(

        <div>I will send the colr to Child
            <button onClick={()=>{UpdateColoToSend('blue')}}>Change to Blue</button>
            <button onClick={()=>{UpdateColoToSend('red')}}>Change to red</button>
         

            <ChildBtn  colorDataFromParent ={colorToSend}/>
        </div>
    )  
}


export default ParentBtn;