import { useState } from "react";





function FormPracticeComponent() {

    const[formState, updateFormState]= useState({
        name:"",
        age:"",
        email:""
    });

    const[errors, updateErrors] = useState({
        name:"",
        age:"",
        email:""
    });
    
    function checkFormValidity() {
        let isFormValid = true;
        const newError = {};

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if(!formState.name){
            newError.name="Name is empty";
            isFormValid = false;
        }
        if(!formState.age){
            newError.age="Age is empty";
            isFormValid = false;
        }
        if(formState.email==''){
            newError.email="Email is empty";
            isFormValid = false;
        }else{
            if(!emailPattern.test(formState.email)){
                newError.email="Email is wrong";
                isFormValid = false;
            }
        }
      
        updateErrors(newError);
        return (isFormValid);
    }

    function handleSubmit(event){
        event.preventDefault();
        console.log('sbmt click');
        if(checkFormValidity()){
            alert('form valid')
        }
        else{
            alert('form invalid')
        }
    }
    
    function handleOnChange(event) {
        event.preventDefault();
        const name= event.target.name;
        const value= event.target.value;
        updateFormState({...formState,[name]:value});

    }
    return(
        <div>
            <h1>I am the form</h1>
            <form onSubmit={handleSubmit}>
               Name: <input name="name" value={formState.name} onChange={handleOnChange}></input><br/>
               Age: <input name="age" value={formState.age} onChange={handleOnChange}></input ><br/>
                Email:<input name="email" value={formState.email} onChange={handleOnChange}></input><br/>
                {errors.email && <span style={{ color: 'red' }}>{errors.email}</span> }
                <button type="submit">Submit</button>
            </form>
            {formState.name}{formState.age}{formState.email} 

            {}
        </div>
    
    )
}


export default FormPracticeComponent;