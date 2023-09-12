import './App.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap'
import {BrowserRouter,Routes, Route} from 'react-router-dom'
import MainHomepage from './homepage/MainHomepage';
import Search from './pages/search/Search';


function App() {
  return (
    <>
         <BrowserRouter> 
          <Routes>
              <Route path="/" element={ <MainHomepage/>}/>
              <Route path="/search" element={<Search/>} /> 
          </Routes>
          </BrowserRouter>
    </>
  
  );
}

export default App;
