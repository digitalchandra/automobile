import React from 'react'
import Topbar from '../compoment/Topbar'
import Nav from '../compoment/Nav'
import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import {DatabaseFillAdd} from 'react-bootstrap-icons'
import './Test.css'
export default function AllTest() {

    const [test, setTest] = useState()

    const getTest = async ()=>{
        const test = await axios.get('http://localhost:4000/testpraparation/')
        setTest(test.data.reverse())
    }

    useEffect(()=>{
        getTest()
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
            
             <div className='add-section'>
                 <div className='men-slog'>
                 <h3> Test Preparation </h3>
                 </div>
                <div className=''>
                <Link to={'/addtest'}>   <button className='btn btn-primary'><DatabaseFillAdd/> Add </button> </Link>
                </div>           
             </div>
            <table class="table">
                <thead>
                    <tr>
                    <th scope="col">S.N.</th>
                    <th scope="col">Test Title</th>
                    <th scope="col"> Description</th>
                    <th scope="col">Action </th>
                    </tr>
                </thead>
                {
                    test?.map((test, index)=>{
                        return(
                            <tbody>
                            <tr>
                            <th key={index} scope="row">{index+1}</th>
                            <td>{test.title}</td>
                            <td>{test.shortdescription}</td>
                            <td>
                                <Link to={`/edittest/${test._id}`}> <button className="btn btn-success"> Edit</button> </Link>
                                <button className="btn btn-primary"> view</button>
                              
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
