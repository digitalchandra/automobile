import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

export default function SecondayNav() {
    const [secondnav, setSeconnav] = useState([])

    useEffect(()=>{
        let url=(`${process.env.REACT_APP_ABROAD_NAV_DROPDOWN_API}`)
        axios.get(url).then((res)=>{
            setSeconnav(res.data)
        }).catch(err=>{
            console.log(err)
        })
    },[])

  return (
    <>
   <nav class="navbar navbar-expand-lg navbar-light bg-light">
   <div class="container-fluid">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
       <div class="collapse navbar-collapse" id="navbarNav">
        <ul className="nav nav-pills navbar-nav">

            {
                secondnav?.map((secondnav)=>{
                    return(
                        <>
                            <li className="nav-item">
                                <a className="nav-link" href="#scrollspyHeading1">
                                    {secondnav.acf.menu_title_1}
                                </a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="#scrollspyHeading2">
                                {secondnav.acf.menu_title_2}
                                </a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="#scrollspyHeading3">
                                {secondnav.acf.menu_title_3}
                                </a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="#scrollspyHeading4">
                                    {secondnav.acf.menu_title_4}
                                </a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="#scrollspyHeading5">
                                    {secondnav.acf.menu_title_5}
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#scrollspyHeading5">
                                    {secondnav.acf.menu_title_5}
                                </a>
                            </li>
                        </>
                    )
                })
            }
          
         
        </ul>
        </div>
    </div>
        </nav>
 
    
    </>
  )
}
