import React from 'react'
import './Product.css'
import Topbar from '../compoment/Topbar'
import Nav from '../compoment/Nav'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
export default function AddProduct() {
  let nagivate = useNavigate();
  const [addProduct, setAddProduct]= useState({
    title:"",
    description:"",
    price:""
  })
  const {title,description,price}=addProduct

  const controlSubmit = e=>{
    setAddProduct({...addProduct,[e.target.name]: e.target.value})
  }

  const onSubmit = async e=>{
    e.preventDefault()
    await axios.post("http://localhost:4000/products/",addProduct)
    nagivate.push("/allproduct")
  }

  return (
    <>
    
   <div className="container-fluid">
       <div className="row">
           <Topbar/>
           
            <div className="col-md-2">
            <Nav/>
            </div>

            <div className="col-md-10">
                <h3> New Product</h3>
                <form onSubmit={e=>onSubmit(e)}>
                  <div class="form-group">
                    
                    <input 
                      type="text" 
                      class="form-control mt-3" 
                      id="exampleInputEmail1" 
                      aria-describedby="title" 
                      placeholder="Product Title"
                      name="title"
                      value={title}
                      onChange={e=>controlSubmit(e)}
                    
                    />
                    <input 
                      type="number" 
                      class="form-control mt-3" 
                      id="exampleInputEmail1" 
                      aria-describedby="emailHelp" 
                      placeholder="price"
                      name="price"
                      value={price}
                      onChange={e=>controlSubmit(e)}
                    />
                    <div class="form-group">
                     
                      <textarea 
                      class="form-control mt-3" 
                      id="exampleFormControlTextarea1" 
                      rows="6"
                      name="description"
                      value={description}
                      onChange={e=>controlSubmit(e)}
                      >

                      </textarea>
                    </div>

                  
                  </div>
                <button type="submit" className="btn btn-primary mt-4"> Submit </button>
                </form>

            </div>
       </div>
   </div>
    </>
  )
}
