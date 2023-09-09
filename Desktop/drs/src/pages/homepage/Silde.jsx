import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Banner from '../../images/world.png'
import Banner2 from '../../images/website2.jpg'
import Banner3 from '../../images/3.jpg'
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import './Category.css'

export default function Silde() {
  const [slider, setSlider] = useState([])

  useEffect(()=>{
    let url=('https://drs.edu.np/wp-json/wp/v2/homeslider')
    axios.get(url).then((res)=>{
      setSlider(res.data)
    })
  },[])
  var settings = {
    dots: true,
    infinite: true,
    autoplay : true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1

  };

  return (
  <>
    <Slider {...settings}>
      {
        slider?.map((slider)=>{
          return(
            <>
              <div className="div card slide-control">
                <img src={slider.thumbnial} alt="" className='img-fluid' />
                  <div className="card-img-overlay slider-overlay">
                    <div className="slider-title">
                    <h5 className='card-title'>{slider.title.rendered}</h5>
                    </div>
                  </div>
                
              </div>
            </>
          )
        })
      }
        
   
   </Slider>

  </>
  )
}
