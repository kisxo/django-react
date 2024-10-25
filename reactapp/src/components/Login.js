import React from 'react'
import '../css/Login.css'
import { Link, useNavigate } from 'react-router-dom'
function Login() {
  const navigate = useNavigate();
  const handleSubmit = event =>{
      event.preventDefault();
      navigate('/home');
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="container">
      <h1>Login</h1>
    <span>Email</span>    

      <div class="wrapper">
      <input required type="email" id="" name="email" placeholder=" "/>
</div>
<span>Password</span>    

<div class="wrapper">
      <input required type="password" id="" name="email" placeholder=" "/>
</div>
      <div className="btn"><button type="submit">Login</button></div>
      <p>New User ? <Link to="/signup"  style={{ textDecoration: 'none' }}>Signup</Link></p>
      </div>

  </form>

  )
}

export default Login