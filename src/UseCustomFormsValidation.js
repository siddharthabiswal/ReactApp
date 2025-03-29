


function UseCustomHookFormsValidation(formValue) {
    const errorObj ={}

    if(!formValue.name.trim()){
        errorObj.name ='Name is empty'
    }
    if(!formValue.age.trim()){
        errorObj.age ='Age is empty'
    }
    return errorObj; 
}

export default UseCustomHookFormsValidation


