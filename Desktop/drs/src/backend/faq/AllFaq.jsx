import React from 'react'
import Topbar from '../compoment/Topbar'
import Nav from '../compoment/Nav'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'

export default function AllFaq() {
  const [faq, setFaq] = useState()

  const loadFaq = async e=>{
    const recivedata = await axios.get('http://localhost:4000/faqs')
    setFaq(recivedata.data.reverse())
  }

  useEffect(()=>{
    loadFaq()
  },[])


  return (
    <> 
    <Topbar/>
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-2">
          <Nav/>
        </div>
        <div className="col-md-10">
            <Link to="/addfaq"> <button className='btn btn-primary mt-5'> Add New FAQ </button> </Link>

          <table class="table">
              <thead class="thead-dark"> 
                <tr>
                  <th scope="col">S.N</th>
                  <th scope="col">Title</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              {
                faq?.map((faq , index)=>{
                  return(
                    <tbody>
                    <tr>
                      
                    <th key={index} scope="row"> {index+1}</th>
                      <td>{faq.title}</td>
                      <td>
                        <Link to={`/editfaq/${faq._id}`}> <button className='btn btn-success'> edit </button> </Link>
                        <button className='btn btn-danger'> delete </button>
                      </td>
                    </tr>
                </tbody>

                  )
                })
              }
     
          </table>
        </div>
      </div>
    </div>
    </>
  )
}
