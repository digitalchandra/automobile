import React from 'react'
import { Link } from 'react-router-dom'
import {Whatsapp} from 'react-bootstrap-icons'
export default function ComtactForm() {
  return (
    <>
      <div className='contact-form'>

       <div className="whatsapp">
         <h4> Chat With WhatsApp</h4>
      
              <Link to="https://wa.me/9779841600148"> 
              <span className='what'> 
                      <Whatsapp/> 
              </span>
              </Link>
      
         
        </div>
        <div className="messanger">

        </div>
       </div>
    
    </>
  )
}
