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
    const [abroadcat, setAbroadCat] = useState([])

    useEffect(()=>{
        let url= (`${process.env.REACT_APP_ABROAD_API_ROOT}`)
        axios.get(url).then((res)=>{
            setAbroad(res.data)
        })
    },[])
    useEffect(()=>{
        let url = (`${process.env.REACT_APP_ABROADCAT_API_ROOT}`)
        axios.get(url).then((res)=>{
            setAbroadCat(res.data)
        })
    })
  return (
    <>
    <Header/>
    <div className="banner">
        
        <div class="card text-white abroad-cat">
        <img class="img-fluid" src={Catbanner} alt="Card image"/>
            <div class="card-img-overlay destination-banner">
                <div className="aborad">
                    {
                        abroadcat?.map((abroadcat)=>{
                            return(
                                <>
                                 <h5 class="abroad-card-title">{abroadcat.name}</h5>
                                 <p class="abroad-short">{abroadcat.description}</p>
                                </>
                            )
                        })
                    }
                   
                    
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
                                                <Link to={`/abroadstudy/${abroad.id}`} > 
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
