import axios from 'axios';
import React from 'react'
import './SingleDetails.css'
import { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Header from '../component/Header';
import Footer from '../component/Footer';
import BannerImg from '../images/2.jpg'
import AbroadStudySideNav from '../component/AbroadStudySideNav';

export default function ServicesDetails() {
  const{id} = useParams();
  const [content, setContent] = useState([])


  useEffect(()=>{
    let url=(`${process.env.REACT_APP_SINCLESERVICES_API_ROOT}/posts/${id}`)
    axios.get(url).then((res)=>{
      setContent(res.data)
    }).catch(err=>{
      console.log('error:',err.message)
    })

  },[])


  // This is Test

  return (
    <>
    <Header/>
    {
        Object.keys(content).length?(
          <>
              <div className="singebanner">
                <div class="card bg-dark text-white single">
                  <img src={content.fimg_url} alt={content.title.rendered} className='img-fluid' />
                  <div class="card-img-overlay single-banner">
                  <div className="single-title">
                        <h5 class="card-title"> {content.title.rendered} </h5>
                  </div>
                
                  </div>
                </div>
              </div>

              <div className="container">
                <div className="single-detial">
                  <div className="row">
                  <AbroadStudySideNav/>
                    <div className="col-md-9">
                      <div className="singe-full">
                       <div className="" dangerouslySetInnerHTML={{__html:content.content.rendered}} >


                       </div>
                        <img src={content.fimg_url}  alt={content.title.rendered} className='img-fluid' />
                      </div>
                    </div>

                  </div>

                </div>
              
              </div>
          </>
        ):'Loading... Abroad Study'
    }

    <Footer/>
    </>
  )
}
