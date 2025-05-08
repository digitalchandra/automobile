import React from 'react'
import Header from '../component/Header'
import Footer from '../component/Footer'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import './About.css'


export default function About() {


  const [aboutus, setAbout] = useState([])
  const [mission,setMission] = useState([])
  const [vision, setVision] = useState([])
  const [goal, setGoal] = useState([])
  
  useEffect(()=>{
    let url=('https://palpa.drs.edu.np/wp-json/wp/v2/pages?slug=about-us')
    axios.get(url).then((res)=>{
      setAbout(res.data)
    })
},[])

useEffect(()=>{
  let url=('https://palpa.drs.edu.np/wp-json/wp/v2/pages?slug=mission')
  axios.get(url).then((res)=>{
      setMission(res.data)
  })
},[])



useEffect(()=>{
  let url=('https://palpa.drs.edu.np/wp-json/wp/v2/pages?slug=vision')
  axios.get(url).then((res)=>{
    setVision(res.data)
  })
},[])

useEffect(()=>{
  let url=('https://palpa.drs.edu.np/wp-json/wp/v2/pages?slug=goals')
  axios.get(url).then((res)=>{
    setGoal(res.data)
  })
},[])
  return (
    <>
    <Header/>
   
    <div className="contact-banner">
        {
          
          aboutus?.map((aboutus)=>{
            return(
              <>
                <div className="about-banner">
                <div className="card about-banner">
                  <img src={aboutus.feature_image} alt={aboutus.title.rendered} className='img-fluid' />
                  <div className="card-overlay about-overlay ">
                    <div className="about-us">
                      <h5 className='card-title'> {aboutus.title.rendered} </h5>
                    </div>
                  </div>
                </div>
                </div>
                <div className="container">
                    <div className="row">
                      <div className="about-main-content" dangerouslySetInnerHTML={{__html:aboutus.content.rendered}} >

                      </div>
                    </div>
                </div>
              </>
            )
          })
        }
  
    </div>
 <div className="mission">
    <div className="container">
      <div className="row">
        
          {
            mission?.map((mission)=>{
              return(
                <>
                <div className="col-md-6">
                    <div className="mission-content">
                      <h3> {mission.title.rendered}</h3>
                      <div className="mission-cont" dangerouslySetInnerHTML={{__html:mission.content.rendered}} >

                      </div>
                    </div>
                </div>

                <div className="col-md-6">
                <img src={mission.feature_image} alt="" className='img-fluid' />
                </div>
                </>
              )
            })
          }

      </div>
    </div>
 </div>

<div className="vision">
  <div className="container">
    <div className="row">
      {
          vision?.map((vision)=>{
            return(
              <>
                    <div className="col-md-6">
                      <div className="vision-img">
                      <img src={vision.feature_image} alt="" className='img-fluid' />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="vision-content">
                      <h3> {vision.title.rendered}</h3>
                      <div className="vision-con"  dangerouslySetInnerHTML={{__html:vision.content.rendered}}>

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
<div className="goals">
  <div className="container">
      <div className="row">
        {
            goal?.map((goal)=>{
                return(
                  <>
                      <div className="col-md-6">
                        <div className="goals-content">
                          <h3> {goal.title.rendered}</h3>
                            <div className="goals-con"  dangerouslySetInnerHTML={{__html:goal.content.rendered}}>

                            </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="goals-img">
                        <img src={goal.feature_image} alt={goal.title.rendered} className='img-fluid' />
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
