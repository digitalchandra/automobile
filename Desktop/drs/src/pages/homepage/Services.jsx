import React from 'react'
import './Category.css'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'

export default function Services() {
    const [service, setSevice] = useState([])

    useEffect(()=>{
        let url=('https://drs.edu.np/wp-json/wp/v2/posts?categories=4')
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
                                <div class="card text-white service-card">
                                    <img src={service.fimg_url} alt="" className="img-fluid"/>
                                    <div class="card-img-overlay img-back">
                                    
                                        <div class="services-card-title"> 
                                            <h4> {service.title.rendered} </h4>
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
