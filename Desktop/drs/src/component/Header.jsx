import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import logo from '../images/logo.png'
export default function Header() {
  return (
    <>
    <main>
     <header>
    

      <nav className='navbar navbar-expand-lg'>
        <div className="container-fluid">
          <div className="logo">
              <img src={logo} alt="" className='container-fluid' />
          </div>
          
     
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                    <Link className='nav-link' to="/abroadstudy"> Abroad Study  </Link>
                </li>
                <li className="nav-item">
                    <Link className='nav-link ' to="/services" > Services </Link>
                    
                
                </li>
                <li className="nav-item">
                    <Link className='nav-link'to="/testpreparation"> Test Preparation  </Link>
                  </li>
                  <li className="nav-item">
                    <Link className='nav-link'to="/gallery"> Gallery</Link>
                    </li>
                    <li className="nav-item">
                    <Link className='nav-link' to="/blog"> Blog & News</Link>
                    
                    </li>
                    <li className="nav-item">
                    <Link className='nav-link' to="/about"> About Us</Link>
                    </li>
                    <li className="nav-item">
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
