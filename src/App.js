import React, { useState } from "react";
import "./index.css";

export default function App() {
  const [values, setvalues] = useState({firstName: "", lastName: "", email: ""});
  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false);


  const handleFirstNameInputChange = (event) =>{
    setvalues({...values, firstName:event.target.value});
  }
   const handlelastNameInputChange = (event) => {
     setvalues({ ...values, lastName: event.target.value });
   };
    const handleemailInputChange = (event) => {
      setvalues({ ...values, email: event.target.value });
    };
    const handleSubmit = (event) =>{
      event.preventDeafault();
      if(values.firstName &&
 values.lastName && values.email){
  setValid(true);
 }
      setSubmitted(true);
    }
  return (
    <div className="form-container">
      <form className="register-form" onSubmit={handleSubmit}>
        {submitted && valid ? <div className="success-message"> Success! Thank you for registering </div>: null}
     
        <input
          onChange={handleFirstNameInputChange}
          values={values.firstName}
          id="first-name"
          className="form-field"
          type="text"
          placeholder="First Name"
          name="firstName"
        />
        {submitted && !values.firstName ? <span>Please enter a first name</span>: null}
     
        <input
          onChange={handlelastNameInputChange}
          values={values.lastName}
          id="last-name"
          className="form-field"
          type="text"
          placeholder="Last Name"
          name="lastName"
        />
        {submitted && !values.lastName ? 
          <span>Please enter a last name</span>
         : null}
     
        <input
          onChange={handleemailInputChange}
          values={values.email}
          id="email"
          className="form-field"
          type="text"
          placeholder="Email"
          name="email"
        />
        
        {submitted && !values.email ? <span>Please enter an email address</span>: null}
       
        <button className="form-field" type="submit">
          Register
        </button>
      </form>
    </div>
  );
}

