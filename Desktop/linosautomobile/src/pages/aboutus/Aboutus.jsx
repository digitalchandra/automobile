import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import './About.css'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { Facebook, 
    Tiktok, 
    Linkedin, 
    Twitter,
    Telephone,
    Envelope,

 } from 'react-bootstrap-icons'
export default function Aboutus() {
    const [about, setAbout] = useState([])

    useEffect(()=>{
        let url =(`${process.env.REACT_APP_ABOUT_US_API}`)
        axios.get(url).then((res)=>{
            setAbout(res.data)
        }).catch(err=>{
            console.log(err)
        })
    },[])
  return (
    <>
    <Header/>
    {
        about?.map((about)=>{
            return(
                <>
                    <div className="about-banner">
                        <div className="card about-bannerimg">
                        <img src={about.feature_image} alt={about.title.rendered} className='img-fluid' />
                            <div className="card-img-overlay about-banenr-control">
                                    <h4>{about.title.rendered}</h4>
                            </div>
                        </div>
                    </div>

                    <div className="about">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-7">
                                    <div className="about-content" dangerouslySetInnerHTML={{__html: about.content.rendered}}/>
                                   
                                </div>
                                <div className="col-md-5">
                                    <div className="ceo">
                                        <div className="about-ceo">
                                            <img src={about.feature_image} alt={about.title.rendered} className='img-fluid' />
                                        
                                        </div>
                                        <div className="ceo-name">
                                            <h4>{about.acf.name_of_ceo}</h4>
                                            <h6>{about.acf.position}</h6>
                                            <h6> {about.acf.company_name}</h6>
                                           
                                           <div className="ceo-contact">
                                                <p> <span className='ceo-icon'>  <Telephone/> </span> <span className='ceo-contact'> {about.acf.phone_}  </span> <span className='ceo-contact'> {about.acf.phone_2}  </span> </p>
 
                                                <p> <span className='ceo-icon'>  <Envelope/> </span> <span className='ceo-contact'> {about.acf.email} </span> </p>
                                           </div>
                                        </div>
                                        
                                        <div className="contact-social">
                                        <ul>
                                            <li>
                                                <Link to={about.acf.facebook} target='_blank'>
                                                <span className='contact-social' > <Facebook/> </span> 
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to={about.acf.tiktok} target='_blank'>
                                                <span className='contact-social'> <Tiktok/> </span> 
                                                </Link>
                                             
                                            </li>
                                            <li>
                                                <Link to={about.acf.linkend} target='_blank'>
                                                <span className='contact-social'> <Linkedin/> </span> 
                                                </Link>
                                               
                                            </li>
                                            <li>
                                                 <Link to={about.acf.twitter} target='_blank'>
                                                <span className='contact-social'> <Twitter/> </span> 
                                                </Link>
                                               
                                            </li>
                                        </ul>
                                    </div>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>

                </>
            )
        })
    }
    <Footer/>

    </>
  )
}
