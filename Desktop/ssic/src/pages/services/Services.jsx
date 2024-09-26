import React from 'react'
import './Services.css'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import BannerImg from '../../images/banenr.jpg'
import { Link } from 'react-router-dom'
export default function Services() {
    const [service, setService]= useState([])

    const [scat, setScat] = useState([])

    useEffect(()=>{
        let url = (`${process.env.REACT_APP_SERVICES_CAT_API}`)
        axios.get(url).then((res)=>{
            setService(res.data)
        }).catch(err=>{
          console.log(err)
        })
    },[])
    useEffect(()=>{
      let url = (`${process.env.REACT_APP_SERVICES_JAPAN_API}`)
      axios.get(url).then((res)=>{
        setScat(res.data)
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
            scat?.map((scat)=>{
              return(
                <>
                <h3>{scat.name}</h3>
                <p>{scat.description}</p>
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
                service?.map((service)=>{
                  return(
                    <>
                      <div  key={service.id} className="col-md-3">

                          <div className="card services-card">
                            <img src={service.fimg_url} alt="" className='img-fluid' />
                            <Link to={`/posts/${service.slug}`}>
                                <div className="card-img-overlay s-card-ovearlay">
                                    <h5> {service.title.rendered} </h5>
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
