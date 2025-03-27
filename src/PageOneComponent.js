import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PageTwo from "./PageTwoComponent";




function PageOne() {
    const navigate = useNavigate();
    const [nameTest, updateName] = useState('rasm');
    const[formState, updateFormState]= useState({
        name:'rr',
        age:'rrr'
    })
    
    function handleSubmit(event){
        event. preventDefault();
        console.log('sbmt called');
        navigate('/PageTwo', { state: { formState } })
    }

    function handleOnChange(event){

        const name = event.target.name;
        const value = event.target.value;
        updateFormState({...formState,[name]:value})

    }
    return(
        <div><h1 style={{textAlign:"center"}}>I am page one</h1>
        
        <form onSubmit={handleSubmit}>
            Name:<input onChange={handleOnChange} value={formState.name} name="name"></input>
            Age:<input onChange={handleOnChange} value={formState.age} name="age"></input>
            <button type="submit">Submit</button>
        </form>
        {formState.name} {formState.age}
        {/* <PageTwo data={formState}/> */}
        </div>
    )
    
}

export default PageOne;