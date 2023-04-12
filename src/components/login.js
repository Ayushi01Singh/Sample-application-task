// import profile from "./images/image.jpg";
import Home from "./home";
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"
import Navbar from "./navbar/navbar";

function Login(){
  
     const navigate=useNavigate() 

    const [username, setUserName]=useState('')
    const [password, setPassword]=useState('')

    const handleLogin=()=>{
        console.log(username,password)
        const data={email:username, password:password}
        axios.post('https://reqres.in/api/login',data)
        .then((res)=>{
          console.log(res.data.token,17)
          if(res.data.token){
            // navigate("/navbar")

            navigate("/home")
            // navigate("/contact")
          }
        })
        .catch((err)=>{
          console.log(err,20)
        })
    }

    return(
<div className="main">
       <div className="sub-main">
         <div>
           <div className="imgs">
             <div className="container-image">
             </div>
           </div>
           <div>
             <h1>Login Page</h1>
             <div>
               <input type="text" placeholder="user name" value={username}  onChange={(e)=> {
                setUserName(e.target.value)
               }}/>
             </div>
             <div className="second-input">
               <input type="password" placeholder="password" value={password } onChange={(e)=> {
                setPassword(e.target.value)
               }}/>
             </div>
            <div className="login-button">
            <button onClick={handleLogin}>Login</button>
            </div>
              <p className="link">
                <a href="#">Forgot password ?</a> Or<a href="#">Sign Up</a>
              </p>
           </div>
         </div>
       </div>
      </div>
    )
}
export default Login;