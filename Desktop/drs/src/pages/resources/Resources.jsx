import React from 'react'
import './resources.css'
import Catbanner from '../../images/1.jpg'
import Header from '../../component/Header'
import Footer from '../../component/Footer'
import {CloudArrowDown, FilePdfFill} from 'react-bootstrap-icons'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'

export default function Resources() {
    const [resource, setResource] = useState([])
 

    useEffect(()=>{
        let url=('https://palpa.drs.edu.np/wp-json/wl/v1/resources');
        axios.get(url).then((res)=>{
            setResource(res.data)
        })
    },[])

  return (
    <>
    <Header/>
        <div className="resources-banner">
            <div class="card text-white">
                <div className="resources-banner">
                <img class="img-fluid" src={Catbanner} alt="Card image"/>
                </div>
          
                <div class="card-img-overlay destination-banner">
              
                                 <div className="resources-title">
                                        <h4>Resources for Uses</h4>
                                        <p class="card-text">This is a wider card with supporting text below as a natural 
                                    lead-in to additional content. This content is a little bit longer.</p>
                                    </div>
                                  
               
                       
                </div>
            </div>
        </div>
      
        <section>

        <div className="container">
       
                {
                    resource?.map((resource)=>{
                       return(
                           <>
                               <div className='resourcebox'>
                                    <div className="row">
                                        <div className="col-md-10 ">
                                            <div className="file">
                                                <FilePdfFill/>
                                            <span className='filetitle'> {resource.title} </span>
                                            </div>
                                    
                                            </div>
                                            <div className="col-md-2">
                                                    <a className='btn btn-success' href={resource.file.url} target='blank' ><CloudArrowDown/> Download </a>
                                            </div>
                                    </div>
                                </div>
                           </>
                       )
                    })
                }
                
       
   
        </div>
            
        </section>
    <Footer/>
    </>
  )
}
