import React from 'react'
import { GeoAlt, EnvelopeAt, Telephone,PatchCheckFill, CaretRight } from 'react-bootstrap-icons'
export default function Footer() {
  return (
    <>
      <div className="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
             <div className="footer-info">
               <h4> Lions Automobiles and Workshop Pvt. Ltd.</h4>
               <span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad doloribus repudiandae, veniam debitis numquam dignissimos voluptatum quis amet! Eum voluptatum corporis iure eos quasi nisi non alias culpa hic dolor?</span>
              <br/>
              
             </div>
            </div>
            <div className="col-md-4">
             <div className="footer-info">
               <h4> Contact Info</h4>
              <ul>
                <li className='footer-icon'> <span className='f-icon'> <GeoAlt/> </span> 
                    <span className='info-footer'>Kathmandu-08, Guheshwari, Kathmandu  </span>   
                </li>
                <li className='footer-icon'> <span className='f-icon'> <PatchCheckFill/> </span> 
                    <span className='info-footer'>Reg:93114/068/069  </span>   
                </li>
                <li className='footer-icon'> <span className='f-icon'><EnvelopeAt/>  </span> 
                    <span className='info-footer'>info@lionsautomobiles.com.np  </span>    
                </li>
                <li className='footer-icon'> <span className='f-icon'> <Telephone/> </span>
                    <span className='info-footer'> +977-9851038976   </span>   
                 </li>
               
              </ul>
              
             </div>
            </div>
            <div className="col-md-4">
             <div className="footer-info">
               <h4> Usefull Links </h4>
              <ul>
                <li> <CaretRight/> About Us </li>
                <li> <CaretRight/> Contact Us </li>
                <li> <CaretRight/> Blogs</li>
              </ul>
              
             </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
