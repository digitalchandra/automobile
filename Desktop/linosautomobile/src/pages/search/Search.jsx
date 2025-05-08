import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import './Search.css'
import { useState } from 'react'
import { useEffect } from 'react'

import { Link } from 'react-router-dom'
import SearchByBrand from '../../search/SearchByBrand'
import TestBrand from '../brand/TestBrand'
import {CpuFill, CalendarDate, CashStack, 
  FuelPump, Motherboard, CarFrontFill, PatchCheckFill} from 'react-bootstrap-icons'
import axios from 'axios'
export default function Search() {

  const[allcar, setAllcar] = useState([])

  useEffect(()=>{
    let url = (`${process.env.REACT_APP_SEARCHPOST_API}`)
    axios.get(url).then((res)=>{
      setAllcar(res.data)
    }).catch(err=>{
      console.log(err)
    })
  },[])
  return (
    <>
    <Header/>

    <div className="search-banner">
      
         <div className="top-banner">
            <div className="container">
            <span className='search-banner-title'> All Cars </span>
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
                    
                   <SearchByBrand/>

                  </div>
                  <div class="mb-3">
                     

                  </div> 
                
                
              </form>
              </div>
          
            </div>
          <div className="cars-all-brands">
          <TestBrand/>
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
                   <Link to={`/search/${allcar.slug}`}>  <h3> {allcar.title.rendered} </h3> </Link>
                    <p> <span className='search-price-icon'> <CashStack/> </span> <span className='search-price'> Rs: {allcar.acf.car_price} </span>  </p>
                   
                  </div>
                  <div className="shear-info">
                    <ul>
                      <li> <span className='search-info-icon'> <CpuFill/> </span> 
                      <span className='search-info-text'> Engine: {allcar.acf.engine} </span> </li>
                      <li> <span className='search-info-icon'> <CalendarDate/> </span> 
                      <span className='search-info-text'> Model: {allcar.acf.car_modle} </span> </li>
                      <li> <span className='search-info-icon'> <FuelPump/> </span> 
                      <span className='search-info-text'>Fuel: {allcar.acf.fuel_type} </span> </li>
                    
                    </ul>
                    
                    
                   
                  </div>
                  <div className="shear-info">
                    <ul>
                      <li> <span className='search-info-icon'> <CarFrontFill/> </span> 
                      <span className='search-info-text'>Car Type: {allcar.acf.body_style} </span> </li>
                      <li> <span className='search-info-icon'> <PatchCheckFill/> 
                      </span> <span className='search-info-text'>Warranty {allcar.acf.waeeanty} </span> </li>
                      <li> <span className='search-info-icon'> <Motherboard/> </span> 
                      <span className='search-info-text'> Condition: {allcar.acf.condition} </span> </li>
  
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
