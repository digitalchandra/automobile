import './Category.css'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default function Itltsads() {

  const [ielts, setIelts] = useState([])

  useEffect(()=>{
    let url = (`${process.env.REACT_APP_IELTSADS_API_ROOT}`)
    axios.get(url).then((res)=>{
      setIelts(res.data)
    })
  },[])

  return (
    <>
    <div className="container">
        <div className="row">
          {
            ielts?.map((ielts)=>{
              return(
                <>
                  <div className="ielts-ads">
                    <div class="card text-white">
                      <img src={ielts.thumbnial} alt="" className="img-fluid"/>
                      <div class="card-img-overlay img-back">
                     
                          <h2 class="card-title"> {ielts.title.rendered}  </h2>
                          <Link to={ielts.acf.ielts_home}> 
                              <button className='btn btn-danger'> Learn More </button> 
                          </Link>
                          
                      </div>
                    </div>
                  </div>
                </>
              )
            })
          }
          
        </div>
    </div>
    </>
  )
}
