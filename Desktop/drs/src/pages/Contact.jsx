import React from 'react'
import Header from '../component/Header'
import Footer from '../component/Footer'
import { useState } from 'react'
import { useEffect } from 'react'
import Cbanner from '../images/2.jpg'
import axios from 'axios'
import '../pages/homepage/Category.css'

export default function Contact() {

  const [contact, setContact] = useState()

  useEffect(()=>{
    let url = (`${process.env.REACT_APP_CONTACT_API_ROOT}`)
    axios.get(url).then((res)=>{
      setContact(res.data)
    })
  },[])
  

  return (
    <>
    <Header/>
    {
            contact?.map((contact)=>{
              return(
                <>
    <div className="contact">
      <div class="card bg-dark text-white contact-img">
      <img src={Cbanner} alt="" className='img-fluid' />
        <div class="card-img-overlay destination-banner">
          <div className="contact-title">
          <h5 class="contact-1">{contact.title.rendered}</h5>
          <p class="card-text"  >

          </p>
          
          </div>
         
        </div>
      </div>
      
    </div>
      <div className="container">
        <div className="row">
      
                <div className="col-md-8">
                   <div className="contact-content">
                   <p dangerouslySetInnerHTML={{__html: contact.content.rendered}}> 
                   
                   </p>
                   </div>
                   
                </div>
                <div className="col-md-4">
                {contact.featured_media}
                  <img src="" alt="" />
                </div>
         
     
        </div>
      </div>
      </>
      )
    })
  }

    <div className="map">
      <div className="drsmap">
   
      </div>
    </div>
    <Footer/>
    </>
  )
}
