import UseCustomHookFormInput from "./UseCustomHookFormIput";



function UserForm(params) {

    const initialFormState ={
        name:'',
        age:''
    }

    const {formValue, handleChange} = UseCustomHookFormInput(initialFormState)
return(
    
    <div>
       <h1>Heyyyy</h1>

       Name<input value={formValue.name} onChange={handleChange} name="name"></input>
       Age<input value={formValue.age} onChange={handleChange} name="age"></input>
    
    {formValue.name}    {formValue.age}
    </div>
)
    
}

export default UserForm;