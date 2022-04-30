import {useState} from "react";
import "../App.css";

import "./HeroSection.css";
import Nav from "./Nav";
import Typical from 'react-typical'
import Modal from "./Modal";

function HeroSection() {
  const [modal, setModal] = useState(false);
  const Toggle = () => {
    setModal(!modal)
    
  }


  return (
    <div className="section-hero">
      <Nav />
      <Modal show={modal} close={Toggle} />
      
      <div className="hero-container">
       <Typical steps={['Adventure Awaits', 1000, 'To the world of an incredible vacation', 500 ]}
       loop={Infinity}
       wrapper='h1'
       className='heading-primary'  />
        <p classsName="heading-paragraph">What are you waiting for?</p>
        <div className="hero-btns">
         
          <a href="#" className="btn btn--white" onClick={Toggle} data-aos='zoom-in' data-aos-duration='1000' data-aos-mirror='true'>
            BOOK NOW{" "}
          </a>
          
        </div>
      </div>
     
    </div>
  );
}

export default HeroSection;
