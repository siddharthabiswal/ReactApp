import { useState } from "react";
import { Link } from "react-router-dom";



function ReactForm() {

    const[name, UpdateName] = useState('');
    const [errors, setErrors] = useState({
        name: '',
      });

    function handleChange(e){
        UpdateName(e.target.value);
    }
    

    function handleSubmit(e){
        e.preventDefault();
        if(validate()){

        }
    }

    const validate =()=>{
        let formErrors = {};
        let isValid = true;

        if(!name ||''){
            formErrors.name = 'Name is required';
            isValid = false;
        }
        setErrors(formErrors);
        return isValid;
    }
    return(
        <div>
            <h1 style={{textAlign:"center"}}> Welcome to forms</h1>
            <form>
                <label htmlFor="Name">Name</label>
                <input type="text" name="Name" value={name} onChange={handleChange}/>
                {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}
                <button type="submit" onClick={handleSubmit}>Submit</button>
            </form>
            {name}
          
        </div>
    )
}

export default ReactForm;