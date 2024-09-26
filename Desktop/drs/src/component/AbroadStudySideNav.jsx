import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import ComtactForm from './ComtactForm'
export default function () {
    const [abroadnav, setAbroadnav] = useState([])

    useEffect(()=>{
        let url =(`${process.env.REACT_APP_ABROAD_API_ROOT}`)
        axios.get(url).then((res)=>{
            setAbroadnav(res.data)
        }).catch(err=>{
            console.log('error:', err.message)
        }

        )
        
    },[])
  return (
    <>
      <div className="col-md-3">
            {
              abroadnav?.map((abroadnav)=>{
                return(
                  <>
                   <div className='leftsidenav'> 
                      <Link to={`/abroadstudy/${abroadnav.id}`} target="_parent" > {abroadnav.title.rendered}  </Link>               
                 </div>
                  </>
                )
              })
            }
               
            <ComtactForm/>
          </div>
    </>
  )
}
