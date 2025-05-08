import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import TestPreparationNav from '../component/TestPreparationNav'
import Header from '../component/Header'
import Footer from '../component/Footer'
export default function TestPreparationDetails() {
  const {id} = useParams()

  const [singletest, setSingleTest] = useState([])
  
  useEffect(()=>{
    let url = (`${process.env.REACT_APP_SINCLETEST_API_ROOT}/posts/${id}`)
    axios.get(url).then((res)=>{
      setSingleTest(res.data)
    }).then(err=>{
      console.log('error',err.message)
    })
  },[])

  return (
    <>
    <Header/>
        {
          Object.keys(singletest).length?(
            <>
                <div className="singebanner">
                <div class="card bg-dark text-white single">
                  <img src={singletest.fimg_url} alt={singletest.title.rendered} className='img-fluid' />
                  <div class="card-img-overlay single-banner">
                  <div className="single-title">
                        <h5 class="card-title"> {singletest.title.rendered} </h5>
                  </div>
                
                  </div>
                </div>
              </div>

              <div className="container">
                <div className="single-detial">
                  <div className="row">
                  <TestPreparationNav/>
                    <div className="col-md-9">
                      <div className="singe-full">
                       <div className="" dangerouslySetInnerHTML={{__html:singletest.content.rendered}} >


                       </div>
                        <img src={singletest.fimg_url}  alt={singletest.title.rendered} className='img-fluid' />
                      </div>
                    </div>

                  </div>

                </div>
              
              </div>
            </>
          ):'Loading... Test Preparation'
        }
        <Footer/>
    </>
  )
}
