import axios from 'axios';
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom';

import '../style/Style.css'
export default function HomeBlog() {
    const [blog, setBlog] = useState([]);
    const [blogcat, setBlogcat] = useState([]);

    useEffect(()=>{
        let url =(`${process.env.REACT_APP_BLOG_HOME_API}`)
        axios.get(url).then((res)=>{
            setBlog(res.data)
        })
    },[])
    
    useEffect(()=>{
        let url=(`${process.env.REACT_APP_BLOG_CAT_API}`)
        axios.get(url).then((res)=>{
            setBlogcat(res.data)
        })
    },[])
  return (
    <>
    <div className="blog">
        <div className="container">
            <div className='blog-title'>
                {
                    blogcat?.map((blogcat)=>{
                        return(
                            <>
                                <h1>{blogcat.name}</h1>
                                <p>{blogcat.description}</p>
                            </>
                        )
                    })
                }
            

            </div>
            <div className="row">
                
                        {
                            blog?.map((blog)=>{
                                return(
                                    <>
                                    <div key={blog.id} className="col-md-4">
                                        <div className="blog-back">
                                            
                                            <div className="blog-card">
                                                <img src={blog.fimg_url} alt={blog.title.rendered} className='img-fluid' />
                                                 
                                            </div>
                                            <span className='blog-update'>Update: {blog.modified}</span>
                                            <Link to={`/posts/${blog.slug}`}>
                                                <h5> {blog.title.rendered} </h5>
                                            </Link>
                                          
                                            
                                        </div>
                                    
                                     </div>
                                    </>
                                )
                            })
                        }
                 
            </div>
        </div>
    </div>
    </>
  )
}
