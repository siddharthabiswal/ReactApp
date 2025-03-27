import { useState } from "react";


function AddingElementsInArray() {

    const [array, UpdateArray] = useState([]);
    const [element, UpdateElement] = useState('');

    function hanldeAdd(){
        UpdateArray([...array, element]); //it makes a copy of the array and insert the element into that copy
        UpdateElement('');
        console.log(array);
    }

    function doneClick(params) {
        console.log(params)
        
    }
    return(
        
        <div>
           
           Enter the value to add <input value={element} onChange={(event)=>{UpdateElement(event.target.value)}}/>
           <button onClick={hanldeAdd}> Add element</button>
           {array.map((element, index)=>{
            return(
                <li>{element} {index}<button onClick={(index)=>{console.log(index)}}>done</button></li>
            )
           })}
        </div>
    )

}

export default AddingElementsInArray;