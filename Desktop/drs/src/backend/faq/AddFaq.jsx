import React from 'react'
import Topbar from '../compoment/Topbar'
import Nav from '../compoment/Nav'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'


export default function AddFaq() {
  let navigate = useNavigate()
    const [faq, setFaq] = useState({
        title:"",
        description:"",
    })

    const{title, description} = faq;

    const handleSubmit = e=>{
      setFaq({...faq,[e.target.name]:e.target.value})
    }

    const onSumbit = async e=>{
      e.preventDefault();
      await axios.post('http://localhost:4000/faqs',faq)
      navigate('/allfaq')
    }
  
  return (
    <>
    <Topbar/>
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-2">
          <Nav/>
        </div>
        <div className="col-md-10">
        <p class="lead">
          Add New frequently Asked Qustion
        </p>
          <form onSubmit={e=>onSumbit(e)}>
          <input 
              type="text" 
              class="form-control mt-4" 
              id="exampleInputEmail1" 
              placeholder="FAQ Title "
              name="title"
              value={title}
              onChange={e=>handleSubmit(e)}
          />
        <textarea 
              class="form-control mt-4" 
              id="exampleFormControlTextarea1" 
              rows="10"
              name="description"
              value={description}
              onChange={e=>handleSubmit(e)}

        ></textarea>

        <button type="submit" className="btn btn-primary mt-4"> Post </button>
          </form>
        </div>
      </div>
    </div>
    </>
  )
}
