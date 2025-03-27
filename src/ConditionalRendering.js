import { useState } from "react";
import One from "./One";
import Two from "./Two";





function Conditional() {
    const[value,UpdateValue] = useState(false);
    if(!value){
        return <One/>
    } return <Two/>
}

export default Conditional;