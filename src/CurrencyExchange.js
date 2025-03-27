import { useEffect, useState } from "react"



function CurrencyExchange() {

    const [inrValue, UpdateInrValue] = useState(0);
    const [usdCurrency, UpdateUsdCurrency] = useState();
    useEffect(()=>{
        console.log(' iam called');
    },[inrValue])

    function Upda(params) {
        
    }

    return(
        <div>
            <h>Currency Exchange</h>
           Enter currency in INR <input type="number" onChange={(eve)=>{UpdateInrValue(eve.target.value)}}/>
           {inrValue}
           value in USD={inrValue*80}
        </div>
    )
    
}


export default CurrencyExchange;