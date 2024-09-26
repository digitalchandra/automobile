import axios from 'axios'
import './Blogs.css'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import BlogImg from '../../images/point.jpg'
import {ClockHistory} from 'react-bootstrap-icons'
import { Link } from 'react-router-dom'

export default function Blogs() {

    const[blog,setBlog]=useState([])
    const[blogcat, setBlogcat]=useState([])

    useEffect(()=>{
        let url =(`${process.env.REACT_APP_BLOG_HOME_API}`)
        axios.get(url).then((res)=>{
            setBlog(res.data)
        }).catch(err=>{
            console.log(err)
        })
    },[])

    useEffect(()=>{
        let url=(`${process.env.REACT_APP_BLOG_CAT_API}`)
        axios.get(url).then((res)=>{
            setBlogcat(res.data)
        }).catch(err=>{
            console.log(err)
        })
    },[])

  return (
    <>
   <Header/>
   <div className="blog-banner">
       <div className="card blog-ban">
        <img src={BlogImg} alt="blog banner point" className='img-fluid' />
        <div className="card-img-overlay blog-bannerover">
            {
                blogcat?.map((blogcat)=>{
                    return(
                        <>
                        <h5> {blogcat.name} </h5>
                            <p>{blogcat.description}</p>
                        </>
                    )
                })
            }
            
        </div>
       </div>
   </div>
      <div className="blog">
        <div className="container">
            <div className="row">
                {
                    blog?.map((blog)=>{
                        return(
<>
                            <div className="col-md-6">
                                <div className="catblog">
                                    <div className="blog-card">
                                        <img src={blog.fimg_url} alt={blog.title.rendered}  className='img-fluid'/>
                                    </div>
                                    <span className='blog-update'><ClockHistory/> Updated: {blog.modified} </span>
                                    <Link to={`/posts/${blog.slug}`}>
                                    <h5> {blog.title.rendered}</h5>
                                    </Link>
                                    
                                  
                                        
                                    <div className="blog-excert" dangerouslySetInnerHTML={{__html: blog.excerpt.rendered}}/>

                                  
                                </div>
                             
                            </div>
                        </>
                        )
                    })
                
                }
            
            </div>
        </div>
        </div>      
   <Footer/>
    </>
  )
}
