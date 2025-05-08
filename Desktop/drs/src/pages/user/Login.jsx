import React from 'react'
import Header from '../../component/Header'
import { useState } from 'react'
import axios from 'axios';
export default function Login() {

    const [login, setLoing] = useState({
      email:"",
      password:""
    })
    const{email, password} = login;

    const handleChange =e=>{
      setLoing({...login,[e.target.name]: e.target.value})
    }

    const onSubmit = async e=>{
      e.preventDefult()
      await axios.post("",login)
    }

  return (
    <>
    <Header/>
    <div className="container"> 
    <h3> Login</h3>
    <form onSubmit={e=>onSubmit(e)}>
     <label for="exampleInputPassword1">Username</label>
      <input 
          type="text" 
          className="form-control" 
          placeholder="username"
          name="email"
          value={email}
          onChange={e=> handleChange(e)}
      />
      <label for="exampleInputPassword1">Password</label>
      <input 
          type="password" 
          className="form-control" 
          placeholder="password"
          name="password"
          value={password}
          onChange={e=> handleChange(e)}
      />
      <hr />
      <button className="btn btn-primary"> Login </button>
    </form>
    </div>
    </>
  )
}
