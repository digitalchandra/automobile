import React from 'react'
import './Category.css'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
export default function Services() {
    const [service, setSevice] = useState([])

    useEffect(()=>{
        let url=(`${process.env.REACT_APP_SERVICES_API_ROOT}`)
        axios.get(url).then((res)=>{
            setSevice(res.data)
        })
    },[])
  return (
    <>
    <div className="container">
        <div className="services-title">
            <h3> SERVICES</h3>
            
        </div>
        <div className="row">
            {
                service?.map((service)=>{
                    return(
                        <>
                            <div className="col-md-4">
                                <div key={service.id} class="card text-white service-card">
                                    <img src={service.fimg_url} alt={service.title.rendered} className="img-fluid"/>
                                    <div class="card-img-overlay img-back">
                                    
                                        <div class="services-card-title"> 
                                            <Link to={`/services/${service.id}`}> {service.title.rendered} </Link>
                                        </div>
                                    
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                })
            }
    

 
        </div>
    </div>
    </>
  )
}
