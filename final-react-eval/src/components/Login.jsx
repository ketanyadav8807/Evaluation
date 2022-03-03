import React from 'react'
import { useState } from 'react';
export const Login = ({setLogin}) => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const handelLogin = ()=> {
    if(name && password){
      let data = {
        "name": name,
        "password": password
      }
      fetch("http://localhost:3000/users",{
        method: "POST",
        headers: {
          'Content-Type': 'application/json'},
        body: JSON.stringify(data)
      })
      setLogin(true)
    }
    else{
      alert("Fill detail properly")
    }
  }
  return (
    <div style={{background: "grey" , padding: "50px"}}>

      <form>
        <label>User Name</label>
        <input type="text" onChange={(e)=> setName(e.currentTarget.value)}/>
        <label>Password</label>
        <input type="password" onChange={(e)=> setPassword(e.currentTarget.value)}/>
      </form>



      <button onClick={()=> handelLogin()} style={{background: "aqua" , padding: "5px" , width: "10%" , cursor: "pointer", fontSize: "15px" , marginTop: "40Px"}}>Login</button>
    </div>
  )
}
