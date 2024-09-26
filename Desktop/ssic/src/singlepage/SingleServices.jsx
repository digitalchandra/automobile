import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import axios from 'axios'
import './Single.css'
import SideSingleNav from '../components/SideSingleNav'

import { useParams } from 'react-router-dom'

export default function SingleServices() {
  let {slug} = useParams()
const [content, setContent] = useState();

useEffect(()=>{
    let url = (`${process.env.REACT_APP_SINGLE_API_ROOT}/posts?slug=${slug}`);
    axios.get(url).then((res)=>{
        setContent(res.data)
    }).catch(err=>{
      console.log(err)
    })
},[])

  return (
    <>
    <Header/>
    <div className="singlebanenr">
{
  content?.map((content)=>{
    return(
      <>
        <div className="card single-banner-img">
          <img src={content.fimg_url} alt={content.title.rendered} className='img-fluid' />
          <div className="card-img-overlay top-banner">
          <h1>{content.title.rendered}</h1>
          </div>
        </div>
      </>
    )
  })
}
    </div>
    <div className="container">
        <div className="row">
           
            <div className="col-md-9">
              <div className="single-main">
                {
                  content?.map((content)=>{
                    return(
                      <>
                    
                     
                      <div className="main-content"   dangerouslySetInnerHTML={{__html: content.content.rendered}}/>
                        {}
                      
                      <img src={content.fimg_url} alt="" className='img-fluid' />
                      </>
                    )
                  })
                }
              </div>
             
              </div>
          <div className="col-md-3">
                <SideSingleNav/>
          </div>
        </div>
    </div>
    <Footer/>
    </>
  )
}
