import axios from 'axios';
import React from 'react'
import './SingleDetails.css'
import { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Header from '../component/Header';
import Footer from '../component/Footer';
import BannerImg from '../images/2.jpg'
import {Link} from 'react-router-dom'
export default function ServicesDetails() {
  const{id} = useParams();
  
  const [content, setContent] = useState([])
  const [leftnav, setLeftnav] = useState([])

  useEffect(()=>{
    let url=(`https://palpa.drs.edu.np/wp-json/wp/v2/posts?categories=3/${id}`)
    axios.get(url).then((res)=>{
      setContent(res.data)
    })

  },[])

  useEffect(()=>{
    let url=('https://palpa.drs.edu.np/wp-json/wp/v2/posts?categories=3')
    axios.get(url).then((res)=>{
      setLeftnav(res.data)
    })
  },[])
  // This is Test

  return (
    <>
    <Header/>
    <div className="singebanner">
      <div class="card bg-dark text-white single">
        <img src={BannerImg} alt="" className='img-fluid' />
        <div class="card-img-overlay single-banner">
         <div className="single-title">
              <h5 class="card-title"> Study in UK </h5>
         </div>
      
        </div>
      </div>
    </div>

    <div className="container">
      <div className="single-detial">
        <div className="row">
          <div className="col-md-3">
            {
              leftnav?.map((leftnav)=>{
                return(
                  <>
                   <div className='leftsidenav'> 
                      <Link to={''}> {leftnav.title.rendered}  </Link>               
                 </div>
                  </>
                )
              })
            }
               
        
           <div className='contact-form'>
           <form>
                <div class="mb-3">
                 
                  <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>
                <div class="mb-3">
                 
                 <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
               </div>
                <div class="mb-3">
                  <input type="email" class="form-control" id="exampleInputPassword1"/>
                </div>
             
                <button type="submit" class="btn btn-primary">Submit</button>
              </form>
           </div>
          </div>
          <div className="col-md-9">
            <div className="singe-full">
              <>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</>
              <img src={BannerImg} alt="" className='img-fluid' />
            </div>
          </div>

        </div>

      </div>
    
    </div>
    <Footer/>
    </>
  )
}
