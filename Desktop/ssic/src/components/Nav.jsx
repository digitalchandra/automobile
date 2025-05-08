import React from 'react'
import { Link } from 'react-router-dom';
import '../style/Style.css'
import Logo from '../homepage/Logo';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

export default function Nav() {
   const [abroad, setAbroad] = useState([])

   useEffect(()=>{
      let url =(`${process.env.REACT_APP_ABROAD_NAV_DROPDOWN_API}`)
      axios.get(url).then((res)=>{
         setAbroad(res.data)
      }).catch(err=>{
         console.log(err)
      })
   },[])
  

  return (
    <>
     <nav className="navbar navbar-expand-lg fixed-top navbar-light bg-light">
        <div className="container-fluid">
            <Link className="navbar-brand" to="/"> <Logo/> </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse  navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav justify-content-end ms-auto mb-2 pe-5 mb-lg-0">
            

                 <li className="nav-item dropdown">
                     <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                     Abroad Study
                     </a>
                     <ul className="dropdown-menu">
                        {
                           abroad?.map((abroad)=>{
                              return(
                                 <>
                               <li><Link className="dropdown-item" to={`/abroadstudy/${abroad.slug}`} target='_parent' >{abroad.title.rendered}</Link></li>
                               
                                   <li><hr className="dropdown-divider"/></li>
                                 </>
                              )
                           })
                        }
                      
                     </ul>
                  </li>
                 <li  className="nav-item">
                    <Link className="nav-link active" to="/services" aria-current="page" >Services</Link>
                 </li>
                 <li  className="nav-item">
                    <Link className="nav-link active" to="/explorjapan" aria-current="page" >Exploer Japan</Link>
                 </li>
                 <li  className="nav-item">
                    <Link className="nav-link active" to="/testpreparation" aria-current="page" >Test Preparation</Link>
                 </li>
                 <li  className="nav-item">
                    <Link className="nav-link active" to="/blogs" aria-current="page" >Blogs</Link>
                 </li>
                 <li  className="nav-item">
                    <Link className="nav-link active" to="/about" aria-current="page" >About Us</Link>
                 </li>  
                 <li  className="nav-item">
                    <Link className="nav-link active" to="/contact" aria-current="page" >Contact</Link>
                 </li>         
          
               

            </ul>

            </div>
        </div>
        </nav>
    </>
  )
}
