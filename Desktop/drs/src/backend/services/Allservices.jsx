import React from 'react'
import { useState } from 'react'
import Topbar from '../compoment/Topbar'
import Nav from '../compoment/Nav'
import { Link } from 'react-router-dom'
import './Services.css';
import axios from 'axios'
import { useEffect } from 'react'

export default function Allservices() {
    const [services, setSetvices] = useState()

    const loadServices = async() =>{
        const revieveServices = await axios.get("http://localhost:4000/services")
        setSetvices(revieveServices.data.reverse())

    }

    useEffect(()=>{
        loadServices()
    },[])

    const deleteServices = async _id=>{
        await axios.delete(`http://localhost:4000/services/${_id}`)
        loadServices()
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
             <div className="addservices">
             <Link to="/addservices">   <button className="btn btn-primary mt7"> Add New Services </button> </Link>
             </div>

             <div className="allservices">
                    <table className="table table-primary">
                                <thead className="bg-success">
                                    <tr>
                                    <th scope="col">SN</th>
                                    <th scope="col"> Services Title</th>
                                    <th scope="col">SEO Title</th>
                                    <th scope="col">Action </th>
                                    </tr>
                                </thead>
                         {
                             services?.map((services, index)=>{
                                 return(
                          
                                    <tbody>
                                    <tr>
                                      <th scope="row" key={index}>{index+1} </th>
                                      <td>{services.title}</td>
                                      <td>{services.seotitle}</td>
                                      <td> 
                                         
                                          <Link to={`/editservices/${services._id}`}> <button className="btn btn-success"> Edit</button> </Link> 
                                          <button className="btn btn-primary"> View</button>
                                          <button onClick={()=>deleteServices(services._id)}  className="btn btn-danger"> Delete</button>
                                      
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
    </div>
    </>
  )
}
