import React, { useState } from 'react'
import '../css/Login.css'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
function Login() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
const handleSubmit = ()=>{
  const hostname = "https://"+window.location.host;

  

  async function submit(event) {
    event.preventDefauld();

    try{
      await axios.post(hostname+"/_allauth/app/v1/auth/login",{
        email,password
      }).then(res=>{
        if(res.data=="exist"){
        alert("Uaer Already Exist")
      }else if(res.data=="notexist"){
        navigate("/home",{state:{id:email}})
      }
      }).catch(event=>{
        alert("Wrong Details")
        console.log(event)
      })
    }
    catch(event){
      console.log(event)
    }
  }
}
  
  return (
    <form onSubmit={handleSubmit}>
      <div className="container">
      <h1>Login</h1>
    <span>Email</span>    

      <div className="wrapper">
      <input required type="email" id="email" onChange={(event)=>{setEmail(event.target.value)}} name="email" placeholder=" "/>
</div>
<span>Password</span>    

<div className="wrapper">
      <input required type="password" onChange={(event)=>{setPassword(event.target.value)}} id="password" name="email" placeholder=" "/>
</div>
      <div className="btn"><button type="submit">Login</button></div>
      <p>New User ? <Link to="/signup"  style={{ textDecoration: 'none' }}>Signup</Link></p>
      </div>

  </form>

  )}


export default Login