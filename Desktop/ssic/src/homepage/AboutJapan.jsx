import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import '../style/Style.css'

export default function AboutJapan() {
    const [japan, setJapan]=useState([])
    const [explor, setExplor] = useState([])

    useEffect(()=>{
        let url=(`${process.env.REACT_APP_EXPLORE_JAPAN_API}`)
        axios.get(url).then((res)=>{
            setJapan(res.data)
        })
    },[])

    useEffect(()=>{
        let url = (`${process.env.REACT_APP_JAPAN_HOME_API}`)
        axios.get(url).then((res)=>{
            setExplor(res.data)
        })
    },[])

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        autoplay: true,
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
    }
  return (
    <>
    <div className="aboutjapan">
        <div className="overlay-japan">
        <div className="container">
            <div className="japan">
                {
                    japan?.map((japan)=>{
                        return(
                            <>
                             <span className='thin-title'> Explore </span> <span className='blod-title'>Japan</span>
                            <p>{japan.description}</p>
                            </>
                        )
                    })
                }
                <div className="row">
                <Slider{...settings}> 
                   
                        {
                            explor?.map((explor)=>{
                                return(
                                    <>
                                     
                                         
                                         <div className="col-md-4 explor-ja">
                                             <Link to={`/posts/${explor.slug}`}>
                                             <div key={explor.id} className="japan-col">
                                                    <div className="j-text">
                                                            <h3>
                                                                <p>{explor.title.rendered}</p>
                                                            </h3>
                                                    </div>
                                                
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
        </div>
        </div>

    </div>
    </>
  )
}
