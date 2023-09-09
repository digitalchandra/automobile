import React from 'react'
import Topbar from '../compoment/Topbar'
import Nav from '../compoment/Nav'
import {Link} from 'react-router-dom'
import './Slide.css'
import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import{Trash,PencilFill} from 'react-bootstrap-icons'


export default function AllSlide() {
    const [slide, setSlide] = useState({
    
        title:"",
        featureimage:"",
        description:""

    })

    const [getSlidr,setSlider] = useState()

    const{title,featureimage, description} = slide;

    const carrySlide = e=>{
        setSlide({...slide,[e.target.name]:e.target.value})
    }

    const onSumbit = async e=>{
        e.preventDefault()
        await axios.post("http://localhost:4000/sliders/",slide)
    }

    const storeSlide = async()=>{
        const serverSlider = await axios.get('http://localhost:4000/sliders')
        setSlider(serverSlider.data.reverse())
    }
    useEffect(()=>{
        storeSlide();
    },[])

    const deleteSlider = async _id=>{
        await axios.delete(`http://localhost:4000/sliders/${_id}`)
        storeSlide()
    }

  return (
    <>
        <Topbar/>
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-2">
                    <Nav/>
                </div>
                <div className="col-md-10">
                 
                       <h3> Add New Slide</h3>

                       <form  onSubmit={e=>onSumbit(e)}>

                            <input 
                                type="text"
                                className="form-control mt-10"
                                placeholder="Slider Title"
                                name="title"
                                value={title}
                                onChange={e=>carrySlide(e)}
                            />
                            <input 
                                class="form-control mt-4" 
                                id="formFileLg" 
                                type="file"
                            />

                            <input 
                                type="text"
                                className="form-control mt-4"
                                placeholder="Link to "
                                name="featureimage"
                                value={featureimage}
                                onChange={e=>carrySlide(e)}
                            /> 
                              <textarea 
                              class="form-control mt-4" 
                              id="exampleFormControlTextarea1" 
                              rows="3"
                              name="description"
                              value={description}
                              onChange={e=>carrySlide(e)}
                              ></textarea> 
                            <button className="btn btn-primary mt-4"> Post Slide </button>
                            </form>

                    <div className="allslide">
                        <h5> All Slide List</h5>

                    <table class="table">
                            <thead>
                                 <tr>
                                 <th scope="col">S.N.</th>
                                 <th scope="col">First</th>
                                 <th scope="col">Action</th>
                                 
                                 </tr>
                             </thead>
                        
                        {
                            getSlidr?.map((getSlidr,index)=>{
                            return(

                                <tbody>
                                    <tr>
                                    <th scope="row" key={index}>{index+1}</th>
                                    <td>{getSlidr.title}</td>
                                    
                                    <td>
                                      <Link to={`/editslide/${getSlidr._id}`}>  <button className='btn btn-success'> <PencilFill/> </button> </Link>
                                        <button onClick={()=>deleteSlider(getSlidr._id)} className='btn btn-danger'> <Trash/> </button>
                                    </td>
                                    </tr>
                                
                                </tbody>
                             )
                            })
                                           
                        }
                       
             
                            </table>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
