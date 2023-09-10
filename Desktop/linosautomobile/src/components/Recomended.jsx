import React from 'react'
import './Component.css'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { Cash } from 'react-bootstrap-icons'
export default function Recomended() {
    const [recomended, setRecomended] = useState([])

    useEffect(()=>{
        let url=('https://keshab.lionsautomobiles.com.np/wp-json/wp/v2/posts?categories=29')
        axios.get(url).then((res)=>{
            setRecomended(res.data)
        })

    })
  return (
    <>
        <div className="recomended">
            <div className="container">
                <div className="recomended-title">
                    <h1> Recomended Car For You </h1>
                </div>
                <div className="row">
                    {
                        recomended?.map((recomended)=>{
                            return(
                                <>
                                    <div className="col-md-4">
                                        <div class="card reco">
                                        <img src={recomended.fimg_url} class="img-fluid" alt={recomended.title.rendered}/>
                                            <div class="card-img-overlay reco-overlay">

                                                <h5 class="reco-title">{recomended.title.rendered}</h5>
                                                
                                            <div className="re-info">
                                               <span className='reco-icon' > <Cash/>
                                                    <span className='reco-price'>
                                                    30000000
                                                    </span>
                                               </span> 
                                               
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
    
    </>
  )
}
