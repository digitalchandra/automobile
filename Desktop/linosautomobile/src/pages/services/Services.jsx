import React from 'react'
import './Services.css'
import { useState } from 'react'
import { useEffect } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import axios from 'axios'
import CarBanner from '../../image/car.jpg'
import ServicesContact from '../../components/ServicesContact'
export default function Services() {
  const [services, setServices] = useState([])

  useEffect(()=>{
    let url =(`${process.env.REACT_APP_WHYUS_API}`)
    axios.get(url).then((res)=>{
      setServices(res.data)
    }).catch(err=>{
      console.log(err)
    })
  },[])


  return (
    <>
    <Header/>
    <div className="services-banner">
      <div className="card services-card">
        <img src={CarBanner} alt="Services Banner" className='img-fluid' />
        <div className="card-img-overlay services-ov">
          <h4> Our Services </h4>
        </div>
      </div>
    </div>
    <div className="services">
        <div className="container">
            
              <div className="services-car">
              <div className="row">
                {
                  services?.map((services)=>{
                    return(
                      <>
                        <div className="col-md-6">
                          <div className="all-services">
                            <img src={services.featured_image?.medium} alt={services.title} className='img-fluid' />
                          <div className="services-title">
                            <h3>    {services.title}</h3>
                            <p>{services.content}</p>
                            <ServicesContact/>
                          </div>
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
