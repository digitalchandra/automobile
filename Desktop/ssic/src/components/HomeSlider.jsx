import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';


export default function HomeSlider() {
    const [slider, setSlider] = useState()

    useEffect(()=>{
        let url =(`${process.env.REACT_APP_HOME_SLIDE_ROOT}`)
        axios.get(url).then((res)=>{
            setSlider(res.data)
        }).catch(err=>{
          console.log(err)
        })
      
    },[])
    //Error=>
    console.log(slider)
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
      };

  return (
    <>
      <Slider{...settings}> 
    {
        slider?.map((slider)=>{
            return(
                <>
                    <div key={slider.id} className="slider">
                            <img src={slider.featured_image.large} alt="" className='img-fluid'/>
                          
                    </div>
        
                </>
            )
        })
    }
  </Slider>
    </>
  )
}
