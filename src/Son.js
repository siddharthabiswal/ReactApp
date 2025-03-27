

function Son({sendDataToParent }) {
    const data ="I am data from child";
    
    function handleButtonClick(){
        sendDataToParent(data)
    }
    
    return(
        <div>
            <h1>I am the son</h1>
            <button onClick={handleButtonClick}>Send data to father</button>
        </div>
    )
}


export default Son;