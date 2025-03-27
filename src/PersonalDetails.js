import { useState } from "react";
import PersonalDetailsConfirmation from "./PersonalDetailsConfirmation";


function PersonalDetails(){

    const initialFormState= {
        name:'',
        number: '',
        address: '',
        id:''
    }
    const [PersonalDetailsData, UpdateData] =useState(initialFormState);
    const [submitBtnClicked, UpdateBtnStatus] = useState(false);
    function hanldeSubmit(event) {
        event.preventDefault();
        console.log('sbm called');
        UpdateBtnStatus(true)
    }

    function hanldeReset(event) {
        event.preventDefault();
        console.log('Reset called');
        UpdateData(initialFormState)
    }

    
    function handleInputOnChnage(event) {
        event.preventDefault();
        console.log('cc')
        const name = event.target.name;
        const value = event.target.value;
        UpdateData({...PersonalDetailsData, [name]:value})   
        
    }

    return(

        <div>
            <h1>Hey Please fill the details</h1>
            <form>
               Name: <input name="name"  onChange={handleInputOnChnage} value={PersonalDetailsData.name}/><br/>
               Number: <input name="number" onChange={handleInputOnChnage} value={PersonalDetailsData.number}/><br/>
               Address <input name="address" onChange={handleInputOnChnage} value={PersonalDetailsData.address}/><br/>
               ID Details <input name="id" onChange={handleInputOnChnage} value={PersonalDetailsData.id}/><br/>

                <button onClick={hanldeSubmit}>Submit</button>
                <button onClick={hanldeReset}>Reset</button>
            </form>

            {submitBtnClicked && <div><PersonalDetailsConfirmation data={PersonalDetailsData}></PersonalDetailsConfirmation></div>}

        </div>
    )
}

export default PersonalDetails;