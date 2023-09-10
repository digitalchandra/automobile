import axios from 'axios';
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import './Component.css'
import { CashCoin } from 'react-bootstrap-icons';

export default function Whyus() {
    const[getwhyus, setWhyus] = useState([]);
    
    useEffect(()=>{
        let url=('https://keshab.lionsautomobiles.com.np/wp-json/wp/v2/whyus')
        axios.get(url).then((res)=>{
            setWhyus(res.data)
        })
    },[])
  return (
    <>
        <div className="why">
            <div className="whyback">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="whyinfo">
                        <h1> This is the Why Choose</h1>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo sint atque ipsam inventore veritatis, rem quidem tempore nisi ipsum perspiciatis optio quas saepe. Temporibus nisi maxime pariatur, perspiciatis debitis repudiandae!</p>
                        <a href="" className=''> Learn More </a>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className="whycard">
                        <div className="row">
                                {
                                    getwhyus?.map((getwhyus)=>{
                                        return(
                                            <>
                                                <div className="col-md-6 ">
                                                    <div className="whymainbackgroun">
                                                        <div className="whyanimation">
                                                            
                                                                <div className="why-card-control">
                                                                <div className="whyuscard">
                                                                    <span className='whyusicon'>
                                                                        <CashCoin/>
                                                                    </span>
                                                                    <h5> {getwhyus.title.rendered}</h5>
                                                                
                                                                </div>
                                                                <div className="number">
                                                                        <h1> {getwhyus.id}</h1>
                                                                </div>
                                                            </div>
                                                        </div>
                                               
                                                    </div>
                                          
                                                   
                                                </div>
                                            </>
                                        )
                                    })
                                }
                      
                            </div>
                        </div>
                            
                    </div>
                </div>

            </div>
            </div>
          
        </div>

    </>
  )
}
