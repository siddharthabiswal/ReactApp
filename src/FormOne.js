import { useState } from "react";
import { data, Form,useNavigate  } from "react-router-dom";
import ReviewForm from "./ReviewForm";



function FormOne() {
    const navigate = useNavigate();
    const [formState, UpdateState]= useState({
        name:'',
        phone:''
    })
    const [demo,updarte]= useState('jhgjhg');
    const [name, setName] = useState('');
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
      });
  
    function handleOnchange(event) {
        const name=  event.target.name;
        const value = event.target.value;
      
        setFormData({...formData,[name]:value})
    }
    
    function handleSubmit(event) {
        event.preventDefault();
        // navigate('/Review');
        //navigate('/Review', { state:  'formState'  });
      //  navigate('/Review', { state: { demo } });
      //  navigate('/Review', { state:formState });
navigate('/Review', { state: { formData } });
        
    }
    return(
        <div>
        <h1 style={{textAlign:"center"}}></h1>
        <form onSubmit={handleSubmit}>
            Name:<input name="name" onChange={handleOnchange} type="text" value={formState.name}></input><br/>
            Phone:<input name="phone" onChange={handleOnchange} type="text" vaue={formState.phone}></input>
            <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
        />
            <button type="submit" >Submit</button>
       {formState.name}{formState.phone}
       <input 
            type="text" 
            name="name" 
            value={formData.name} 
            onChange={handleOnchange} 
            placeholder="Enter your name" 
          />
               

    
          <label>Email:</label>
          <input 
            type="email" 
            name="email" 
            value={formData.email} 
            onChange={handleOnchange} 
            placeholder="Enter your email" 
          />
    

   
          <label>Message:</label>
          <textarea 
            name="message" 
            value={formData.message} 
            onChange={handleOnchange} 
            placeholder="Enter your message" 
          />

        </form>
                    <div >
                   
                    </div>
                    
         
        
        
        </div>
    )
}


export default FormOne;