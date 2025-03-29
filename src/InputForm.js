import { useState } from "react";
import UseCustomHookFormInputs from "./CustomHookFormInputs"
import UseCustomHookFormsValidation from "./UseCustomFormsValidation";



function InputForm(params) {
    const initialFormState ={
        name:'',
        age:''
    }
   const {formValue, handleChange} = UseCustomHookFormInputs(initialFormState);

   const [errors, updateErrors] = useState({});

   function handleSubmit(){
  
    const erors = UseCustomHookFormsValidation(formValue);
    console.log(erors);
    updateErrors(erors);
   }

//    function validateForm(formValue){
//     const errorObj ={}

//     if(!formValue.name.trim()){
//         errorObj.name ='Name is empty'
//     }
//     if(!formValue.age.trim()){
//         errorObj.age ='Age is empty'
//     }
//     return errorObj;
//    }
    return(
        <div>
            Hey I am the form
            Name:<input name='name' value={formValue.name} onChange={handleChange}></input><br/>
            {errors.name && <span>{errors.name}</span>}
            Age:<input name="age" value={formValue.age} onChange={handleChange}></input>
            {errors.age && <span>{errors.age}</span>}
            {formValue.age} 
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}


export default InputForm