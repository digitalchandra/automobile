import React from 'react'
import './Abroad.css'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import BannerImg from '../../images/banenr.jpg'
import { Link } from 'react-router-dom'
export default function AbroadStudy() {
    const [abroad, setAbroad]= useState([])

    const [abroadcat, setAbroadcat] = useState([])

    useEffect(()=>{
        let url = (`${process.env.REACT_APP_ABROADSTUDY_API}`)
        axios.get(url).then((res)=>{
          setAbroad(res.data)
        }).catch(err=>{
          console.log(err)
        })
    },[])
    useEffect(()=>{
      let url = (`${process.env.REACT_APP_ABROADCAT_API}`)
      axios.get(url).then((res)=>{
        setAbroadcat(res.data)
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
            abroadcat?.map((abroadcat)=>{
              return(
                <>
                <h3>{abroadcat.name}</h3>
                <p>{abroadcat.description}</p>
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
                abroad?.map((abroad)=>{
                  return(
                    <>
                      <div  key={abroad.id} className="col-md-3">

                          <div className="card services-card">
                            <img src={abroad.fimg_url} alt="" className='img-fluid' />
                            <Link to={`/posts/${abroad.slug}`}>
                                <div className="card-img-overlay s-card-ovearlay">
                                    <h5> {abroad.title.rendered} </h5>
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
