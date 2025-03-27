

function FuncBorrowing(){


    const ObjOne= {
        name:"Ram",
        age:"23"
    }
    const ObjTwo= {
        name:"Rahim",
        age:"23"
    }
    // function Print(state) {

    //    console.log(this.name+""+state);
    // }

       
    const newFunc =    function Print(state) {

        console.log(this.name+""+state);
     }

    newFunc.apply(ObjOne,["Delhi"]);
    newFunc.call(ObjTwo,"");
 
    //  newFunc()

    return(
        <div>
            <h1>FuncBorrowing</h1>
            {/* {Print()} */}
            
        </div>
    )
}

export default FuncBorrowing;