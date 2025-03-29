import { useState } from "react";



function UseCustomHookFormInputs(initialFormState) {

    const[formValue, updateFormValue] = useState(initialFormState);

    function handleChange(e) {
        const name = e.target.name; 
        const value = e.target.value; 
        updateFormValue({...formValue, [name]: value}) ; 
         
    }
    return{formValue,handleChange};
    
}

export default UseCustomHookFormInputs;