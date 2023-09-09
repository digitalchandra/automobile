import React from 'react'
import Topbar from '../compoment/Topbar'
import Nav from '../compoment/Nav'
import { useState } from 'react'
import axios from 'axios'

export default function About() {

    const [about, setAbout] = useState({
        abouttitle:"",
        metadescription:"",
        details:""
    })

    const {abouttitle, metadescription, details} = about;

    const onData = e =>{
        setAbout({...about,[e.target.name]:e.target.value})
    }

    const onSumbit = async e =>{
        e.preventDefult();
        await axios.post("",about)
    }

  return (
    <div className="container-fluid">
    <div className="row">
       <Topbar/>
        <div className="col-md-2">
             <Nav/>
        </div>
        <div className="col-md-10">
            <h5> About Us page </h5>
            <form onSubmit={e=>onData(e)}>
                <input 
                    type="text" 
                    className="form-control mt-3" 
                    name="abouttitle" 
                    id="" 
                    value={abouttitle}
                    onChange={e=>onData(e)}
                />
                <input 
                    type="text" 
                    className="form-control mt-3" 
                    name="metadescription" 
                    id="" 
                    value={metadescription}
                    onChange={e=>onData(e)}
                />
            <textarea 
                    class="form-control mt-3" 
                    id="exampleFormControlTextarea1" 
                    rows="10"
                    name="details"
                    value={details}
                    placeholder="Description"
                    onChange={e=>onData(e)}
                >


            </textarea>
            </form>
            <button type="submit" className="btn btn-primary mt-4"> Submit </button>
         </div>
    </div>
 </div>
  )
}
