import React from 'react'
import { useState } from 'react'
import Header from '../../component/Header'
import axios from 'axios'

export default function Register() {

  const [user, setUser] = useState({
    fullname:"",
    email:"",
    password:""
  });
 
  const{fullname, email, password} = user;

  const onInputChange = e =>{
    setUser({...user,[e.target.name]:e.target.value})
  }


  const onSubmit = async e=>{
    e.preventDefault();
    await axios.post("",user)

  }


  return (
    <>
    <Header/>
    
    <div className="container"> 
    <div className="row">
      <div className="col-md-4">
      <h3> Register </h3>

    <form onSubmit={e=>onSubmit(e)}>
    <label for="exampleInputPassword1">Full Name</label>
      <input 
          type="text" 
          class="form-control" 
          placeholder="Full Name"
          value={fullname}
          name="fullname"
          onChange={e=>onInputChange(e)}
      />

     <label for="exampleInputPassword1"> Email Address</label>
      <input 
            type="text" 
            class="form-control" 
            placeholder="Email" 
            value={email} 
            name="email"
            onChange={e=>onInputChange(e)}
      />
      <label for="exampleInputPassword1">Password</label>
      <input 
            type="password" 
            class="form-control"
            placeholder="password"
            value={password}
            name="password"
            onChange={e=>onInputChange(e)}
      />
      <hr />
      <button type="submit" className="btn btn-primary"> Registerd </button>
    </form>
      </div>
    </div>

    </div>

    </>
  )
}
