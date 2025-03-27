import { useContext } from "react";
import ApplicationStateContext, { StateContext } from "./StateContext";







function ContextConsumerPage(params) {
    //const {count, setCount} = useContext(ApplicationStateContext);
    const {count, setCount} = useContext(StateContext)
return(
    <div>
        {count}
        <h1>here we will use the context cretaed</h1>
        <button onClick={()=>{setCount(count+2)}}>Click to add</button>
    </div>
)

}

export default ContextConsumerPage;