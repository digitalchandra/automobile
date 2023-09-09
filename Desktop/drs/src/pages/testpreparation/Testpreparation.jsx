import React from 'react'
import Testbanner from '../../images/1.jpg'
import Header from '../../component/Header'
import Footer from '../../component/Footer'
import DesImg from '../../images/world.png'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'

export default function Testpreparation() {
    const [test,setTest] = useState([])

    const [testpre, setTestpre] = useState([])


    useEffect(()=>{
        let url=('https://drs.edu.np/wp-json/wp/v2/posts?categories=2')
        axios.get(url).then((res)=>{
            setTest(res.data)
        })
    },[])

    useEffect(()=>{
        let url=('https://drs.edu.np/wp-json/wp/v2/categories?slug=test-preparation')
        axios.get(url).then((res)=>{
            setTestpre(res.data)
        })
    })

  return (
    <>
    <Header/>
    <div className="testpreparation">
    <div class="card text-white">
        <img class="img-fluid" src={Testbanner} alt="Card image"/>
            <div class="card-img-overlay destination-banner">
                <div className="aborad">
                    {
                        testpre?.map((testpre)=>{
                            return(
                                <>
                                 <h5 class="abroad-card-title"> {testpre.name}</h5>
                                    <p class="abroad-short">
                                    {testpre.description}
                                    </p>
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
                    test?.map((test)=>{
                        return(
                            <>
                                <div className="col-md-3">
                                    <div class="card text-white cat-destination ">
                                    <img class="card-img" src={test.fimg_url} alt={test.title.rendered}/>

                                        <div class="card-img-overlay destination-banner">
                                            <div className="desti-country">
                                                <h5 class="card-title"> {test.title.rendered} </h5>
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
