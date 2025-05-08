import React from 'react'
import '../style/Style.css'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function HomeDestination() {
    const[hservices, setHservices]= useState([])

    const [services, setDestination] = useState([]);

    useEffect(()=>{
        let url= (`${process.env.REACT_APP_SERVICES_JAPAN_API}`)
        axios.get(url).then((res)=>{
            setHservices(res.data)
        }).catch(err=>{
            console.log('Error',err)
        })
    },[])
    useEffect(()=>{
        let url =(`${process.env.REACT_APP_SERVICES_HOME_API}`);
        axios.get(url).then((res)=>{
            setDestination(res.data)
        })
    },[])

  return (
    <>
    <div className="destination">
        <div className="container">
            <div className="destination-home">
                {
                    hservices?.map((hservices)=>{
                        return(
                            <>
                            <span key={hservices.id} className='destination-title'> {hservices.name} </span>
                                <p>{hservices.description}</p>
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
                            <div className="col-md-3 hservices ">
                                <Link to={`/posts/${services.slug}`}> 
                                <div className="des-card-control">
                                    <div key={services.id} className="destination-card">
                                    
                                        <img src={services.fimg_url} alt={services.title.rendered} className='img-fluid' />
                                    
                                        
                                    </div>
                                    <div className="des-card">
                                            <h5>{services.title.rendered}</h5>
                                        
                                          
                                        
                                    </div>
                                   
                                </div>
                                </Link>
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
