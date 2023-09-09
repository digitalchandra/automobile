import React from 'react'
import './Component.css'
import { useState } from 'react'
import { useEffect } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import axios from 'axios';
import HomepageSearch from './HomepageSearch';
export default function HomeSlider() {
  const [slider, setSlider] = useState([])

  useEffect(()=>{
    let url =('https://keshab.lionsautomobiles.com.np/wp-json/wl/v1/slider')
    axios.get(url).then((res)=>{
      setSlider(res.data)

    })
  },[])
  
    
    var settings = {
      dots: true,
      infinite: true,
      // autoplay: true,
      speed: 300,
      slidesToShow: 1,
      arrows: true,
      adaptiveHeight: true
      };

  return (
    <>
    <Slider {...settings}>
      {
        slider?.map((slider)=>{
          return(
            <>
                <div className='slider-control card' >
                  <img src={slider.featured_image.large} alt={slider.title} className='img-fluid' />
                  <div className="card-img-overlay slider-overlay">
                    <div className="row">
                      <div className="col-md-9">
                      <div className="slide-title">
                    <h3>{slider.title}</h3>
                    <span className='slider-text'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, laborum ut! Laudantium ea dicta nam eveniet nesciunt nisi placeat?</span>
                   <br/>
                    <div className="hover-button">
                          <span> 
                          
                              <a href={''}> 
                              Learn More
                              </a>
                            </span>
                      
                       
                    </div>
                    </div>
                      </div>
                      <div className="col-md-3">
                        <HomepageSearch/>
                       
                      </div>
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
