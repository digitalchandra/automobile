import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

import { GeoAlt, EnvelopeAt, 
  Telephone,
  PatchCheckFill, 
  Facebook, 
  Tiktok, 
  Person,
  Linkedin,
  Twitter,

} from 'react-bootstrap-icons'
import { Link } from 'react-router-dom'

export default function Footer() {
  const[footer, setFooter] =useState([])

  useEffect(()=>{
    let url = (`${process.env.REACT_APP_SITE_SETTING_API}`)
    axios.get(url).then((res)=>{
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
             <div key={footer.id} className="col-md-4">
             <div className="footer-info">
               <h4> Lions Automobiles and Workshop Pvt. Ltd.</h4>
               <span>{footer.acf.footer_description}</span>
              <br/>
              
             </div>
            </div>
            <div className="col-md-4">
             <div className="footer-info">
               <h4> Contact Info</h4>
              <ul>
                <li className='footer-icon'> <span className='f-icon'> <Person/> </span> 
             
                <span className='info-footer'>{footer.acf.contact_person}</span>   
               
                    
                </li>
                <li className='footer-icon'> <span className='f-icon'> <GeoAlt/> </span> 
                
                    <span className='info-footer'> {footer.acf.address}  </span> 

                </li>
                <li className='footer-icon'> <span className='f-icon'> <PatchCheckFill/> </span> 
                    <span className='info-footer'> {footer.acf.registered_number}  </span>   
                </li>
                <li className='footer-icon'> <span className='f-icon'><EnvelopeAt/>  </span> 
                <Link to={`mailto:${footer.acf.emial}`}>
                    <span className='info-footer'>{footer.acf.emial}  </span> 
                    </Link>   
                </li>
                <li className='footer-icon'> <span className='f-icon'> <Telephone/> </span>
                    <Link to={`callto:${footer.acf.phone_number}`}>
                    <span className='info-footer'> {footer.acf.phone_number}   </span>   
                    </Link>
                 </li>
               
              </ul>
              
             </div>
            </div>
            <div className="col-md-4">
             <div className="footer-info">
               <h4> Connect Us With Social Media </h4>
               <Link to={footer.acf.facebook}> 
               <span className='social-icon'> <Facebook/> </span>  
               
               </Link>
               <Link to={footer.acf.tiktok}> 
               <span className='social-icon'> <Tiktok/> </span>  
               
               </Link>
               <Link to={footer.acf.linkedin}> 
               <span className='social-icon'> <Linkedin/> </span>  
               
               </Link>
               <Link to={footer.acf.twitter}> 
               <span className='social-icon'> <Twitter/> </span>  
               
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
