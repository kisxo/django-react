import React, { useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import '../css/Login.css'
import { ToastContainer } from 'react-toastify'
import { handleError, handleSuccess } from './error'

function Login() {
  const [loginInfo , setloginInfo] = useState({
    email: '',
    password: ''

  })
  const navigate = useNavigate();
  const handleChange = (e)=>{
  const {name,value} = e.target;
  const copyloginInfo = {...loginInfo};
  copyloginInfo[name]=value;
  setloginInfo(copyloginInfo);


  }
  console.log('loginInfo ->',loginInfo);

  const handleLogin = async (e)=>{
    e.preventDefault();
    const {email,password} = loginInfo;
      if(!email || !password){
        return handleError('All Filled are required')
      }
      try{
        const url = "http://localhost:3000/";
        const response = await fetch(url,{
          method:"post",
          headers:{
            'content-type':"application/json"
          },
          body: JSON.stringify(loginInfo)
        });
        const result = await response.json();
        console.log(result)
       const {success, message , jwtToken,username, error} = result;
       if(success){
        // console.log(success)
        handleSuccess(message);
        localStorage.setItem('token',jwtToken)
        localStorage.setItem('loggedInuser',username)

        setTimeout(()=>{
          navigate('/home')
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
    <form onSubmit={handleLogin} >
      <div className="container">
      <h1>Login</h1>
    <span>Email</span>

      <div className="wrapper">
      <input  type="email" id="email"  onChange={handleChange} value={loginInfo.email} name="email" placeholder=" "/>
</div>
<span>Password</span>

<div className="wrapper">
      <input  type="password"  onChange={handleChange} value={loginInfo.password} id="password" name="password" placeholder=" "/>
</div>
      <div className="btn"><button type="submit">Login</button></div>
      <p>New User ? <Link to="/signup"  style={{ textDecoration: 'none' }}>Signup</Link></p>
      </div>
      <ToastContainer/>

  </form>

  )}


export default Login