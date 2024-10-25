import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../css/Signup.css'

function Signup() {
  const navigate = useNavigate();
  const handleSubmit = event =>{
      event.preventDefault();
      navigate('/');
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="container">
      <h1>Sign Up</h1>
    <span>Email</span>    

      <div className="wrapper">
      <input required type="email" id="email" name="email" placeholder=" "/>
</div><span>Set Username</span>    

<div className="wrapper">
<input required type="text" id="username" name="username" placeholder=" "/>
</div>
<span>Password</span>    

<div className="wrapper">
      <input required type="password" id="password" name="password" placeholder=" "/>
</div><span>Confirm Password</span>    

<div className="wrapper">
      <input required type="password" id="cpassword" name="cPassword" placeholder=" "/>
</div>
     <div className="btn"> <button type="submit">Sign Up</button></div>
      <p>Already Have an Account ? <Link to="/"  style={{ textDecoration: 'none' }}>Login</Link></p>
      </div>

  </form>

  )
}

export default Signup