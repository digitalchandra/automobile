import React from 'react'
import './Category.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

export default function Gallery() {

const [slider, setSlider] = useState([])

useEffect(()=>{
  let url=(`${process.env.REACT_APP_GALLERY_API_ROOT}`)
  axios.get(url).then((res)=>{
    setSlider(res.data)
  })
},[])

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
    
  return (
    <>
    <div className="gallery">
    <div className="container">
        <div className="row">
          <div className="gallery-title">
            <h2> Gallery</h2>
          </div>
        <Slider {...settings}>
          {
            slider?.map((slider)=>{
              return(
                <>
                <div key={slider.id} className="div gallery-slider">
                      <img src={slider.featured_image.thumbnail} alt={slider.title} className='img-fluid' />
                 
                     <div className="gallery-title">
                     <h4> {slider.title}</h4>
                     </div>
                 
                 </div>
                </>
              )
            })
          }
              
             
        </Slider>
        </div>
    </div>
    </div>
 
    </>
  )
}
