import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function BlogSideNav() {
    const[blognav, setBlognav]=useState([])

    useEffect(()=>{
        let url=(`${process.env.REACT_APP_CATBLOG_API_ROOT}`)
        axios.get(url).then((res)=>{
            setBlognav(res.data)
        }).catch(err=>{
            console.log('Error:',err.message)
        })
    },[])

  return (
    <>
    <div className="col-md-3">
    {
        blognav?.map((blognav)=>{
            return(
                <>
                   <div key={blognav.id} className='leftsidenav'> 
                            <Link to={`/blog/${blognav.id}`} target="_parent"> {blognav.title.rendered}  </Link>               
                          </div>
                </>
            )
        })
    }
    </div>
    </>
  )
}
