import { useMemo, useState } from "react"


function UseMemoDemo(){

    const[clickCounter,UpdateCounter] =useState(0);
    const[color,UpdateColor] =useState('red');
    // const value = expensiveFunc()
    const expensiveThings = function expensiveFunc(){
        console.log("I mmmmm")
        for (let i = 0; i < 10000; i++) {
            // num += 1;
            console.log(i);
          }

        //   return(2);
    }
    useMemo( expensiveThings,[color])
    // function expensiveFunc(){
    //     for (let i = 0; i < 10000; i++) {
    //         // num += 1;
    //         console.log(i);
    //       }

    //     //   return(2);
    // }



    return(
        <div>
            <button onClick={()=>{UpdateColor('black')}}>Click me color</button>

            <button onClick={()=>{UpdateCounter(clickCounter+1)}}>Click me </button>
            {clickCounter}
            {expensiveThings}
      
        </div>
    )
}

export default UseMemoDemo;