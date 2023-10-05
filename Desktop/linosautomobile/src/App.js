import './App.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap'
import {BrowserRouter,Routes, Route} from 'react-router-dom'
import MainHomepage from './homepage/MainHomepage';
import Search from './pages/search/Search';
import SinglePage from './pages/singelpage/SinglePage';
import About from './pages/aboutus/Aboutus'
import Contact from './pages/contact/Contact';
import Services from './pages/services/Services.jsx'
function App() {
  return (
    <>
         <BrowserRouter> 
          <Routes>
              <Route path="/" element={ <MainHomepage/>}/>
              <Route path="/search" element={<Search/>} /> 
              <Route path="/search/:slug" element={<SinglePage/>}/>
              <Route path ="/aboutus" element={<About/>}/>
              <Route path="/contact" element={<Contact/>}/>
              <Route path ="/services" element={<Services/>}/>
          </Routes>
          </BrowserRouter>
    </>
  
  );
}

export default App;
