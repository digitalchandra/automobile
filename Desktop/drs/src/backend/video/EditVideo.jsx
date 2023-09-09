import React from 'react'
import Topbar from '../compoment/Topbar'
import Nav from '../compoment/Nav'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect } from 'react'

export default function EditVideo() {
    const nagivate = useNavigate();
    const {_id} = useParams();
    const [video, setEditVideo ] = useState({
        title:"",
        seotitle:"",
        link:"",
        meta:"",
        description:""
    })
    const {title, seotitle,link,meta,description} = video;

    const getVideo = async() =>{
        const getData = await axios.get(`http://localhost:4000/videos/${_id}`)
        setEditVideo(getData.data)
    }

    useEffect(()=>{
        getVideo();
    })

    const takeData = e=>{
        setEditVideo({...video,[e.target.name]:e.target.value})
    }
    const onSumbit = async e=>{
        e.preventDefault();
         await axios.post(`http://localhost:4000/videos/`,video)
        nagivate('/allvideo')
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
                <form onSubmit={e=>onSumbit(e)}>
                    <input 
                        type="text"
                        placeholder="Video Title "
                        className="form-control mt-3"
                        name="title"
                        value={title}
                        onChange={e=>takeData(e)}
                    />
                    <input 
                        type="text"
                        placeholder="Seo Title"
                        className="form-control mt-3"
                        name="seotitle"
                        value={seotitle}
                        onChange={e=>takeData(e)}
                    />
                    <input 
                        type="text"
                        placeholder="Video Link"
                        className="form-control mt-3"
                        name="link"
                        value={link}
                        onChange={e=>takeData(e)}
                    />
                <textarea 
                    class="form-control mt-3" 
                    id="exampleFormControlTextarea1" 
                    placeholder=" Video Met Description"
                    rows="3"
                    name="meta"
                    value={meta} 
                    onChange={e=>takeData(e)}
                    >

                 </textarea>

                 <textarea 
                    class="form-control mt-3" 
                    id="exampleFormControlTextarea1" 
                    placeholder=" Video Descriotion"
                    rows="10"
                    name="description"
                    value={description}
                    onChange={e=>takeData(e)}
                 >
                 </textarea>
                 <button type="submit" className="btn btn-primary mt-4"> Sumbit </button>
                </form>
            </div>
        </div>
    </div>
    
    </>
  )
}
