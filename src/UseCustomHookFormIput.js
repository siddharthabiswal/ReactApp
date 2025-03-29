import { useState } from "react";



function UseCustomHookFormInput(initialFormState) {

    const [formValue, UpdateFormValue] = useState(initialFormState);

    function handleChange(e) {
        const name = e.target.name;
        const value = e.target.value;
        UpdateFormValue({...formValue,[name]:value});
    
    }
    return{formValue,handleChange};
}

export default UseCustomHookFormInput;