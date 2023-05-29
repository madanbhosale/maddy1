// import React,{useState} from"react"
// import "./register.css"

// const Register=()=> {
  
//   const[user,setUser]=useState({
//     name:"",
//     email:"",
//     password:"",
//     reEnterPassword:""

//   })
//   const handleChange= e => {
//     const {name,value} =e.target
//     setUser({
//       ...user,
//       [name]:value
//     })
//   }
// }
  
// return (
//   <div className="register">
//   <h1><br /> Create Account <br /><br /></h1>
//   <input type="text" name="name" value={user.name}placeholder="Full Name" onChange={handleChange} />
//   <input type="text" name="email" value={user.email} placeholder="Email Address" onChange={handleChange} />
//   <input type="password" name="password" value={user.password} placeholder="Password"  onChange={handleChange} />
//   <input type="password"name="reEnterPassword" value={user.reEnterPassword} placeholder="Confirm Password" onChange={handleChange} />
//   <input type="checkbox" >I agree to the <link rel="stylesheet" href="#" ></link></input>
//   <div className="button" type="submit">Register</div>
//   <div>or</div>
//   <div className="button" type="submit">Login</div>
  
// </div>
// )


// export default Register



import React, { useState } from "react";
import "../styles/Login.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMicrosoft } from "@fortawesome/free-brands-svg-icons";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import law from "../images/law.png";

const Login = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    reEnterPassword: "",
    privacyPolicy:""
  });

const handlechange = e => {
  console.log(e.target);
  const {name, value} = e.target;
}

  return (
    <div className="Container">
      <div className="row">
        <div className="col-lg-5  left-col">
          <h3 className="heading-left">"Join The Legal Community Today"</h3>
          <img className="lawimg" src={law} alt="" />
        </div>
        <div className="col-lg-7 right-col">
          <h2>Create An Account</h2>

          <div className="input-container">
            <input className="Login-email" type="text" name="name" onChange={handlechange} value={user.name} placeholder="Full Name"
            />
            <br />
            <input className="Login-email" type="email" name="email" onChange={handlechange} value={user.email} placeholder="Email Address"
            />
            <br />
            <input className="Login-email" type="password" name="password" onChange={handlechange} value={user.password} placeholder="Password"
            />
            <br />
            <input className="Login-email" type="password" name="reEnterPassword" onChange={handlechange} value={user.reEnterPassword} placeholder="Re-enter Password"
            />
          </div><br />
          <input type="checkbox" id="privacy" name="privacy" onChange={handlechange} value="agree" />
          <label for="privacy"> I agree to the <span className="privacy-policy"><b>Terms of Services</b>{" "}</span> and{" "} <span className="privacy-policy"><b>Privacy Policy.</b> </span></label><br></br>
          <button id="Login-btn-continue" >Create Account</button>
          <p>
            <b>
              Already have an account?{" "}
              <span className="privacy-policy">Log in</span>
            </b>
          </p>
          <p className="orbtw">OR</p>
          <button className="Login-btn-google social-width">
            <FontAwesomeIcon icon={faGoogle} /> Sign up with Google
          </button>
          <button className="Login-btn-microsoft social-width">
            <FontAwesomeIcon icon={faMicrosoft} /> Sign up with Microsoft
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;

