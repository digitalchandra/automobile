import './App.css'; 
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap'
import Home from './pages/homepage/Home'
import {Routes, Route} from 'react-router-dom'
import About from './pages/About'
import Contact from './pages/Contact';
import AbroadStudy from './pages/abroadstudy/AbroadStudy';
import Services from './pages/services/Services';
import Resources from './pages/resources/Resources';
import Testpreparation from './pages/testpreparation/Testpreparation';
import Blog from './pages/blgo/Blog';
import ServicesDetails from './detialspages/ServicesDetails.jsx'
import AbroadStudydetails from './detialspages/AbroadStudydetails';
import Gallery from './pages/gallery/Gallery';
import TestPreparationDetails from './detialspages/TestPreparationDetails.jsx'
import BlogDetails from './detialspages/BlogsDetails.jsx'
import { useEffect } from 'react';

function App() {
  useEffect(()=>{
      document.title ="Home | Drs Education Consultency"
  },[])
  return (
    <>
          <Routes>
            <Route  path="/" element={<Home/>}/> 
            <Route  path="/about" element={<About/>}/> 
            <Route  path="/contact" element={<Contact/>}/> 
       
        
    
       
            <Route path ="/abroadstudy" element={<AbroadStudy/>}/>
            <Route path ="/services" element={<Services/>}/>
            <Route path ="/resources" element={<Resources/>}/>
            <Route path ="/testpreparation" element={<Testpreparation/>}/>
            <Route path ="/blog" element={<Blog/>}/>
            <Route path = "/abroadstudy/:id" element={<ServicesDetails/>}/>
            <Route path ="/services/:id" element={<AbroadStudydetails/>}/>
            <Route path ="/gallery" element={<Gallery/>}/>
            <Route path ="/testpreparation/:id" element={<TestPreparationDetails/>}/>
            <Route path ="/blog/:id" element={<BlogDetails/>}/>

        </Routes>
    
    </>
  );
}

export default App;
