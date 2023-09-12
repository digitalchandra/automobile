import React from 'react'
import './Header.css'
import logofooter from '../images/drs-white.png'
import { Link } from 'react-router-dom'

import {Facebook, Instagram, Tiktok, Twitter, CaretRight, TelephoneFill, EnvelopeAtFill, GeoAlt } from 'react-bootstrap-icons'
export default function Footer() {
  return (
    <>
        <div className="footer">
          <div className="container">
            <div className="row">
              <div className="col-md-3">
                  <img src={logofooter} alt="" className='img-fluid' />
              <div className="footer-contact">
                 <p> 
                  <span> Dillibazar-29 Kalika-Marg </span>
                  <br />
                  <span> Phone: +977989799909897786 </span>
                  <br />
                  <span> Email: info@drs.org.np</span>
                 
                 </p>
                
              </div>
        
              </div>
              <div className="col-md-3">
                <div className="student-services">
                    <h4> Contact Details </h4>
                    <ul>
                    <li className='footer-icon'> <span className='footer-i'> <GeoAlt/>  </span> <span className='foot-add'> Dillibazar-29 Kalika-Marg, KTM </span> </li>
                      <li className='footer-icon'> <span className='footer-i'> <TelephoneFill/>  </span> <span className='foot-add'>  Student Resouces </span>  </li>
                      <li className='footer-icon'> <span className='footer-i'> <EnvelopeAtFill/>  </span> <span className='foot-add'>  info@drs.org.np </span>  </li>
 
                     
                    </ul>
                </div>
              </div>
              <div className="col-md-3">
                <div className="quick-link">
                <h4> Quick Links </h4>
                <ul>
                      <li> <CaretRight/> <Link to={'/about'}> About Us </Link> </li>
                      <li> <CaretRight/>  <Link to={'/contact'}> Contact Us </Link> </li>
                    
                      <li>    <Link to="/resources">  <CaretRight/> Resouces </Link> </li>
                   
                     
                    </ul>
                </div>
              </div>
              <div className="col-md-3">
                
                  <div className="footer-social">
                 
                    <Facebook/>
                    <Twitter/>
                    <Instagram/>
                    <Tiktok/>
                  </div>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}
