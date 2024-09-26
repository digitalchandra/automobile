import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import SecondayNav from '../components/SecondayNav'
import './Single.css'
import {Building,
     PeopleFill, 
     Translate, 
     Mortarboard, 
     Coin, 
     CashStack,
     PassFill,
     PatchCheckFill,
     CardText,
     Cash,
     CodeSlash,
     BuildingFillGear,
    EggFried,
    Briefcase,
    TrainFront,
    Wallet,
    MortarboardFill,
    Check2Circle
    

    } from 'react-bootstrap-icons'
export default function AbroadStudySingle() {
    let {slug} = useParams()

    const [abroadstudy, setAbroadstudy] = useState([])

    useEffect(()=>{
        let url=(`${process.env.REACT_APP_ABORAD_SINGLE_API}/posts?slug=${slug}`)
        axios.get(url).then((res)=>{
            setAbroadstudy(res.data)
        }).catch(err=>{
            console.log(err)
        })
    },[])
  return (
    <>
    <Header/>
    <div className="singleaborad">
            {
                abroadstudy?.map((abroadstudy)=>{
                    return(
                        <>
                        <div className="card asbanner">
                            <img src={abroadstudy.fimg_url} alt={abroadstudy.title.rendered} className='img-fluid' />
                            <div class="card-img-overlay abroad-title">
                                <h1>{abroadstudy.title.rendered}</h1>
                            </div>
                        </div>
                    
                    
                        </>
                    )
                })
            }
        </div>

    <div className="abroadbanner">
    <SecondayNav/>
        <div className="container">
     
            <div className="main-abroad-content" ata-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-offset="0" className="scrollspy-example">
                {
                    abroadstudy?.map((abroadstudy)=>{
                        return(
                            <>
                         
                        <p className="main-abroad" dangerouslySetInnerHTML={{__html: abroadstudy.content.rendered}} />
                        <div className='about-place'> 
                            <h3 id='scrollspyHeading1'>{abroadstudy.acf.title}</h3>
                            {abroadstudy.acf.about_place}
                        </div>
                           <div className="row">
                                <div className="col-md-3">
                                    <div className="abroad-feature">
                                        <span className='feature-icon'> <Building/> </span>
                                            <h4> {abroadstudy.acf.capital} </h4>
                                    </div>
                                </div>

                                <div className="col-md-3">
                                    <div className="abroad-feature">
                                        <span className='feature-icon'> <PeopleFill/> </span>
                                    <h4> {abroadstudy.acf.population} </h4>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="abroad-feature">
                                        <span className='feature-icon'> <Translate/> </span>
                                        <h4> {abroadstudy.acf.language} </h4>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="abroad-feature">
                                        <span className='feature-icon'> <Mortarboard/> </span>
                                        <h4> {abroadstudy.acf.international_students} </h4>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="abroad-feature">
                                        <span className='feature-icon'> <Coin/> </span>
                                        <h4> {abroadstudy.acf.gdp} </h4>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="abroad-feature">
                                        <span className='feature-icon'> <CashStack/> </span>
                                        <h4> {abroadstudy.acf.currency}</h4>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="abroad-feature">
                                        <span className='feature-icon'> <PeopleFill/> </span>
                                        <h4> {abroadstudy.acf.universities} </h4>
                                    </div>
                                </div>
                           </div>

                       {/* Requriement  */}
                       <div className='about-place'> 
                       <h3 id='scrollspyHeading2'> {abroadstudy.acf.admission_title}</h3>
                            {abroadstudy.acf.admission_requirements}
                       </div>
                       <div className="row">
                                <div className="col-md-3">
                                    <div className="abroad-feature">
                                        <span className='feature-icon'> <PassFill/> </span>
                                            <h4> {abroadstudy.acf.passport} </h4>
                                    </div>
                                </div>

                                <div className="col-md-3">
                                    <div className="abroad-feature">
                                        <span className='feature-icon'> <PatchCheckFill/> </span>
                                    <h4> {abroadstudy.acf.academic_certificates} </h4>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="abroad-feature">
                                        <span className='feature-icon'> <CardText/> </span>
                                        <h4> {abroadstudy.acf.work_experience} </h4>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="abroad-feature">
                                        <span className='feature-icon'> <Cash/> </span>
                                        <h4> {abroadstudy.acf.bank_balance_certificate} </h4>
                                    </div>
                                </div>
          
  
                       </div>

                         {/* Visa Procedure  */}
                         <div className='about-place'> 
                         <h3 id='scrollspyHeading3'> {abroadstudy.acf.visa_procedure_title}</h3>
                            {abroadstudy.acf.visa_procedure}
                            </div>
                          <div className="row">
                                        <div className="col-md-3">
                                            <div className="abroad-feature">
                                                <span className='feature-icon'> <Check2Circle/> </span>
                                                    <h6> {abroadstudy.acf.procedure_1} </h6>
                                            </div>
                                        </div>

                                        <div className="col-md-3">
                                            <div className="abroad-feature">
                                                <span className='feature-icon'> <Check2Circle/> </span>
                                            <h6> {abroadstudy.acf.procedure_2} </h6>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="abroad-feature">
                                                <span className='feature-icon'> <Check2Circle/> </span>
                                                <h6> {abroadstudy.acf.procedure_3} </h6>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="abroad-feature">
                                                <span className='feature-icon'> <Check2Circle/> </span>
                                                <h6> {abroadstudy.acf.procedure_4} </h6>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="abroad-feature">
                                                <span className='feature-icon'> <Check2Circle/> </span>
                                                <h6> {abroadstudy.acf.procedure_5} </h6>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="abroad-feature">
                                                <span className='feature-icon'> <Check2Circle/> </span>
                                                <h6> {abroadstudy.acf.procedure_6} </h6>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="abroad-feature">
                                                <span className='feature-icon'> <Check2Circle/> </span>
                                                <h6> {abroadstudy.acf.procedure_7} </h6>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="abroad-feature">
                                                <span className='feature-icon'> <Check2Circle/> </span>
                                                <h6> {abroadstudy.acf.procedure_8} </h6>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="abroad-feature">
                                                <span className='feature-icon'> <Check2Circle/> </span>
                                                <h6> {abroadstudy.acf.procedure_9} </h6>
                                            </div>
                                        </div>
                                    
        
                          </div>

                       {/* Cost of Tution  */}
                        <div className='about-place'> 
                        <h3 id='scrollspyHeading4'> {abroadstudy.acf.tution_fee}</h3>
                                {abroadstudy.acf.const_1}
                        </div>
                        <div className="row">
                                    <div className="col-md-3">
                                        <div className="abroad-feature">
                                            <span className='feature-icon'> <PassFill/> </span>
                                                <h6> {abroadstudy.acf.cost_2} </h6>
                                        </div>
                                    </div>

                                    <div className="col-md-3">
                                        <div className="abroad-feature">
                                            <span className='feature-icon'> <Mortarboard/> </span>
                                        <h6> {abroadstudy.acf.cost_3} </h6>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="abroad-feature">
                                            <span className='feature-icon'> <MortarboardFill/> </span>
                                            <h6> {abroadstudy.acf.cost_4} </h6>
                                        </div>
                                    </div>
                        </div>
                          {/* Cost of Leaving  */}

                                <div className='about-place'> 
                                <h3 id='scrollspyHeading5'> {abroadstudy.acf.cost_title}</h3>
                                    {abroadstudy.acf.cost_of_living}
                                </div>
                                <div className="row">
                                            <div className="col-md-3">
                                                <div className="abroad-feature">
                                                    <span className='feature-icon'> <Coin/> </span>
                                                        <h6> {abroadstudy.acf.rent} </h6>
                                                </div>
                                            </div>

                                            <div className="col-md-3">
                                                <div className="abroad-feature">
                                                    <span className='feature-icon'> <EggFried/> </span>
                                                <h6> {abroadstudy.acf.food} </h6>
                                                </div>
                                            </div>
                                            <div className="col-md-3">
                                                <div className="abroad-feature">
                                                    <span className='feature-icon'> <TrainFront/> </span>
                                                    <h6> {abroadstudy.acf.transport} </h6>
                                                </div>
                                            </div>
                                            <div className="col-md-3">
                                                <div className="abroad-feature">
                                                    <span className='feature-icon'> <Wallet/> </span>
                                                    <h6> {abroadstudy.acf.miscellaneous} </h6>
                                                </div>
                                            </div>
                                </div>
                        {/* Work of Oppertunuty   */}

                                <div className='about-place'> 
                                    <h3 id='scrollspyHeading6'> {abroadstudy.acf.work_opportunity_title}</h3>
                                    {abroadstudy.acf.opportunity_description}
                                </div>
                                <div className="row">
                                            <div className="col-md-3">
                                                <div className="abroad-feature">
                                                    <span className='feature-icon'> <CodeSlash/> </span>
                                                        <h6> {abroadstudy.acf.opportunity_1} </h6>
                                                </div>
                                            </div>

                                            <div className="col-md-3">
                                                <div className="abroad-feature">
                                                    <span className='feature-icon'> <PatchCheckFill/> </span>
                                                <h6> {abroadstudy.acf.opportunity_2} </h6>
                                                </div>
                                            </div>
                                            <div className="col-md-3">
                                                <div className="abroad-feature">
                                                    <span className='feature-icon'> <BuildingFillGear/> </span>
                                                    <h6> {abroadstudy.acf.opportunity_3} </h6>
                                                </div>
                                            </div>
                                            <div className="col-md-3">
                                                <div className="abroad-feature">
                                                    <span className='feature-icon'> <EggFried/> </span>
                                                    <h6> {abroadstudy.acf.opportunity_4} </h6>
                                                </div>
                                            </div>
                                            <div className="col-md-3">
                                                <div className="abroad-feature">
                                                    <span className='feature-icon'> <CardText/> </span>
                                                    <h6> {abroadstudy.acf.opportunity_5} </h6>
                                                </div>
                                            </div>
                                            <div className="col-md-3">
                                                <div className="abroad-feature">
                                                    <span className='feature-icon'> <Briefcase/> </span>
                                                    <h6> {abroadstudy.acf.opportunity_6} </h6>
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
