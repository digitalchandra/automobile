import React from 'react'
import './Header.css'
import logofooter from '../images/drs-white.png'
import { Link } from 'react-router-dom'
import {Facebook, Instagram, Tiktok, Twitter, CaretRight} from 'react-bootstrap-icons'
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
                    <h4> Student Services </h4>
                    <ul>
                      <li> <CaretRight/> Student Resouces</li>
                      <li> <CaretRight/> Visa Application</li>
                      <li> <CaretRight/> Recomended University</li>
                      <li> <CaretRight/> Destination </li>
                      <li> <CaretRight/> Test Exam </li>
                     
                    </ul>
                </div>
              </div>
              <div className="col-md-3">
                <div className="quick-link">
                <h4> Quick Links </h4>
                <ul>
                      <li> <CaretRight/> About Us</li>
                      <li> <CaretRight/> Contact Us </li>
                    
                      <li>    <Link to="/resources">  <CaretRight/> Resouces </Link> </li>
                      <li> <CaretRight/> Term and Conditions  </li>
                      <li> <CaretRight/> Privacy Policies </li>
                     
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
