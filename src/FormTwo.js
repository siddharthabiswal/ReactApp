import { useState } from "react";


function FormTwoComponent() {

    // const initialFormState= {
    //     name:'',
    //     age:'',
    //     address:'',
    //     phone:''
    // }

    const[formState, UpdateFormState]= useState({
        name:'',
        age:'',
        address:'',
        phone:''
    });
    function HandleOnchange(event) {

        const name= event.target.name;
        const value= event.target.value;
        UpdateFormState({...formState,[name]:value})

        
    }

    function HandleSubmit(event) {
        event.preventDefault();
        console.log('submt');    
        console.log(formState)
    }
    
    return(
<div>
    <form onSubmit={HandleSubmit}>
        <input name='name' value={formState.name} onChange={HandleOnchange}/>
        <input name='age' value={formState.age} onChange={HandleOnchange}/>
        <input name='address' value={formState.address} onChange={HandleOnchange}/>
        <input name='phone' value={formState.phone} onChange={HandleOnchange}/>
        <button type="submit"></button>
    </form>
</div>

    )
}

export default FormTwoComponent;