import React from 'react'
import Testbanner from '../../images/1.jpg'
import Header from '../../component/Header'
import Footer from '../../component/Footer'
import DesImg from '../../images/world.png'
import { useState } from 'react'
import { useEffect } from 'react'
import './Testpreparation.css'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default function Testpreparation() {
    const [test,setTest] = useState([])

    const [testpre, setTestpre] = useState([])


    useEffect(()=>{
        let url=(`${process.env.REACT_APP_TESTPRE_AIP_ROOT}`)
        axios.get(url).then((res)=>{
            setTest(res.data)
        })
    },[])

    useEffect(()=>{
        let url=(`${process.env.REACT_APP_TESTPREPARE_AIP_ROOT}`)
        axios.get(url).then((res)=>{
            setTestpre(res.data)
        })
    })

  return (
    <>
    <Header/>
    <div className="testpreparation">
    <div class="card text-white testimage">
        <img class="img-fluid" src={Testbanner} alt="Card image"/>
            <div class="card-img-overlay destination-banner">
                <div className="aborad">
                    {
                        testpre?.map((testpre)=>{
                            return(
                                <>
                                 <h5 key={testpre.id} class="abroad-card-title"> {testpre.name}</h5>
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
                                    <div key={test.id} class="card text-white cat-destination ">
                                    <img class="card-img" src={test.fimg_url} alt={test.title.rendered}/>

                                        <div class="card-img-overlay destination-banner">
                                            <div className="desti-country">
                                                <h5 class="card-title"> <Link to={`/testpreparation/${test.id}`}>{test.title.rendered} </Link> </h5>
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
