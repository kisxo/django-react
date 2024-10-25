import React from 'react'
import '../css/Login.css'
import { useNavigate } from 'react-router-dom'
function Login() {
  const navigate = useNavigate();
  const handleSubmit = event =>{
      event.preventDefault();
      navigate('/home');
  };
  return (
    <form onSubmit={handleSubmit}>
    
    <div className="container">
      <label htmlFor="uname"><b>Username</b></label>
      <input required type="text"  placeholder="Enter Username" />
  
      <label htmlFor="psw"><b>Password</b></label>
      <input required type="password" placeholder="Enter Password" />
  
      <button type="submit">Login</button>
    
    </div>
  
  </form>

  )
}

export default Login