import React from 'react'
import './Component.css'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { Cash, FuelPumpDiesel, 
    CalendarRangeFill, 
    CarFrontFill, 
    PatchCheckFill,
     } from 'react-bootstrap-icons'

export default function Recomended() {
    const [recomended, setRecomended] = useState([])

    useEffect(()=>{
        let url=(`${process.env.REACT_APP_RECOMENDED_API}`)
        axios.get(url).then((res)=>{
            setRecomended(res.data)
        })

    },[])
  return (
    <>
        <div className="recomended">
            <div className="container">
                <div className="recomended-title">
                    <h1> Recomended Car For You </h1>
                </div>
                <div className="row">
                    {
                        recomended?.map((recomended)=>{
                            return(
                                <>
                                    <div className="col-md-4">
                                        <Link to={`/search/${recomended.slug}`}>
                                        <div class="card reco">
                                        <img src={recomended.fimg_url} class="img-fluid" alt={recomended.title.rendered}/>
                                            <div class="card-img-overlay reco-overlay">

                                                <h5 class="reco-title">{recomended.title.rendered}</h5>
                                                
                                            <div className="re-info">
                                               <span className='reco-icon' > <Cash/>
                                                    <span className='reco-price'>
                                                    {recomended.acf.car_price}
                                                    </span>
                                               </span> 
                                               
                                            </div>
                                            <div className="rec-feature">
                                                <ul>
                                                    <li> 
                                                        <span className='reco-icon1' >  <FuelPumpDiesel/> </span> 
                                                        <span className='rec-info-text'> {recomended.acf.fuel_type} </span> 
                                                    </li>
                                                    <li> 
                                                        <span className='reco-icon1' >  <CalendarRangeFill/> </span> 
                                                        <span className='rec-info-text'> {recomended.acf.car_modle} </span>   
                                                    </li>
                                                    <li> 
                                                        <span className='reco-icon1' >  <CarFrontFill/> </span> 
                                                        <span className='rec-info-text'>{recomended.acf.body_style} </span>   
                                                    </li>
                                                    <li> 
                                                        <span className='reco-icon1' >  <PatchCheckFill/> </span> 
                                                        <span className='rec-info-text'> {recomended.acf.car_brand} </span>   
                                                    </li>
                                                </ul>
                                            </div>
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
