import { useState } from "react";


function FormValidationComponent() {

    const [formData, setFormData] = useState({
        Name: '',
        Age: '',
        Address:""
      });


    function handleSubmit(e){
        e.preventDefault();
        console.log("handle submit");
        console.log(formData)
    }
   
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value
        });
      }

    return(
        <div> 
            <form onSubmit={handleSubmit}>
            <input
            type="text"
            id="name"
            name="name"
            value={formData.Name}
            onChange={handleChange}
          />
                <label htmlFor="name">Name</label>
                <input id ="name"type="text" name="Name" value={formData.Name} onChange={handleChange}/>
                <label >Age</label>
                <input name="Age" value={formData.Age} onChange={handleChange}/>
                <label>Address</label>
                <input name="Address" value={formData.Address} onChange={handleChange}/>

                <button type="submit">submit</button>
                {/* {formData} */}
            </form>
        </div>
    )
    
}


export default FormValidationComponent;