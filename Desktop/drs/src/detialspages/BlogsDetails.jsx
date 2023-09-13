import React from 'react'
import Header from '../component/Header'
import Footer from '../component/Footer'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import BlogSideNav from '../component/BlogSideNav'

export default function BlogsDetails() {
    const {id} = useParams()
    const [blogdetails, setBlogdetails] = useState([])

    useEffect(()=>{
        let url=(`${process.env.REACT_APP_SINGLEBLOG_API_ROOT}/posts/${id}`)
        axios.get(url).then((res)=>{
            setBlogdetails(res.data)

        }).catch(err=>{
            console.log('error:', err.messsage)
        })
    },[])

  return (
    <>
    <Header/>
    {
      Object.keys(blogdetails).length?(
        <>
         <div className="singebanner">
                <div class="card bg-dark text-white single">
                  <img src={blogdetails.fimg_url} alt={blogdetails.title.rendered} className='img-fluid' />
                  <div class="card-img-overlay single-banner">
                  <div className="single-title">
                        <h5 class="card-title"> {blogdetails.title.rendered} </h5>
                  </div>
                
                  </div>
                </div>
              </div>

    <div className="container">
                <div className="single-detial">
                  <div className="row">
                  <BlogSideNav/>
                    <div className="col-md-9">
                      <div className="singe-full">
                       <div className="" dangerouslySetInnerHTML={{__html: blogdetails.content.rendered}} >


                       </div>
                        <img src={blogdetails.fimg_url}  alt={blogdetails.title.rendered} className='img-fluid' />
                      </div>
                    </div>

                  </div>

                </div>
              
    </div>
        </>
      ):'Blog Loading..'
    }
   

    <Footer/>
    </>
  )
}
