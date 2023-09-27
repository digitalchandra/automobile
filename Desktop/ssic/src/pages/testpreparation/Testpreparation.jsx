import React from 'react'
import './Testpreparation.css'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import BannerImg from '../../images/banenr.jpg'
import { Link } from 'react-router-dom'

export default function Testpreparation() {
    const [testpre, setTestpre]= useState([])

    const [testcat, setTestcat] = useState([])

    useEffect(()=>{
        let url = (`${process.env.REACT_APP_TESTPRE_HOME_API}`)
        axios.get(url).then((res)=>{
            setTestpre(res.data)
        }).catch(err=>{
          console.log(err)
        })
    },[])
    useEffect(()=>{
      let url = (`${process.env.REACT_APP_TESTPRE_CAT_API}`)
      axios.get(url).then((res)=>{
        setTestcat(res.data)
      })
    },[])
  return (
    <>
    <Header/>
    <div className="services-banner">
      <div className="card banner-s">
        <img src={BannerImg} alt="banner image" className='img-fluid' />
        
        <div className="card-img-overlay banner-details">
          {
            testcat?.map((testcat)=>{
              return(
                <>
                <h3>{testcat.name}</h3>
                <p>{testcat.description}</p>
                </>
              )
            })
          }
          
        </div>
      </div>
      <div className="services-cat">
        <div className="container">
            <div className="row">
              {
                testpre?.map((testpre)=>{
                  return(
                    <>
                      <div  key={testpre.id} className="col-md-3">

                          <div className="card services-card">
                            <img src={testpre.fimg_url} alt={testpre.title.rendered}  className='img-fluid' />
                            <Link to={`/posts/${testpre.slug}`}>
                                <div className="card-img-overlay s-card-ovearlay">
                                    <h5> {testpre.title.rendered} </h5>
                                </div>
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
   
    </div>
    <Footer/>
    </>
  )
}
