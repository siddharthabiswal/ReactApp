import { useEffect, useState } from "react";


function CurrencyConverter() {
const initialVal = 0;
const conversionRateValue  = 100;
 const[amount, updateAmount] = useState(initialVal)   ;
 const[conversionRate, updateConversion] = useState(conversionRateValue);

//   useEffect(()=>{
//     console.log(amount);
//     updateAmount(amount*conversionRate);
//     // updateAmount(conversionRate*amount);
//   })

function handleOnChangeInput(e){
    updateAmount(e.target.value);
    const value=  getExchangeAmount(amount);
    console.log(value)


//updateAmount(amount*conversionRate);
}

function getExchangeAmount(amount){
   // console.log(amount)
    return (amount*conversionRate);

}
    return(
        <div>
            <h1>
                I am the currency convverter
            </h1>
           Enter the amount <input placeholder="Enter is Rs" value={amount} onChange={handleOnChangeInput}/>
            {amount}
        </div>
    )
}


export default CurrencyConverter;