import axios from 'axios';
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import {Link} from 'react-router-dom'
import {PersonFillCheck, Telephone} from 'react-bootstrap-icons'
import './Component.css'


export default function Whyus() {
    const[getwhyus, setWhyus] = useState([]);
    
    useEffect(()=>{
        let url=(`${process.env.REACT_APP_WHYUS_API}`)
        axios.get(url).then((res)=>{
            setWhyus(res.data)
        })
    },[])
  return (
    <>
        <div className="why">
            <div className="whyback">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="whyinfo">
                        <h1> OUR SERVICES </h1>
                            <p>
                            Welcome to our comprehensive automotive services platform! At our website, we offer a one-stop solution for all your car-related needs. Whether you're looking to buy a new or used car, sell your current vehicle, exchange it for an upgrade, or secure financing or a loan for your dream car, we've got you covered. Our user-friendly interface and expert team make the entire process seamless and hassle-free. Trust us to provide you with the best car services, tailored to your specific needs. Drive your automotive ambitions with us today!
                            </p>
                        <Link to="/contact" className=''><Telephone/> Contact Us </Link>
                        <Link to="/aboutus" className=''> <PersonFillCheck/> About Us </Link>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className="whycard">
                        <div className="row">
                                {
                                    getwhyus?.map((getwhyus)=>{
                                        return(
                                            <>
                                                <div className="col-md-6 ">
                                                    <div className="whymainbackgroun">
                                                        <div className="whyanimation">
                                                            
                                                                <div className="why-card-control">
                                                                <div className="whyuscard">
                                                                    <span className='whyusicon'>
                                                                        <img src={getwhyus.featured_image?.medium} alt={getwhyus.title} className='img-fluid' />
                                                                    </span>
                                                                    <h5> {getwhyus.title}</h5>
                                                                
                                                                </div>
                                                              
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
                </div>

            </div>
            </div>
          
        </div>

    </>
  )
}
