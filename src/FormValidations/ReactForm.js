import { useState } from "react";




function ReactFormComponent(params) {
    
    const [formState, UpdateFormState] = useState(
        {name:'',
         phone:''   
        }
    )

    const [isSbmtClicked, UpdateSubmitClick] = useState(false)
    function handleSubmit(event) {
       // alert(formState.name);
       event.preventDefault();
       UpdateSubmitClick(true)
    }

    return(
        <div>
            <h1>User Details</h1>
            <form>
            enter name:<input name="name" value={formState.name} onChange={(event)=>{
               const name = event.target.name;
               const value = event.target.value;
               UpdateFormState({...formState, [name]:value})
            }}/>
            enter phone:<input name="phone" value={formState.phone} onChange={(event)=>{
               const name = event.target.name;
               const value = event.target.value;
               UpdateFormState({...formState, [name]:value})
            }}/>
            <button onClick={handleSubmit}>Submit</button>
            </form>
            {isSbmtClicked && <div> {formState.name}{formState.phone}</div>}
           
            </div>
            
      
    )
}

export default ReactFormComponent;