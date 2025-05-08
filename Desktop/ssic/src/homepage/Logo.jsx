import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import '../style/Style.css'
export default function Logo() {
    const [logo, setLogo] = useState([])

    useEffect(()=>{
        let getlogo=(`${process.env.REACT_APP_SITESETTING_ROOT_API}`)
        axios.get(getlogo).then((res)=>{
            setLogo(res.data)
        }).catch(err=>{
            console.log(err)
        })
    },[])

  return (
    <>
    <div className="sitelogo">
        {
            logo?.map((logo)=>{
                return(
                    <>
                    <img src={logo.thumbnial} alt="Ohayou nepal Offical Logo Png" className='img-flud' />
                   </>
                )
              
            })
        }
       
    </div>
    </>
  )
}
