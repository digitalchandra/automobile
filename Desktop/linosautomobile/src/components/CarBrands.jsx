import React from 'react'
import './Component.css'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'

export default function CarBrands() {
    const [categories, setCategory] = useState([])

    useEffect(()=>{
        let url = ('https://keshab.lionsautomobiles.com.np/wp-json/wp/v2/categories')
        axios.get(url).then((res)=>{
            setCategory(res.data)
        })
    })
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
