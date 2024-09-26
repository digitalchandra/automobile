import React from 'react'
import './Gallery.css'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import Header from '../../component/Header'
import Footer from '../../component/Footer'
import GallerBanner from '../../images/2.jpg'
export default function Gallery() {

    const[image, setImage] = useState([])

    useEffect(()=>{
        let url=('https://palpa.drs.edu.np/wp-json/wl/v1/gallery')
        axios.get(url).then((res)=>{
            setImage(res.data)
        })
    },[])

  return (
   <>
    <Header/>
    <div className="card gallery-banner">
            <img src={GallerBanner} alt="" className='img-fluid' />
        <div className="card-img-overlay gallery-overlay">
            <div className="gallery-title">
                    <h2> GALLERY </h2>
            </div>
        </div>
    </div>
        <div className="container">
       
            <div className="gallery-main">
            <div className="row">
            {
            image?.map((image)=>{
                return(
                    <>
                   
                    <div className="col-md-3">
                    <img src={image.featured_image.thumbnail} alt=""  className="img-fluid" data-bs-toggle="modal" data-bs-target="#staticBackdrop"/>

                    </div> 
                   
            </>
           
                )
            })
        }
            </div>
        
         </div>
        </div>
    {/* <!-- Button trigger modal --> */}

    <Footer/>
   </>
  )
}
