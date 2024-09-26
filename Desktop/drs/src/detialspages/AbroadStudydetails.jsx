import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import './SingleDetails.css'
import Header from '../component/Header'
import Footer from '../component/Footer'
import axios from 'axios'

import { useParams } from 'react-router-dom'
import SingleSidebarNav from '../component/SingleSidebarNav'
export default function AbroadStudydetails() {
  let {id} = useParams()
    const[study, setStudy] = useState([])

   

    useEffect(()=>{
        let url=(`${process.env.REACT_APP_SINCLESERVICES_API_ROOT}/posts/${id}`)
        axios.get(url).then((res)=>{
            setStudy(res.data)
            console.log(res)
        }).catch(err=>{
          console.log('error:', err.message)
        })
    },[])


  return (
    <>
        <Header/>
        {
            Object.keys(study).length?(
              <>
              <div className="singebanner">
                  <div class="card bg-dark text-white single">
                    <img src={study.fimg_url} alt="" className='img-fluid' />
                      <div class="card-img-overlay single-banner">
                        <div className="single-title">
                              <h5 class="card-title"> {study.title.rendered} </h5>
                        </div>
                    
                      </div>
                  </div>
              </div>
              <div className="container">
                        <div className="single-detial">
                          <div className="row">

                          
                            <SingleSidebarNav/>
                            <div className="col-md-9">
                              <div className="singe-full">
                                  <div dangerouslySetInnerHTML={{__html:study.content.rendered}} >

                                  </div>
                         
                                <img src={study.fimg_url} alt={study.title.rendered} className='img-fluid' />
                              </div>
                            </div>

                          </div>

                        </div>
                      
                      </div>

             </>
            ) :'Loding.... Services'
        }

    <Footer/>
    </>
  )
}
