
function UseFormValiadationHook(formValue) {
    const errors ={}

    if(!formValue.name.trim()){
        errors.name ='Name is empty! Please enter name '
    }
    if(!formValue.email.trim()){
        errors.email ='Email is empty! Please enter name '
    }

    return (errors)
    
}

export default UseFormValiadationHook;