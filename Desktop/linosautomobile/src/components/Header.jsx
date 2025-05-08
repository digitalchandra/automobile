import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <> 
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <Link class="navbar-brand" to={'/'}>LIONS AUTOMOBILE </Link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav ms-auto">
             
           
              <li class="nav-item">
                <Link class="nav-link" to="/search"> All Car </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/services"> Services</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/aboutus"> About Us</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/contact">Contact Us </Link>
              </li>
   
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}
