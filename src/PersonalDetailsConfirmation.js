import { useEffect, useState } from "react";


function PersonalDetailsConfirmation(props){
    const initialFormState= {
        name:'',
        number: '',
        address: '',
        id:''
    }

    const [dataToVerify, UpdateData] = useState(initialFormState)
    console.log(props.data);

    useEffect(()=>{
        console.log("I am cllaed")
        UpdateData(props.data)
    },[props] )
   
    return(<div>
        <h1>  Please reverify your details</h1>
        <form>
        Name: <input name="name"   value={dataToVerify.name} onChange={()=>{}}/><br/>
               Number: <input name="number"  value={dataToVerify.number}onChange={()=>{}}/><br/>
               Address <input name="address" value={dataToVerify.address} onChange={()=>{}}/><br/>
               ID Details <input name="id" value={dataToVerify.id} onChange={()=>{}}/><br/>
        </form>
    </div>)

}


export default PersonalDetailsConfirmation;