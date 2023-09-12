import React from 'react'
import Catbanner  from '../../images/2.jpg'
import Header from '../../component/Header'
import Footer from '../../component/Footer'
import '../../pages/homepage/Category.css'
import './AbroadStudy.css'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
export default function AbroadStudy() {
    useEffect(()=>{
        document.title ="Abroad Study | Drs Education Consultency"
    },[])
    const [abroad, setAbroad] = useState([])

    useEffect(()=>{
        let url= ('https://palpa.drs.edu.np/wp-json/wp/v2/posts?categories=3')
        axios.get(url).then((res)=>{
            setAbroad(res.data)
        })
    },[])
  return (
    <>
    <Header/>
    <div className="banner">
        
        <div class="card text-white">
        <img class="img-fluid" src={Catbanner} alt="Card image"/>
            <div class="card-img-overlay destination-banner">
                <div className="aborad">
                    <h5 class="abroad-card-title">Abroad Study </h5>
                    <p class="abroad-short">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    
                </div>
            </div>
        </div>
    
    </div>

    <div className='destination-section'>
        <div className="container">
            <div className="row">
                {
                    abroad?.map((abroad)=>{
                        return(
                            <>
                                <div className="col-md-3">
                                    <div class="card text-white cat-destination ">
                                    <img class="card-img" src={abroad.fimg_url} alt={abroad.title.rendered}/>

                                        <div class="card-img-overlay destination-banner">
                                            <div className="desti-country">
                                                <p key={abroad.id}>
                                                <Link to={`/category/${abroad.id}`} > 
                                                <h5 class="card-title"> {abroad.title.rendered} </h5>
                                                </Link>
                                                </p>
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
