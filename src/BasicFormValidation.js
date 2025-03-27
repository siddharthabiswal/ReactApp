import { useState } from "react";
import UseFormValiadationHook from "./useFormValidationHook";
import UseHandleOnChangeHook from "./UseHandleOnChangeHook";



function BasicFormValidation(params) {

    const initialFormState ={
        name:'',
        email:''
    }
    const [formValue, updateFormValue] = useState(initialFormState);
    const [errors, updateErrorsObj] = useState({})
    
    function handleSubmit(e){
        e.preventDefault();
       const errorObj =UseFormValiadationHook(formValue);
       updateErrorsObj(errorObj);

      
    }

    // function handleOnChange(e) {
    //     const name = e.target.name;
    //     const value = e.target.value;
    //     updateFormValue({...formValue,[name]:value})
    //     updateErrorsObj({...errors,[name]:''})
    // }

    // function validateForm(formValue) {
    //     const errors ={}

    //     if(!formValue.name.trim()){
    //         errors.name ='Name is empty! Please enter name '
    //     }
    //     if(!formValue.email.trim()){
    //         errors.email ='Email is empty! Please enter name '
    //     }

    //     return (errors)
        
    // }
    return(
        <div>I am the basic form 
            <form>
                Name<input name="name" value={formValue.name} onChange={UseHandleOnChangeHook}></input><br/>
                {errors.name ?? <span>{errors.name }</span>}
                Email:<input name="email" value={formValue.email} onChange={UseHandleOnChangeHook}></input>
                {errors.email ?? <span>{errors.email }</span>}
                <button onClick={handleSubmit}>Submit</button>
            </form>
            {formValue.name}  {formValue.email}
        </div>
    )
}

export default BasicFormValidation;