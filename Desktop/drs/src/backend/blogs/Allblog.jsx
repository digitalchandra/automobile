import React from 'react'
import Nav from '../compoment/Nav'
import Topbar from '../compoment/Topbar'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import{Trash,Eye,PencilFill} from 'react-bootstrap-icons'

import './Blog.css'
export default function Allblog() {
    const [getData, setGetData] = useState();

    const loadData = async ()=>{
        const reviceData = await axios.get("http://localhost:4000/blogposts")
        setGetData(reviceData.data.reverse())
    }

    useEffect(()=>{
        loadData()
    },[])

    const deletePost = async _id=>{
        await  axios.delete(`http://localhost:4000/blogposts/${_id}`)
        loadData()
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
                <div className="addblog"> 
                   <Link to="/addblog">  <button className="btn btn-primary"> Add New Blog </button></Link>
                </div>
                <table class="table table-striped table-primary">
                    <thead>
                        <tr>
                        <th scope="col"> S.N </th>
                        <th scope="col"> Title </th>
                        <th scope="col"> Seo Title </th>
                        <th scope="col"> Action </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                        getData?.map((getData, index)=>{
                            return(
                                <tr>
                                    <th key={index} scope="row"> {index+1} </th>
                                    <td> {getData.title}</td>
                                    <td> {getData.seotitle}</td>
                                    <td> 
                                       <Link to={`/editblog/${getData._id}`}> <button type="submit" className="btn btn-success"> <PencilFill/> </button></Link>
                                        <button type="submit" className="btn btn-primary"> <Eye/>  </button>
                                       <button onClick={()=> deletePost(getData._id)} type="submit" className="btn btn-danger" > <Trash/> </button>
                                    </td>

                                </tr>
                         
                            )
                        })
                        
                        }
                    </tbody>
                </table>
            </div>
        </div>
    </div>
   </>
  )
}
