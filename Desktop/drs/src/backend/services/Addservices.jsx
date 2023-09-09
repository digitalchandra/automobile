import React from 'react'
import Topbar from '../compoment/Topbar'
import Nav from '../compoment/Nav'
import { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Addservices() {
    const nagivate = useNavigate();

    const [services, setServices] = useState({
        title:"",
        seotitle:"",
        metadescription:"",
        description:""

    });

    const {title,seotitle,metadescription,description} = services;


    const handleData = e=>{
        setServices({...services,[e.target.name]:e.target.value})
    }

    const onSubmit = async e=>{
        e.preventDefault()
        await axios.post("http://localhost:4000/services/",services)
        nagivate("/allservices")
      
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
                <h4> Add New Services</h4>
                <form onSubmit={e=>onSubmit(e)}>
                    <div className="form-group">
                        <input 
                            type="text"
                            className="form-control mt-3"
                            placeholder="Service Title"
                            name="title"
                            value={title}
                            onChange={e=>handleData(e)}
                        />
                        <input 
                            type="text"
                            className="form-control mt-3"
                            placeholder="Services SEO Title"
                            name="seotitle"
                            value={seotitle}
                            onChange={e=>handleData(e)}
                        />

                        <textarea  
                            type="text"
                            rows="3"
                            className="form-control mt-3"
                            placeholder="Meta Description"
                            name="metadescription"
                            value={metadescription}
                            onChange={e=>handleData(e)}
                         
                        >
                        </textarea> 
                        
                        <textarea  
                            type="text"
                            rows="10"
                            className="form-control mt-3"
                            placeholder=" Description"
                            name="description"
                            value={description}
                            onChange={e=>handleData(e)}
                         
                        >
                        </textarea> 
                       
                    </div>
                    <button className="btn btn-primary mt-4" type="submit"> Post Services</button>
                </form>
            </div>
        </div>
    </div>
    
    </>
  )
}
