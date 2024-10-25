import React, { useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import '../css/Signup.css'
import { ToastContainer } from 'react-toastify'
import { handleError, handleSuccess } from './error'

function Signup() {
  const [signUpInfo , setSignupInfo] = useState({
    email: '',
    username:'',
    password: ''

  })
  const navigate = useNavigate();
  const handleChange = (e)=>{
  const {name,value} = e.target;
  const copysignUpInfo = {...signUpInfo};
  copysignUpInfo[name]=value;
  setSignupInfo(copysignUpInfo);
  

  }
  console.log('signUpInfo ->',signUpInfo);
  
  const handleSignup = async (e)=>{
    e.preventDefault();
    const {email,username,password} = signUpInfo;
      if(!email || !username || !password){
        return handleError('All Filled are required')
      }
      try{
        const url = "http://localhost:3000";
        const response = await fetch(url,{
          method:"post",
          headers:{
            'content-type':"application/json"
          },
          body: JSON.stringify(signUpInfo)
        });
        const result = await response.json();
       const {success, message , error} = result;
       if(success){
        handleSuccess(message);
        setTimeout(()=>{
          navigate('/login')
        },2000)
       }else if(error){
        const details = error?.details[0].message;
        handleError(details)
       }else if(!success){
        handleError(message);
       }
      }catch(err){
          handleError(err);
      }
  }
  return (
    <form onSubmit={handleSignup}>
      <div className="container">
      <h1>Sign Up</h1>
    <span>Email</span>    

      <div className="wrapper">
      <input  type="email" id="email" onChange={handleChange} value={signUpInfo.email} name="email" placeholder=" "/>
</div><span>Set Username</span>    

<div className="wrapper">
<input  type="text" id="username" onChange={handleChange} value={signUpInfo.username} name="username" placeholder=" "/>
</div>
<span>Password</span>    

<div className="wrapper">
      <input  type="password" id="password" onChange={handleChange} value={signUpInfo.password} name="password" placeholder=" "/>
</div>
 <div className="btn"> <button type="submit">Sign Up</button></div>
      <p>Already Have an Account ? <Link to="/"  style={{ textDecoration: 'none' }}>Login</Link></p>
      </div>
      <ToastContainer/>

  </form>

  )
}

export default Signup