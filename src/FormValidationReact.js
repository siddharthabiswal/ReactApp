import { useEffect, useState } from "react";




function FormValidationReact(params) {

const initialFormState ={
    name:'',
    age:'',
    phone:'',
    mail:''
}    

const initialErrorObj ={}
const [formValue, updateFormValue] = useState(initialFormState)
const [errors, UpdateError] = useState(initialErrorObj)
const [btnState, updateBtnState] = useState(false)

// useEffect(()=>{
//     console.log("i a clled on form hange");
//     valiadateForm();
//     const errorsGet = valiadateForm(formValue);
// UpdateError(errorsGet);
// if(Object.keys(errors).length >=1){
//    updateBtnState(true) 
// }
// else {
//     updateBtnState(false) 
// }
// },[formValue])

function handleChange(e) {
  //  e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    updateFormValue({...formValue,[name]:value})
    
}

function handleReset(e) {
e.preventDefault();
console.log('Reset clicked');
updateFormValue(initialFormState)
}

function handleSubmit(e){
e.preventDefault();
console.log('sbmt clicked');
const errorsGet = valiadateForm(formValue);
UpdateError(errorsGet);
console.log(Object.keys(errors));
console.log("errors got"+errors.name);

    // if(Object.keys(errors).length >=1){
    //    updateBtnState(true) 
    // }
    // else {
    //     updateBtnState(false) 
    // }
}

function valiadateForm(formData){
    console.log(formData);
    //console.log(!formData.mail.trim())
    const errors ={};

    if(!formData.name.trim()){
        errors.name = "name is empty"
    }
    if(!formData.age.trim()){
        errors.age = "age is empty"
    }
    if(!formData.phone.trim()){
        errors.phone = "phone is empty"
    }
    if(!formData.mail.trim()){
        errors.mail = "mail is empty"
    }
    console.log(errors)
    return(errors)

}
    return(
        <div>
            <h1>I am the form validation</h1>

            <form>
                Name<input name="name" value={formValue.name} onChange={handleChange}></input><br/>
                {errors.name && <span>{errors.name}</span>}
                Age:<input name="age" value={formValue.age} onChange={handleChange}></input><br/>
                Phone<input name="phone" value={formValue.phone} onChange={handleChange}></input><br/>
                Email<input name="mail" value={formValue.mail} onChange={handleChange}></input>
                <button onClick={handleSubmit} disabled={btnState}>submit</button>
                <button onClick={handleReset}>Reset</button>
            </form>

            {formValue.name}<br/>{formValue.age}<br/>{formValue.phone}<br/>{formValue.mail}
        </div>
    )
    
}

export default FormValidationReact;