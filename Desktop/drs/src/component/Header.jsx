import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import { arrow } from 'react-bootstrap-icons';
import logo from '../images/logo.png'
export default function Header() {
  return (
    <>
    <main>
     <header>
    

      <nav className='navbar navbar-expand-lg'>
        <div class="container-fluid">
          <div className="logo">
              <img src={logo} alt="" className='container-fluid' />
          </div>
          
     
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          
              <ul class="nav navbar-nav ml-auto w-100 justify-content-end">
                <li class="nav-item">
                    <Link className='nav-link' to="/abroadstudy"> Abroad Study  </Link>
                </li>
                <li class="nav-item">
                    <Link className='nav-link ' to="/services" > Services </Link>
                    
                
                </li>
                <li class="nav-item">
                    <Link className='nav-link'to="/testpreparation"> Test Preparation  </Link>
                  </li>
                  <li class="nav-item">
                    <Link className='nav-link'to="/gallery"> Gallery</Link>
                    </li>
                    <li class="nav-item">
                    <Link className='nav-link' to="/blog"> Blog & News</Link>
                    
                    </li>
                    <li class="nav-item">
                    <Link className='nav-link' to="/about"> About Us</Link>
                    </li>
                    <li class="nav-item">
                    <Link className='nav-link' to="/contact"> Contact</Link>
                    </li>
              </ul>
            
         </div>
         </div>
      </nav>
    </header>
    </main>
    </>

    
  )
}
