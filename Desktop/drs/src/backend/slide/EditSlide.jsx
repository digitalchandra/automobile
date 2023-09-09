import React from 'react'
import Topbar from '../compoment/Topbar'
import Nav from '../compoment/Nav'

export default function EditSlide() {
  return (
    <>
    <Topbar/>
    <div className='container-fluid'>
        <div className="row"> 
            <div className="col-md-2">
                <Nav/>
            </div>
            <div className="col-md-10">
                Slider Edit 
            </div>
        </div>
    </div>
    
    </>
  )
}
