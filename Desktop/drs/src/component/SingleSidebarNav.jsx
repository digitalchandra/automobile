import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import ComtactForm from './ComtactForm'
export default function SingleSidebarNav() {
    const [studynav, setStudynav] = useState([])

    useEffect(()=>{
        let url=(`${process.env.REACT_APP_SERVICES_API_ROOT}`)
        axios.get(url).then((res)=>{
            setStudynav(res.data)
        })
    },[])
  return (
    <>
     <div className="col-md-3">
            {
              studynav?.map((studynav)=>{
                return(
                  <>
                  
                   <div key={studynav.id} className='leftsidenav'> 
                      <Link to={`/services/${studynav.id}`} target="_parent"> {studynav.title.rendered}  </Link>               
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
