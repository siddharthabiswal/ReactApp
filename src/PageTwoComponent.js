import { useLocation } from "react-router-dom";




function PageTwo(props) {
    // const {data} = props.data.va
    const value = props.data;
    const location = useLocation();
   // const { nameTest } = location.state || {};

    const { formState } = location.state || {};
    function displayValue(){
      //  console.log(formState.name);
    }
    return(
        <div>
            <h1>I am the page two</h1>
            <button onClick={displayValue}>Click</button>
            {/* {nameTest} */}
            {/* {formState.name} */}
            {/* {   props.data}
            {props.map(()=>{})} */}
            {formState.name}
        </div>
    )
    
}

export default PageTwo;