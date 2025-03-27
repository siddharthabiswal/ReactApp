import { useState } from "react";



function JavaScriptPractice(){
const[removeSpaceString,removeSpaceStringFunction ]= useState('');
const[reverseArrayInput, ReverseArrayFunc] = useState(0);
const [arrayVariable,updateVar] = useState([1,2,3]);
const[str, updateStr] = useState('');
const [senetenceVar, UpdateSentence] = useState('');

const[arrayOfNumner,UpdateArrayOfNumer]= useState([0,1,2]);
const[element,UpdateElement] = useState(0);


function HandleOnChange(event){
    removeSpaceStringFunction(event.target.value);
}

function handleSubmit(e){
    e.preventDefault();
    const newString = removeSpaceString.replaceAll(' ','');
    removeSpaceStringFunction(newString);
    
}
function AddDDataToArray(e) {
    e.preventDefault();
    arrayVariable.push(reverseArrayInput);
    console.log(' Ia m');
    updateVar(arrayVariable);
    console.log(arrayVariable)
}


function stringReverse(inputStr){
//   str.
    console.log(inputStr);
   

}

//stringReverse("hfakjfhaskj");



function handleReverseString(e){
e.preventDefault();
// console.log('handleReverseString');
//str.length();
console.log(str)
console.log(str.split('').reverse().join().replaceAll(',','').toString());
updateStr(str.split('').reverse().join().replaceAll(',','').toString());
}

function handleFirstLetter(e){
e.preventDefault();

//console.log(senetenceVar.split(' '));

// for(let i=0; i<=senetenceVar.split().length;++i){
//     console.log(senetenceVar[i])
// }
}

function handleAddElementToArray(e){
    e.preventDefault();
    arrayOfNumner.push(element);
    console.log(arrayOfNumner);
    UpdateArrayOfNumer(arrayOfNumner)
    
    
}

    return(
        <div>
           
            <form >
            <h3>Remove space</h3>
            Enter the string<input type="text" name="removeSpaceString" value={removeSpaceString} onChange={HandleOnChange}/>
            <button onClick={handleSubmit}>Remove space</button>
            {removeSpaceString}

            <h3>Reverse Array</h3>
            Add element in array<input type="number"  value={reverseArrayInput} onChange={(event)=>{ReverseArrayFunc(event.target.value)}}/>
            {reverseArrayInput}    
            <button onClick={AddDDataToArray}>Add element to array</button> 
             {arrayVariable.map((element)=>{
                return(
                    <li>{element}</li>
                )
             }             )}     

             <h3>Reverse a string</h3>
             Enter String <input value={str} onChange={(event)=>{updateStr(event.target.value)}}/>
             <button onClick={handleReverseString}>Reverse String</button>
             {str.toUpperCase()}

             <h3>Get 1st letter of words</h3>
            enter string<input value={senetenceVar} onChange={(event)=>{UpdateSentence(event.target.value)}}/>
            <button onClick={handleFirstLetter}>Show 1st Letters</button>
             {senetenceVar}


             <h3>More abt Array</h3>

             <input value={element} onChange={(event)=>{UpdateElement(event.target.value)}}/>
             <button onClick={handleAddElementToArray}>Add element</button>
             {/* {arrayOfNumner.map(ele)=>{}}<br/> */}
         
             {arrayOfNumner}
             
             {element}
             <br/><br/><br/><br/><br/><br/><br/>
            </form>
        </div>
    )
}


export default JavaScriptPractice;