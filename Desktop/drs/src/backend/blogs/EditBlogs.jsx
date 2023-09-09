import React from 'react'
import Topbar from '../compoment/Topbar'
import Nav from '../compoment/Nav'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

export default function EditBlogs() {
    const navigate = useNavigate();
    const {_id} = useParams();

    const[editPost, setEditPost] = useState({
        title:"",
        seotitle:"",
        metadescription:"",
        description:""
    })
    const {title, seotitle, metadescription, description}= editPost;


      const getData = async()=>{
        const editBlog = await axios.get(`http://localhost:4000/blogpost/${_id}`)
        setEditPost(editBlog.data)
      }

      useEffect(()=>{
        getData();
      })

    const handleSubmit = e =>{
      setEditPost({ ...editPost,[e.target.name]:e.target.value})
    }

    const onSumbit = async e =>{
       e.preventDefault()
       await axios.post(`http://localhost:4000/blogpost/${_id}`, editPost)
       navigate("/allblog")
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
            <h3> Update Blogs </h3>
            <form onSumbit={e=>onSumbit(e)}>
                <div class="form-group">
                    
                    <input 
                        type="text" 
                        class="form-control mt-3" 
                        id="titleBlog" 
                        aria-describedby="" 
                        placeholder="Post Title"
                        name="title"
                        value={title}
                        onChange={e=>handleSubmit(e)}
                    />
                     <input 
                        type="text" 
                        class="form-control mt-3" 
                        id="titleBlog" 
                        aria-describedby="" 
                        placeholder="Seo Title"
                        name="seotitle"
                        value={seotitle}
                        onChange={e=>handleSubmit(e)}
                    />
                        <input 
                        type="text" 
                        class="form-control mt-3" 
                        id="titleBlog" 
                        aria-describedby="" 
                        placeholder="Meta Description"
                        name="metadescription"
                        value={metadescription}
                        onChange={e=>handleSubmit(e)}
                    />
                   
                    <textarea 
                        class="form-control mt-3" 
                        id="exampleFormControlTextarea1" 
                        rows="7"
                        placeholder="Description"
                        name="description"
                        value={description}
                        onChange={e=>handleSubmit(e)}
                        >

                    </textarea>
                    
                    
                </div>
                <button type="submit" className="btn btn-primary mt-3"> Sumbit</button>
                </form>
         </div>

        </div>
    </div>
    </>
  )
}
