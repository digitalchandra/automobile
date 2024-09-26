import React from 'react'
import './Category.css'
import ClintImage from '../../images/card-1.png'
import { StarFill} from 'react-bootstrap-icons'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'

export default function Clint() {
    const [review, setReview] = useState([])

    useEffect(()=>{
        let url=('https://palpa.drs.edu.np/wp-json/wp/v2/posts?categories=7')
        axios.get(url).then((res)=>{
            setReview(res.data)
        })
    },[])
    console.log(review);

  return (
    <>
    <div className="container">
        <div className='clint-title'> What Our Client Says</div>
        <div className="clint-review">
            <div className="row">
                {
                    review?.map((review)=>{
                        return(
                            <>
                              <div className="col-md-4">
                                    <div className='review-box'> 
                                    <div key={review.id} className="clint-name">
                                        <div className="profile">
                                            <img className='img-fluid' src={review.fimg_url} alt={review.title.rendered}  />
                                        </div>
                                        <div className="clint-name">
                                            <span className='name-clint'  > 
                                            {review.title.rendered}
                                            
                                            </span>
                                        </div>
                                    
                                    </div>
                                    <div className="clint-says">
                                      <p dangerouslySetInnerHTML={{__html: review.excerpt.rendered}}></p>
                                           
                                      
                                        <div className='review'>
                                            <StarFill/>
                                            <StarFill/>
                                            <StarFill/>
                                            <StarFill/>
                                            <StarFill/>
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
    </>
  )
}
