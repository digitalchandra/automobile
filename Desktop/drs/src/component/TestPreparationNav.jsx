import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import ComtactForm from './ComtactForm'
export default function TestPreparationNav() {
    const [testsidenav, setTestNav] = useState([])


    useEffect(()=>{
        let url=(`${process.env.REACT_APP_TESTPRE_AIP_ROOT}`)
        axios.get(url).then((res)=>{
            setTestNav(res.data)
        }).catch(err=>{
            console.log('error',err.message)
        })
    },[])

  return (
    <>
         <div className="col-md-3">
            {
                testsidenav?.map((testsidenav)=>{
                    return(
                        <>
                          <div key={testsidenav.id} className='leftsidenav'> 
                            <Link to={`/testpreparation/${testsidenav.id}`} target="_parent"> {testsidenav.title.rendered}  </Link>               
                          </div>
                        </>
                    )
                })
            }
          <ComtactForm/>
          </div>
    </>
  )
}
