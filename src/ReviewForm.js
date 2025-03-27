import { useLocation } from "react-router-dom";


function ReviewForm(props) {
    const location = useLocation();
    const { formState } = location.state || {};
   // const { userName } = location.state || {};
   const { formData } = location.state || {};
    return(
        <div>
            <h1 style={{textAlign:'center',display:''}} > I am the review?
          
            </h1>
            {/* {formData} */}
            <div>
      <h1>About Page</h1>
      {/* {formData ? ( */}
        <div>
          <p><strong>Name:</strong> {formData.name}</p>
          <p><strong>Email:</strong> {formData.email}</p>
          <p><strong>Message:</strong> {formData.message}</p>
        </div>
      {/* ) : (
        <p>No data received.</p>
      )} */}
      {/* {userName ? <p>Hello, {userName.name}!</p> : <p>No data received</p>} */}
    </div>
            {/* {props.datas} */}
        </div>
    )
}

export default ReviewForm;