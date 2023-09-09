import React from 'react'
import Nav from '../compoment/Nav'
import './Dashboard.css'
import Topbar from '../compoment/Topbar'
import Logo1 from '../../images/logo.png'
export default function Dashboard() {
  return (
    <div className="container-fluid">
       <div className="row">
          <Topbar/>
           <div className="col-md-2">
                <Nav/>
           </div>
           <div className="col-md-10">
               <div className="dashboard-logo">
                    <img src={Logo1} alt="" className='img-fluid' />
               </div>
            </div>
       </div>
    </div>
  )
}
