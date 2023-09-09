
import Topbar from "../compoment/Topbar"
import Nav from "../compoment/Nav"

import React from 'react'

export default function AddTest() {
  return (
    <>
    <Topbar/>
    <div className="container-fluid">
        <div className="row">
            <div className="col-md-2">
                <Nav/>
            </div>
            <div className="col-md-10">
                    <h1> Add Test Exam</h1>
            </div>
        </div>
    </div>
    </>
  )
}
