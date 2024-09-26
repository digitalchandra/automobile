import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Homepage from './homepage/Homepage';
import AbroadStudy from './pages/abroadstudy/AbroadStudy';
import Services from './pages/services/Services'
import Explorjapan from './pages/explorjapan/Explorjapan'
import Testpreparation from './pages/testpreparation/Testpreparation';
import Blogs from './pages/blogs/Blogs';
import SingleServices from '../src/singlepage/SingleServices.jsx'
import About from './pages/aboutus/About';
import Contact from './pages/contactus/Contact';
import AbroadStudySingle from './singlepage/AbroadStudySingle';
function App() {

  return (
    <>
    <BrowserRouter>
    <div className="App">
        <Routes>
          <Route path="/" element={<Homepage/>}/>
          <Route path ="/services" element={<Services/>} />
          <Route path ="/abroadstudy" element={<AbroadStudy/>}/>
          <Route path ="/explorjapan" element ={<Explorjapan/>}/>
          <Route path="/testpreparation" element={<Testpreparation/>}/>
          <Route path="/blogs" element={<Blogs/>}/>
          <Route path="/posts/:slug" element={<SingleServices/>}/>
          <Route path ="/about" element={<About/>}/>
          <Route  path = "/contact" element={<Contact/>}/>
          <Route path="/abroadstudy/:slug" element={<AbroadStudySingle/>}/>

        </Routes>
    </div>
    </BrowserRouter>
     </>
  );
}

export default App;
