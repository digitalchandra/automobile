import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

export default function HomeSearchByBrand() {
    const [homesearch, setHomeSearch] = useState([])

    useEffect(()=>{
        let url=(`${process.env.REACT_APP_HOME_BRAND_SEARCH_API}`)
        axios.get(url).then((res)=>{
            setHomeSearch(res.data)
        }).catch(err=>{
            console.log(err)
        })
    },[])

  return (
    <>
    <div className="homeSearch">

            <div className="btn-group">
            <button className="btn btn-light btn-lg dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="true">
                Search By Brand
            </button>
            <ul className="dropdown-menu homedropdown">
                {
                    homesearch?.map((homesearch)=>{
                        return(
                            <>
                              
                                    <li>{homesearch.name} </li>
                        
                         
                            </>
                        )
                    })
                }
            </ul>
            </div>
    
    </div>
    </>
  )
}
