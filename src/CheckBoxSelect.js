import { useState } from "react";


function CheckBoxSelect() {

    const [footbalInput, UpdateFootbal] =useState(false);
    const [cricketInput, UpdateCricket] =useState(false);
    const [hockeyInput, UpdateHockey] =useState(false);

    const [checkBoxStatus, UpdateCheckBoxStatus] =useState(false);
    
    function handleClick(){
        console.log('clk');
        if(footbalInput == true){
            UpdateFootbal(false)
        }
        if(footbalInput == false){
            UpdateFootbal(true)
        }
    }


    function handleClickCricket() {

        if(cricketInput == true){
            UpdateCricket(false)
        }
        if(cricketInput == false){
            UpdateCricket(true)
        }
        
    }

    function handleButtonSubmit(e) {
        e.preventDefault();
        UpdateCricket(true)
      
      
        UpdateFootbal(true)
        
    }

    return(

        <div>
            <h1> This is a select check box </h1>
            Football<input name="football" type="checkbox" checked={footbalInput} value={footbalInput} onClick={handleClick}/>
            Cricket<input name="cricket" type="checkbox" checked={cricketInput} value={cricketInput} onClick={handleClickCricket}/>
            Hockey<input name="hockey" type="checkbox" checked={checkBoxStatus} value={hockeyInput}/>

            <button onClick={handleButtonSubmit}>Check All</button>
            {footbalInput}
        </div>
    )
}


export default CheckBoxSelect;