import React from 'react'
import './Blog.css'
import Header from '../../component/Header'
import Footer from '../../component/Footer'
import Testbanner from '../../images/2.jpg'
import {ClockHistory} from 'react-bootstrap-icons'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default function Blog() {

        const [blog, setBlog] = useState([])
        const [catblog, setCatblog] = useState([])

        useEffect(()=>{
            let url=('https://palpa.drs.edu.np/wp-json/wp/v2/posts?categories=6')
            axios.get(url).then((res)=>{
                setBlog(res.data)
            
            })
        },[])

        useEffect(()=>{
            let url=('https://palpa.drs.edu.np/wp-json/wp/v2/categories?slug=blogs')
            axios.get(url).then((res)=>{
                setCatblog(res.data)
            })
        })
  return (

    <>
    <Header/>

        <div className="blog-banner">
            <div class="card text-white blog-ban">
            <img class="img-fluid" src={Testbanner} alt="Card image"/>
                <div class="card-img-overlay destination-banner">
                    <div className="aborad">
                        {
                            catblog?.map((catblog)=>{
                                return(
                                    <>
                                     <h5 class="abroad-card-title"> {catblog.name} </h5>
                                     <p class="abroad-short">{catblog.description}</p>
                                 
                                    

                                   
                                    </>
                                )
                            })
                        }
                       
                        
                    </div>
                </div>
            </div>
        </div>

        <div className="container">
            <div className="row">
                {
                    blog?.map((blog)=>{
                        return(
                            <>
                                <div key={blog.id} className="blog-content">
                                    <div className="blog-img">
                                        <img src={blog.fimg_url} alt={blog.title.rendered} className='img-fluid' />
                                    </div>
                                    <div className="blog-conent">
                                    
                                        <Link to={`/blogs/${blog.id}`}> <h3> {blog.title.rendered} </h3></Link>
                                        <span> <ClockHistory/> Latest Update: {blog.modified}</span>
                                        <p dangerouslySetInnerHTML={{__html: blog.excerpt.rendered}}>
                                              
                                        </p>
                                    </div>
                                </div>
                            </>
                        )
                    })
                }
            
            </div>
        </div>

    <Footer/>
    </>
  )
}
