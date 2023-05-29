import React, { useState } from "react"
import "./register.css"
import law from '../register/back.png'
import logo1 from '../register/googlelogo.png'

// import law from '../register/lawback.png'


const Register = () => {

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    reEnterPassword: ""

  })
  const handleChange = e => {
    const { name, value } = e.target
    setUser({
      ...user,
      [name]: value
    })
  }


  return (

    <div className="container">
      
        <div className="left-side">
          {/* <h3>Join the legal community today</h3> */}
          <img src={law} alt="" />
          
          
        </div>
        <div className="register">
          <h1><br /> Create Account <br /><br /></h1>
          <input type="text" name="name" value={user.name} placeholder="Full Name" onChange={handleChange} />
          <input type="text" name="email" value={user.email} placeholder="Email Address" onChange={handleChange} />
          <input type="password" name="password" value={user.password} placeholder="Password" onChange={handleChange} />
          <input type="password" name="reEnterPassword" value={user.reEnterPassword} placeholder="Confirm Password" onChange={handleChange} />
          <br /><br />

          <div>
            <input type="checkbox" />I agree to the <a href="">Terms of Services</a> and <a href="">Privacy Policy</a>
          </div>
          <div 
            className="button" type="submit">Create Account</div>
          <div>
            <span>Already have an account? </span><a href="">Log in</a>
          </div>
          <br /><p > OR </p>

          {/* <div
            className="button-container">
               <div className="logo1" type ="submit">Sign up with Google</div>
             
           
            
            <div 
             className="logo2" type="submit">Sign up with microsoft
            </div>
          </div> */}

          <div className="total">
            <button className="button logo1"  > 
              Sign up with Google
            </button>

            <button className="button logo2">
              Sign up with microsoft
            </button>

          </div>

        </div>
      </div>
    
  )
}

export default Register
