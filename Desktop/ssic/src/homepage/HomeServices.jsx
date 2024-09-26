import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import '../style/Style.css'
import { Link } from 'react-router-dom'

export default function HomeServices() {

    const [services, setServices] = useState([])
    const [servicescat, setServicescat]=useState([])

    useEffect(()=>{
        let url = (`${process.env.REACT_APP_ABROADSTUDY_API}`)
        axios.get(url).then((res)=>{
            setServices(res.data)
        })
    },[])

    useEffect(()=>{
        let url=(`${process.env.REACT_APP_ABROADCAT_API}`)
        axios.get(url).then((res)=>{
            setServicescat(res.data)
        }).catch(err=>{
            console.log('Error',err.message)
        })
    },[])

  return (
    <>
    <div className="services">
        <div className="container">
            
                <div className="services-title">
                    {
                        servicescat?.map((servicescat)=>{
                            return(
                                <>
                                <h2> {servicescat.name} </h2>
                                <p>{servicescat.description}</p>
                                </>
                            )
                        })
                     
                    }
                    
                </div>
                <div className="row">
                {
                    services?.map((services)=>{
                        return(
                            <>
                        
                            <div className="col-md-3">
                            <div key={services.id} class="card bg-dark-border scard-img text-white">
                                    <img src={services.fimg_url} alt="" className='img-fluid' />
                            <Link to={`/posts/${services.slug}`}>
                                <div class="card-img-overlay img-fornt">
                                    <div className="card-title-control">
                                     <h5> {services.title.rendered}</h5>
                                    </div>
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
    </>
  )
}
