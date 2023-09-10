import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { FuelPump,CalendarDate, CpuFill, CarFront } from 'react-bootstrap-icons'

import './Component.css'
export default function ResentPost() {
    const [resentpost, setRecentpost] = useState([]);

    useEffect(()=>{
        let url=('https://keshab.lionsautomobiles.com.np/wp-json/wp/v2/posts');
        axios.get(url).then((res)=>{
            setRecentpost(res.data)
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
                                                      Hello Test of the 
                                           
                                            </div>
                                            
                                                <div className="cprice">
                                                   <p>  NPR: 20000000</p>
                                                </div>
                                            </div>
                                      
                                            
                                            <div className="recent-title">
                                            <h5> {resentpost.title.rendered}</h5>
                                            </div>
                                            <div className="short-info">
                                                <ul className='short-feature'>
                                                    <li> <span className='iconcolor'><FuelPump/> </span>  Milage </li>
                                                    <li> <span className='iconcolor'> <CalendarDate/> </span>Milage </li>
                                                    <li> <span className='iconcolor'> <CpuFill/></span>  Milage </li>
                                                    <li> <span className='iconcolor'> <CarFront/></span>  Milage </li>
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
