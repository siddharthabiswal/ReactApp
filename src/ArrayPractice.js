

function ArrayPractice(params) {

    const demoArray = [1,89,90,88,5,3,4,67];
    const array = [123, 67, 90, 89,10,5,1];
    const arrayTYwo = [90.9876, 90];
    const newAray = array.concat(arrayTYwo);
    

    const arrayOfObjects = [{name:"ram", salary: 2000},{name:"ramu", salary: 500},{name:"ramdin", salary: 3000},{name:"rass", salary: 1000}]

    // console.log(newAray )
    array.sort((a,b)=>{return(a-b)});
    // console.log(array.reverse());

   const mappedAray = array.filter((element)=>{
    return (element>10)
   });
    console.log(mappedAray);

    const filteredSalaryObject =arrayOfObjects.filter((ele)=>{
        return(ele.salary>500);
    })
     console.log(filteredSalaryObject);

     const newArray = demoArray.filter((ele)=>{
        return((ele != 67 && ele != 5 ) )
     })

     console.log("new Array hola"+ newArray)
    return(
        <div>
            <h1> Array practice</h1>
            <div>
              
            </div>
        </div>
    )

}

 export default ArrayPractice;