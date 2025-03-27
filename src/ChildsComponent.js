

function Children(props) {
    
    return(
        <div>
            <h1>I am children
                {props.data.map((jsonData)=>{
                    return(
                        <li>{jsonData.userId}{jsonData.title}</li>
                        
                    )
                })}
            </h1>
        </div>
    )
}

export default Children;