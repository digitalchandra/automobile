import React from 'react'
import Header from '../component/Header'
import Footer from '../component/Footer'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'


export default function About() {
  const [aboutus, setAbout] = useState([])

  useEffect(()=>{
    let url=('https://palpa.drs.edu.np/wp-json/wp/v2/aboutus/104')
    axios.get(url).then((res)=>{
        setAbout(res.data)
    })
},[])

  return (
    <>
    <Header/>
    {
      aboutus?.map((aboutus)=>{
        return(
          <>
            <div className="about-banner">
            <div className="card">
              <img src={aboutus.thumbnial} alt={aboutus.title.rendered} className='img-fluid' />
              <div className="card-overlay">
                <div className="about-us">
                  <h5 className='card-title'> {aboutus.title.rendered} </h5>
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
