import React from 'react'
import Topbar from '../compoment/Topbar'
import Nav from '../compoment/Nav'

export default function AddSlide() {
    
  return (
    <>
    <Topbar/>
        <div className="container-fluid">

            <div className="row">
                <div className="col-md-2">
                <Nav/>
                </div>
                <div className="col-md-10">
                <form >

                        <input 
                            type="text"
                            className="form-control mt-10"
                            placeholder="Slider Title"
                            name="title"
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
                            name="title"
                        />  

                        </form>
                </div>
            </div>
        </div>
    </>
  )
}
