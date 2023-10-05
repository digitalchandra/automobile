import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

export default function CarDetails() {
    const [features, setFeatures] = useState([])

    useEffect(()=>{
       let url =(`${process.env.REACT_APP_SEARCHPOST_API}`)
       axios.get(url).then((res)=>{
           setFeatures(res.data)
       })
    },[])

  return (
    <>
    <div className="features">
        {
            Object.keys(features).length?(
                <>
                 <div className="car-features">
                    <ul>
                        <li>{features.acf.car_price}  </li>
                    </ul>
                </div>
                </>
            ):'Loading...'
        }
       
    </div>
    </>
  )
}
