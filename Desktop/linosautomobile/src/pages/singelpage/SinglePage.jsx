import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { useParams } from 'react-router-dom'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import WhatsApp from '../../components/WhatsApp'
import Slider from 'react-slick';
import ResentPost from '../../components/ResentPost'
import EmailInquery from '../../components/EmailInquery'


import {
   PatchCheck ,CashCoin, CheckSquareFill , XCircleFill, FuelPump, CalendarDate, CheckCircleFill} from 'react-bootstrap-icons'
import axios from 'axios'
import './Single.css'

export default function SinglePage() {
    const {slug} = useParams();
    const[details, setDetails]=useState([])
        
    useEffect(()=>{
        let url = (`${process.env.REACT_APP_SINGLEDETAILS_API}/posts?slug=${slug}`)
        axios.get(url).then((res)=>{
            setDetails(res.data)
        }).catch(err=>{
            console.log('Error', err.message)
        })
    },[])

    var settings = {
        dots: true,
        infinite: true,
        // autoplay: true,
        speed: 300,
        slidesToShow: 1,
        arrows: true,
        adaptiveHeight: true
        };


  return (
   <>
    <Header/>
    {
        details?.map((details)=>{
            return(
                <>
                                 <div className="single-banner card">
                                        
                                        <img src={details.fimg_url} alt={'details.title.rendered'} className='img-fluid' />
                                <div className="single-banner-title card-img-overlay">
                                    <h1> {details.title.rendered}</h1>
                                
                                </div>
                                </div>
                            <div className="details-page">

                            
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-8">
                                            <div className="details-content">
                                                <Slider {...settings}>
                                                    <div className="slider-control">
                                                    <img src={details.fimg_url} alt={'details.title.rendered'} className='img-fluid' />
                                                    </div>
                                                    <div className="slider-control">
                                                    <img src={details.fimg_url} alt={'details.title.rendered'} className='img-fluid' />
                                                    </div>
                                                </Slider>
                                            
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="short-info">
                                            <div className="details-t">
                                          
                                                    <div className="short-details">
                                                            <p>
                                                                <span className='top-icon'> <CalendarDate/> </span>  
                                                                <span className='top-info'> Modal: {details.acf.car_modle}</span>
                                                            </p>
                                                            <p>
                                                                <span className='top-icon'> <FuelPump/> </span>  
                                                                <span className='top-info'> Fuel Type:{details.acf.fuel_type}</span>
                                                            </p>
                                                            <p>
                                                                <span className='top-icon'> <PatchCheck/> </span>  
                                                                <span className='top-info'> Brand: {details.acf.car_modle}</span>
                                                            </p>
                                                
                                                    </div>
                                                    <p>
                                                        <span className='top-iconprice'> <CashCoin/> </span>  
                                                        <span className='top-infoprice'>Price: {details.acf.car_price}</span>
                                                    </p>
                                                    {
                                                        (details.acf.status_available==true)?(
                                                            <p>
                                                            <span className='abailable-icon'> <CheckCircleFill/> </span>
                                                            <span className='available'> Available </span>
                                                        </p>
                                                        ):
                                                        (
                                                            <p>
                                                            <span className='not-abailable-icon'> <XCircleFill/> </span>
                                                            <span className='not-available'> Not Available </span>
                                                        </p>
                                                        )
                                                    }
                                                
                                                
                                            
                                                </div>
                                            </div>
                                        <div className="features">
                                            
                                               
                                        <span className='checklist'>
                                                        <CheckSquareFill/>
                                                            </span> 
                                                        <span className='featurelist'>  {details.acf.car_features}</span>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="car-features">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-8">
                                        <div className="features">
                                        <h4> Car Specification</h4>
                                            <div className="row">
                                          
                                            
                                            <div className="car-features">
                                             
                                                <ul>
                                                    <li> <spam className='details-title'> Brand:  </spam> <span className='car-details'> {details.acf.car_price} </span>   </li>
                                                    <li>  <spam className='details-title'>  Model:  </spam> <span className='car-details'> {details.acf.car_modle} </span>   </li>
                                                    <li> <spam className='details-title'> Body Style:  </spam> <span className='car-details'> {details.acf.body_style} </span>   </li>
                                                    <li> <spam className='details-title'>  Engine:  </spam> <span className='car-details'> {details.acf.engine} </span>   </li>
                                                    
                                                    
                                                
                                                    <li> <spam className='details-title'> Doors:  </spam> <span className='car-details'> {details.acf.doors} </span>   </li>
                                                    <li> <spam className='details-title'> Passengers:  </spam> <span className='car-details'> {details.acf.passengers} </span>   </li>
                                                    <li> <spam className='details-title'> Fule Mileage:  </spam> <span className='car-details'> {details.acf.fuel_mileage} </span>   </li>
                                                    <li> <spam className='details-title'> fule Type:  </spam> <span className='car-details'> {details.acf.fuel_type} </span>   </li>
                                                    <li> <spam className='details-title'> Condition:  </spam> <span className='car-details'> {details.acf.condition} </span>   </li>
                                                    <li> <spam className='details-title'> Warenty:  </spam> <span className='car-details'> {details.acf.waeeanty} </span>   </li>
                                                    
                                                    
                                                </ul>
                                            </div>        
                                      
                                               

                                            </div>
                                        </div>
                                    

                                        </div>
                                        <div className="col-md-4">
                                        
                                            <WhatsApp/>
                                        
                                        </div>
                                   
                                    </div>
                                    
                                </div>
                                </div>
                                <div className="car-email-details">
                                    <div className="container">
                                        <div className="row">
                                        <div className="col-md-8">
                                            <div className="carinfodetails">
                                                        <h4> Vehical Descriotion:</h4>
                                                        <span className="main-details" dangerouslySetInnerHTML={{__html: details.content.rendered}} />           
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <EmailInquery/>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            
                            </div>
                            <div className="recent-added">
                                <div className="container">
                                
                                </div>
                            </div>
               <ResentPost/>
                </>
            )
        })
    }
     
    <Footer/>
    
    </>
  )
}
