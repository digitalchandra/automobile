import React from 'react'
import Topbar from '../compoment/Topbar'
import Nav from '../compoment/Nav'
import { useState } from 'react'
import axios from 'axios'

export default function Contact() {
    const[contact, setContact] = useState({
        contactname:"",
        metadescription :"",
        description:""
    })

    const{contactname, metadescription, description} = contact;

    const onChangedata = e=>{
        setContact({...contact,[e.target.name]:e.target.value})
    }

    const onSubmit = async e=>{
        e.preventDefult();
        await axios.post("http://localhost:4000/contact", contactname)
    }
  return (  
    <div className="container-fluid">
    <div className="row">
       <Topbar/>
        <div className="col-md-2">
             <Nav/>
        </div>
        <div className="col-md-10">
           <h3> Contact </h3>
           <form onSubmit={e=>onSubmit(e)}>
            <input 
                type="text" 
                className="form-control mt-3"
                placeholder="Contact Title"
                name="contactname"
                value={contactname}
                onChange={e=>onChangedata(e)} 
            />
            <input 
                type="text" 
                className="form-control mt-3" 
                placeholder="meta Description" 
                name="metadescription" 
                value={metadescription} 
                onChange={e=>onChangedata(e)} 
            />
             <textarea 
                class="form-control mt-3" 
                id="exampleFormControlTextarea1" 
                rows="10"
                name="description"
                value={description}
                onChange={e=>onChangedata(e)} 
             
             ></textarea>
           </form>
           <button type="submit" className="btn btn-primary mt-3"> Submit </button>
         </div>
    </div>
 </div>
  )
}
