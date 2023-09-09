import React from 'react'
import Topbar from '../compoment/Topbar'
import Nav from '../compoment/Nav'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'

export default function EditFaq() {
  let navigate = useNavigate()
  let {_id} = useParams();

    const [faq, setFaq] = useState({
        title:"",
        description:"",
    })

    const{title, description} = faq;

    const getFaq = async ()=>{
        const editFaq = await axios.get(`http://localhost:4000/faqs/${_id}`)
        setFaq(editFaq.data)
    }

    useEffect(()=>{
        getFaq();
    })

    const handleSubmit = e=>{
        setFaq({...faq,[e.target.name]:e.target.value})
      }

    const onSumbit = async e=>{
      e.preventDefault();
      await axios.post(`http://localhost:4000/faqs/${_id}`,faq)
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

        <button type="submit" className="btn btn-primary mt-4"> Update </button>
          </form>
        </div>
      </div>
    </div>
    </>
  )
}
