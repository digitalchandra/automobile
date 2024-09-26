import React, { useEffect, useState } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import axios from 'axios';
import { Link } from 'react-router-dom';
export default function CarBrand() {

  const[carbarnd, setCarbrand]= useState([])

  useEffect (()=>{
    let url=(`${process.env.REACT_APP_HOME_BRAND_SLIDER_API}`)
    axios.get(url).then((res)=>{
      setCarbrand(res.data)
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
    <div className="car-brands">
        <div className="container">
          <div className="brand-title">
            <h1> Find the Available Car Brands</h1>
          </div>
          
        </div>
      <div className="container">
         <Slider {...settings}>
           {
             carbarnd?.map((carbarnd)=>{
               return(
                 <>
                  <div className="brand-card-1">
                      <Link to={carbarnd.acf.brand_link} target='_blank'>
                    <div className="card-control">
                      <div className='car-card '>
                          <img src={carbarnd.thumbnial} alt={carbarnd.title.rendered} className='img-fluid' />
                        
                        </div>
                        <h4>{carbarnd.title.rendered}</h4>
                    </div>
                        
                    </Link>
                  </div>
                
                 </>
               )
             })
           }
              
          </Slider>
      </div>

    </div>
  
    </>
  )
}
