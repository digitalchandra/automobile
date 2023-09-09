import React from 'react'
import './Nav.css'
import {Link} from 'react-router-dom'
import { Speedometer,PencilSquare,BagCheck,AspectRatio,PersonLinesFill,Person, Images,Gear,PatchQuestion,FastForwardBtnFill, BookFill,PencilFill } from 'react-bootstrap-icons';


export default function Nav() {
  return (
    <>
        <div className="sidenav">
            <ul>
                <li>  <Link to="/dashboard"> <Speedometer/> Dashboard </Link> </li>
                <li> <Link to="/allblog"> <PencilSquare/> News & Blogs </Link>  </li>
                <li>  <Link to="/product">  <BookFill/> Abroad Study </Link>  </li>
                <li> <Link to="/allservices"> <AspectRatio/>  Services </Link> </li>
                <li> <Link to="/alltest"> <PencilFill/>  Test Preparation </Link> </li>
                <li> <Link to="/allvideo"> <FastForwardBtnFill/>  Videos Content </Link> </li>
                <li> <Link to="/contactus">  <PersonLinesFill/>  Contact </Link> </li>
                <li> <Link to="/aboutus"> <Person/> About  </Link> </li>
                <li> <Link to="/allslide"> <Images/> Slide  </Link> </li>
                <li> <Link to="/sitesetting"> <Gear/> Site Setting  </Link> </li>
                <li> <Link to="/allfaq"> <PatchQuestion/> FAQ  </Link> </li>
                
            </ul>
        </div>
    </>
  )
}
