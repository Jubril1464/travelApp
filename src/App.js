import {useEffect} from 'react'
import './App.css';
import  { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Components/Pages/Home';
import Contact from './Components/Pages/Contact';
import Services from './Components/Pages/Services';
import Footer from './Components/Footer';
import AOS from "aos";
import "aos/dist/aos.css";


function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  

  return (
    <>
      <Router>
       
         <Routes>
           <Route path='/' exact element={<Home></Home>} />
           <Route path='/services' element={<Services></Services>} />
           <Route path='/contact' element={<Contact></Contact>} />
          
           </Routes>
    <Footer/>
      </Router>

      
    </>
  );
}

export default App;
