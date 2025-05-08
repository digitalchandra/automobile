import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import './Contact.css'
import { Link } from 'react-router-dom'
import WhatsApp from '../../components/WhatsApp'
import {GeoAltFill, Telephone, Envelope, Facebook, Tiktok, Linkedin, Twitter } from 'react-bootstrap-icons'
export default function Contact() {
    const [contact, setContact] = useState([])

    useEffect(()=>{
        let url=(`${process.env.REACT_APP_CONTACT_US_API}`)
        axios.get(url).then((res)=>{
            setContact(res.data)
        }).catch(err=>{
            console.log(err)
        })
    },[])
  return (
    <>
    <Header/>
    {
        contact?.map((contact)=>{
            return(
                <>
                    <div key={contact.id} className="contact-banner">
                            <div className="card c-banner-img"> 
                                <div className="card-img-ovarlay contact-title">
                                    <h3>{contact.title.rendered}</h3>
                                </div>
                            </div>
                        </div>

                        <div className="contact">
                            <div className="contact-main">
                                <div className="contact-1">
                                    <ul>
                                        <li> 
                                            <span className='contact-icon'> <GeoAltFill/> </span> 
                                            <span className='contact-text'> {contact.acf.address} </span>
                                        </li>
                                        <li> 
                                            <span className='contact-icon'> <Telephone/> </span> 
                                            <span className='contact-text'> {contact.acf.phone} </span>
                                            <span className='contact-text'> {contact.acf.phone} </span>
                                        </li>
                                        <li> 
                                            <span className='contact-icon'> <Envelope/> </span> 
                                            <span className='contact-text'> {contact.acf.email} </span>
                                           
                                        </li>
                                    </ul>
                                <WhatsApp/>
                                </div>
                                <div className="contact-2">
                                    <div className="contact-social">
                                        <ul>
                                            <li>
                                                <Link to={contact.acf.facebook} target='_blank'>
                                                <span className='contact-social' > <Facebook/> </span> 
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to={contact.acf.tiktok} target='_blank'>
                                                <span className='contact-social'> <Tiktok/> </span> 
                                                </Link>
                                             
                                            </li>
                                            <li>
                                                <Link to={contact.acf.linkend} target='_blank'>
                                                <span className='contact-social'> <Linkedin/> </span> 
                                                </Link>
                                               
                                            </li>
                                            <li>
                                                 <Link to={contact.acf.twitter} target='_blank'>
                                                <span className='contact-social'> <Twitter/> </span> 
                                                </Link>
                                               
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="contact-content">

                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        
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
