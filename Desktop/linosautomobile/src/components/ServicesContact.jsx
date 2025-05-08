import React from 'react'
import {Whatsapp, Telephone,} from 'react-bootstrap-icons'
import { Link } from 'react-router-dom'
export default function ServicesContact() {
  return (
    <>
    <div className="services-contact">
        <Link to="https://wa.me/9779851038976"> 
        <span className='services-icon'><Whatsapp/> </span> 
       
        </Link>
        <Link to="/contact"> 
        <span className='services-icon'><Telephone/> </span> 
       
        </Link>
    </div>

    </>
  )
}
