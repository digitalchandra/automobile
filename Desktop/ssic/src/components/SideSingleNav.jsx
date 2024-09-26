import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import '../style/Style.css'
import { Link } from 'react-router-dom'
export default function SideSingleNav() {
    const[sidenav, setSidenav] = useState([])

    useEffect(()=>{
        let navdata=(`${process.env.REACT_APP_SIDENAV_API_ROOT}`)
        axios.get(navdata).then((res)=>{
            setSidenav(res.data)
        }).catch(err=>{
            console.log(err)
        })
    },[])

  return (
    <>
    <div className="sidebar">
    <ul> 
        {
            
            sidenav?.map((sidenav)=>{
                return(
                    <>
                    <Link to={`/posts/${sidenav.slug}`} target='_parent'>
                        <li key={sidenav.key} className="rightsidenav">
                            <span>{sidenav.title.rendered}</span>
                        </li>
                    </Link>
                
                    </>
                )
            })
            
        }
        </ul>
    </div>
    </>
  )
}
