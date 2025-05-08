import React from 'react'
import {Facebook, 
  Tiktok, 
  Youtube, 
  EnvelopeAtFill, 
  TelephoneFill, 
  GeoAltFill,
  Linkedin,
  Twitter
} from 'react-bootstrap-icons'
import { useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'


export default function Footer() {
  const[footer, setFooter]=useState([])

  useEffect(()=>{
    let flogo=(`${process.env.REACT_APP_SITESETTING_ROOT_API}`)
    axios.get(flogo).then((res)=>{
      setFooter(res.data)
    }).catch(err=>{
      console.log(err)
    })
  },[])

  return (
    <>

       <div className="footer">
         <div className="container">
          <div className="row">
          {
            footer?.map((footer)=>{
              return(
                <>
                     <div className="col-md-4">
                        <div className="footer-info">
                          <img src={footer.thumbnial} alt="Footer Logo of Ohayou Nepal" className='img-fluid' />
                          
                          <p> {footer.acf.foter_description}</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="imp-link">
                            <h5>
                            Contact Information
                            </h5>
                          <div className="footer-co">
                              <ul>
                                <li> <span className='f-contact-cion'> <EnvelopeAtFill/>  </span> 
                                <span className='f-contact-info'>
                                    <Link to={`mailto:${footer.acf.footer_email}`}> 
                                        {footer.acf.footer_email} 
                                  </Link> 
                                </span>
                                
                                 </li>
                                <li> <span className='f-contact-cion'> <TelephoneFill/>  </span> 
                                    <span className='f-contact-info'>
                                        <Link to={`tel:${footer.acf.footer_email}`}> 
                                            {footer.acf.footer_phone} 
                                      </Link> 
                                    </span>
                                 </li>
                                <li> <span className='f-contact-cion'> <GeoAltFill/> </span>  
                                      <span className='f-contact-info'>
                                            <Link to={`${footer.acf.footer_email}`}> 
                                                {footer.acf.footer_address} 
                                          </Link> 
                                        </span>
                                </li>
                              </ul>
                          </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="social">
                          <h5> Connect With Social Media</h5>
                          <Link to={footer.acf.facebook} target='_blank'> 
                             <span className='footer-social'> <Facebook/> </span>
                          </Link>
                          <Link to={footer.acf.tiktok} target='_blank'> 
                             <span className='footer-social'><Tiktok/>  </span>
                          </Link>
                          <Link to={footer.acf.youtube} target='_blank'> 
                             <span className='footer-social'>    <Youtube/> </span>
                          </Link>
                          <Link to={footer.acf.linkind} target='_blank'> 
                             <span className='footer-social'>    <Linkedin/> </span>
                          </Link>
                          <Link to={footer.acf.twitter} target='_blank'> 
                             <span className='footer-social'>    <Twitter/> </span>
                          </Link>
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
