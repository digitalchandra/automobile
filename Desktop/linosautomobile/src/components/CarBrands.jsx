import React from 'react'
import './Component.css'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'

export default function CarBrands() {
    const [categories, setCategory] = useState([])

    useEffect(()=>{
        let url = (`${process.env.REACT_APP_CAR_BRAND_API}`)
        axios.get(url).then((res)=>{
            setCategory(res.data)
        }).catch(err=>{
            console.log(err)
        })
    },[])
  return (
    <>
        <div className="brands">
            <h3> Car Brands </h3>
            {
                categories?.map((categories)=>{
                    return(
                        <>
                          <div className="brands-name">
                                <h5> {categories.name}  </h5> <h5> ({categories.count}) </h5>
                            </div>
                        </>
                    )
                })
            }
          

        </div>
    </>
  )
}
