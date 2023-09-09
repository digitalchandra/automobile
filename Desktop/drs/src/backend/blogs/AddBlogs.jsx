import React from 'react'
import Topbar from '../compoment/Topbar'
import Nav from '../compoment/Nav'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function AddBlogs() {
    let navigate = useNavigate();
    const[post, setPost] = useState({
        title:"",
        seotitle:"",
        metadescription:"",
        description:""
    })
    const {title, seotitle, metadescription, description}= post;
    
 

    const handleSubmit = e =>{
        setPost({ ...post,[e.target.name]:e.target.value})
    }

    const onSumbit = async e =>{
       e.preventDefault()
       await axios.post("http://localhost:4000/blogpost/", post)
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
            <h3> Add Blogs </h3>
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
