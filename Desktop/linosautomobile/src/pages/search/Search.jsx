import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Car from '../../image/car.jpg'
import './Search.css'
import { useState } from 'react'
import { useEffect } from 'react'
import CarBrands from '../../components/CarBrands'

import {CpuFill, CalendarDate, FuelPump, Motherboard, GearWideConnected} from 'react-bootstrap-icons'
import axios from 'axios'
export default function Search() {

  const[allcar, setAllcar] = useState([])

  useEffect(()=>{
    let url = ('https://keshab.lionsautomobiles.com.np/wp-json/wp/v2/posts')
    axios.get(url).then((res)=>{
      setAllcar(res.data)
    })
  })
  return (
    <>
    <Header/>

    <div className="search-banner">
      
         <div className="top-banner">
            <div className="container">
            <span className='search-banner-title'> This is The Banner </span>
            </div>
         </div>
    </div>
    <div className="container">
      <div className="row">
        <div className="col-md-3">
            <div className="car-search-box">
              
              <div className="searchbox">
              <h3> Search Cars</h3>
              <form>
                   <div class="mb-3">
                      
                      <label for="exampleInputEmail1" class="form-label"> Search By Brand</label>
                      <input type="text" class="form-control"  aria-describedby="emailHelp" placeholder='Brand'/>

                  </div>
                  <div class="mb-3">
                      
                      <label for="exampleInputEmail1" class="form-label"> Search By Brand</label>
                      <input type="text" class="form-control"  aria-describedby="emailHelp" placeholder='Brand'/>

                  </div> 
                
                
              </form>
              </div>
          <CarBrands/>
            </div>
            
        </div>
        <div className="col-md-9">
          {
            allcar?.map((allcar)=>{
              return(
                <>
                    <div className="car-list">
            <div className="row result">
                <div className="col-md-5">
                  <div className="search-box-image">
                      <img src={allcar.fimg_url} alt="" className='img-fluid' />
                  </div>
                 
                </div>
                <div className="col-md-7">
                  <div className="search-details">
                    <h3> {allcar.title.rendered} </h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                  </div>
                  <div className="shear-info">
                    <ul>
                      <li> <span className='search-info-icon'> <CpuFill/> </span> <span className='search-info-text'> Car Types </span> </li>
                      <li> <span className='search-info-icon'> <CalendarDate/> </span> <span className='search-info-text'> Car Types </span> </li>
                      <li> <span className='search-info-icon'> <FuelPump/> </span> <span className='search-info-text'> Car Types </span> </li>
                      <li> <span className='search-info-icon'> <Motherboard/> </span> <span className='search-info-text'> Car Types </span> </li>
                    </ul>
                    
                    
                   
                  </div>
                  <div className="shear-info">
                    <ul>
                      <li> <span className='search-info-icon'> <CpuFill/> </span> <span className='search-info-text'> Car Types </span> </li>
                      <li> <span className='search-info-icon'> <CalendarDate/> </span> <span className='search-info-text'> Car Types </span> </li>
                      <li> <span className='search-info-icon'> <FuelPump/> </span> <span className='search-info-text'> Car Types </span> </li>
                      <li> <span className='search-info-icon'> <Motherboard/> </span> <span className='search-info-text'> Car Types </span> </li>
                    </ul>
                    
                    
                   
                  </div>
                </div>
            </div>
          </div>
                </>
              )
            })
          }
      

          </div>
      </div>
    </div>
    <Footer/>
    </>
  )
}
