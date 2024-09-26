import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { FuelPump,CalendarDate, CpuFill, CarFront } from 'react-bootstrap-icons'
import { Link } from 'react-router-dom'
import './Component.css'
export default function ResentPost() {
    const [resentpost, setRecentpost] = useState([]);

    useEffect(()=>{
        let url=(`${process.env.REACT_APP_RECENT_API}`);
        axios.get(url).then((res)=>{
            setRecentpost(res.data)
        }).catch(err=>{
            console.log(err)
        })
    },[])
  return (
    <>
    <div className="recent-car">
    <div className="container">
            <div className="row">
            <div className="recently-added">
                            <h1> Recently Added Car</h1>
                        </div>
                {
                    resentpost?.map((resentpost)=>{
                        return(
                            <>
                      
                              <div className="col-md-4">
                                    <div className="new-post">
                                        <div className="resent">
                                            <div className="card">
                                            <img src={resentpost.fimg_url} alt={resentpost.title.rendered} className='img-fluid' /> 
                                            <div className="card-img-overlay car-img-overlay">
                                                     
                                           
                                            </div>
                                            
                                                <div className="cprice">
                                                   <p>  NPR: {resentpost.acf.car_price}</p>
                                                </div>
                                            </div>
                                      
                                            
                                            <div className="recent-title">
                                                <Link to={`/search/${resentpost.slug}`}target='_parent'>
                                                <h5> {resentpost.title.rendered}</h5>
                                                </Link>
                                           
                                            </div>
                                            <div className="short-info">
                                                <ul className='short-feature'>
                                                    <li> <span className='iconcolor'><FuelPump/> </span>  {resentpost.acf.fuel_type} </li>
                                                    <li> <span className='iconcolor'> <CalendarDate/> </span>{resentpost.acf.car_model} </li>
                                                    <li> <span className='iconcolor'> <CpuFill/></span>  {resentpost.acf.engine} </li>
                                                    <li> <span className='iconcolor'> <CarFront/></span>  {resentpost.acf.car_brand} </li>
                                                </ul>
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
    </div>
    
    </>
  )
}
