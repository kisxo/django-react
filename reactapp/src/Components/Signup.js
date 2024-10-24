import React,{useState } from "react";
import axios from "axios"
import {BrowserRouter as useNavigator,Link} from "react-router-dom"

function Signup() {

    const history=useNavigator();
    const [email,setEmail] = useState('')
    const [password , setPassword]=useState('')
    
    async function submit(e){
        e.preventDefault();
        try{
            await axios.post("localhot://3000",{
                email,password
            })
            .then(res=>{
                if(res.data==="exist"){
                   alert("User Already Exist")
                }
                else if(res.data==="notexist"){
                    history("/Home",{state:{id:email}})
                }
            })
            .catch(e=>{
                alert("Wrong details")
                console.log(e);
                
            })
        }
        catch(e){
            console.log(e);
        }
    }
  return (
    <div className="Signup">
        <h1>SignUp</h1>
    <form action="POST">
        <input type="email" onChange={(e)=>{setEmail(e.target.value)}} placeholder="Enter e-mail" />
        <input type="password" onChange={(e)=>{setPassword(e.target.value)}} placeholder="Enter Password" />
        <input type="submit" onClick={submit} />
     </form>
     <br/>
     <p>OR</p>
     <br/>
     <Link to="/login">Login</Link>
    </div>
  )
}

export default Signup
