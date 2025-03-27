import { useState } from "react";
import { useNavigate } from "react-router-dom";





function FormComponent() {
    //TO DEND DATA TO OTHER COMPO   

    const navigate = useNavigate();

    const initialFormState ={
        name: '',
        age: '',
        email:''

    };

    const[errors, updateErrors] = useState({
        name:"",
        age:"",
        email:""
    });

    
    const [formState, UpdateFormState] = useState(initialFormState);


    function HandleSubmit(event) {

      //  event.preventDefault();
      //  console.log(formState);
        navigate("/Review")
    
    }

    function HandleInputChange(event) {
        const name = event.target.name;
        const value = event.target.value;

        UpdateFormState({...formState,[name]:value})
    }

    return(
        <div>
           

            <form onSubmit={HandleSubmit}>
            UserName <input name="name" onChange={HandleInputChange} value={formState.name}/><br/>
            UserAge<input name="age" onChange={HandleInputChange} value={formState.age}/><br/>
            User Email<input name="email" onChange={HandleInputChange} value={formState.email}/><br/>

            <button type="submit"> Submit</button>
            </form>
        </div>
    )
    
}


export default FormComponent;