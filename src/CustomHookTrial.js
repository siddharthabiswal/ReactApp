import ChangeColor from "./ChangeColor";



function CustomHooKUsageComp() {
    
   // ChangeColor('color');
   
    return(
        <div>
         
           
            <h1>Heyy  </h1>
           <button id="btnId" onClick={()=>{ChangeColor('blue','btnId')}}>Click</button>
           <ChangeColor></ChangeColor>
        </div>
    )
}


export default CustomHooKUsageComp;