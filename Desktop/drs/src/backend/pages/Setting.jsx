import React from 'react'
import Nav from '../compoment/Nav'
import Topbar from '../compoment/Topbar'
export default function Setting() {
  return (
    <div className="container-fluid">
    <div className="row">
       <Topbar/>
        <div className="col-md-2">
             <Nav/>
        </div>
        <div className="col-md-10">
            <h1> Site Setting </h1>
         </div>
    </div>
 </div>
  )
}
