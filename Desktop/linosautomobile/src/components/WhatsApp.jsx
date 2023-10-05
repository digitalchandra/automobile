import React from 'react'
import {Whatsapp} from 'react-bootstrap-icons'
import { Link } from 'react-router-dom'
export default function WhatsApp() {
  return (
    <>
    <div className="message">
        <h4> QUICK ENQUIRY</h4>
        <Link to="https://wa.me/9779851038976">   
            <div className="whatsapp">
                <span className='whatsappicon'> <Whatsapp/> </span>
            </div>
        </Link>
    </div>
    </>
  )
}
