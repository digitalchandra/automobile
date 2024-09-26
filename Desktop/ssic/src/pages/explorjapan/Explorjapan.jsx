import React from 'react'
import './Explorjapan.css'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import BannerImg from '../../images/banenr.jpg'
import { Link } from 'react-router-dom'

export default function Explorjapan() {
    const [explor, setExplor]= useState([])

    const [explorcat, setExplorcat] = useState([])

    useEffect(()=>{
        let url = (`${process.env.REACT_APP_JAPAN_HOME_API}`)
        axios.get(url).then((res)=>{
            setExplor(res.data)
        }).catch(err=>{
          console.log(err)
        })
    },[])

    useEffect(()=>{
      let url = (`${process.env.REACT_APP_EXPLORE_JAPAN_API}`)
      axios.get(url).then((res)=>{
        setExplorcat(res.data)
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
            explorcat?.map((explorcat)=>{
              return(
                <>
                <h3>{explorcat.name}</h3>
                <p>{explorcat.description}</p>
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
                explor?.map((explor)=>{
                  return(
                    <>
                      <div  key={explor.id} className="col-md-3">

                          <div className="card services-card">
                            <img src={explor.fimg_url} alt="" className='img-fluid' />
                            <Link to={`/posts/${explor.slug}`}>
                                <div className="card-img-overlay s-card-ovearlay">
                                    <h5> {explor.title.rendered} </h5>
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
