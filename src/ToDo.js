import { useState } from "react";

function ToDo() {
    
    const [element, UpdateElement] = useState('');
    const [array, UpdateArray] =useState([]);
    const [elementIndex, UpdateElementIndex] = useState();

    function handleBtnClick(){
        UpdateArray([...array,element]);
    }

    function handleDone(params) {
        console.log("done selected"+params)
    }


    return(

        <div>

        <h1>Hey I am the to do list</h1>
        Enter the element<input onChange={(event)=>{UpdateElement(event.target.value)}}/>
        <button onClick={handleBtnClick}>Add</button>

       
        {array.map((ele,index)=>{
            // const value =index;
          //  UpdateElementIndex(index)
            return(<li>{ele}{index}<button onClick={handleDone(elementIndex)}>Done</button></li>)
        })}
        </div>

        
    )

}

export default ToDo;

