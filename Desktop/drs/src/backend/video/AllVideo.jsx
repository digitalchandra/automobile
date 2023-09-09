import React from 'react'
import Topbar from '../compoment/Topbar'
import Nav from '../compoment/Nav'
import { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
import './Video.css'
import {Link} from 'react-router-dom'

export default function AllVideo() {
    const[video, setVideo] = useState()

    const getVideo = async ()=>{
        const video = await axios.get("http://localhost:4000/videos/")
        setVideo(video.data.reverse())
    }

    useEffect(()=>{
        getVideo();
    },[])

    const deleteVideo = async _id=>{
        await axios.delete(`http://localhost:4000/videos/${_id}`)
        getVideo()
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
                <div className="addvideo">
                   <Link to="/addvideo">  <button className="btn btn-primary"> Add New Video </button> </Link>
                </div>


            <table class="table">
                <thead>
                    <tr>
                    <th scope="col">SN</th>
                    <th scope="col">Video Title</th>
                    <th scope="col">Last</th>
                    <th scope="col">Action </th>
                    </tr>
                </thead>
            {
                video?.map((video, index)=>{
                    return(

                        <tbody>
                        <tr>
                        <th key={index} scope="row">{index+1}</th>
                        <td>{video.title}</td>
                        <td>{video.seotitle}</td>
                        <td>
                            <Link to={`/editvideo/${video._id}`}> <button className="btn btn-success"> Edit</button> </Link>
                            <button className="btn btn-primary"> view</button>
                            <button onClick={()=>deleteVideo(video._id)} className="btn btn-danger"> delete</button>
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
