import React, { memo } from "react";





function ChildRerenderDemo({PassFunctionToChildAsProp}) {
    
    function ChildFunOne(){
        console.log('ChildFunOne called')
    }

    return(
        <div>
            <h1>Hello I am the Child component</h1>
            {ChildFunOne()}
        </div>
    )
}


export default React.memo(ChildRerenderDemo);
//export default ChildRerenderDemo;