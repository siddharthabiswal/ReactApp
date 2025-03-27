import { useState } from "react";
import ChildPage from "./ChildPage";





function Parent() {
    const [showChild, setShowChild] = useState(true);

    const [colorFromParent, UpdateColor] = useState();
    return(
        <div style={{border: "2px solid black;", backgroundColor:"yellow", height:"500px"}}>
            <h1>Parent</h1>
            <button onClick={()=>UpdateColor('green')}> Click me</button>
            {showChild ? <ChildPage/>:"helllo"}
            {/* <ChildPage prop={colorFromParent}></ChildPage> */}
        </div>
    )
    
}

export default Parent;