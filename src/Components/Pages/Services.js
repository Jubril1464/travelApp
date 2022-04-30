import React from 'react';
import Nav from '../Nav';
import './Services.css'

function Services(props) {
    return (
        <div className='services__container'>
            <Nav />
            <div className="u-center-text">
            <h3 className="heading-tertiary margin-bottom-medium">Our services</h3>
            </div>
            <div className="box__container">
                <div className="services__box" data-aos="fade-right" data-aos-mirror='true' data-aos-duration='1000'>
                    <i className="fa fa-plane box__icon"></i>
                    <h2 className='margin-bottom-medium box__heading'>Air Ticket</h2>
                    <p className="paragraph">At our travel agency, you can book air ticket to any world 
                    destination. We also provide online ticket booking via our website in just couple of steps</p>
                     </div>
                <div className="services__box" data-aos="fade-left" data-aos-mirror='true' data-aos-duration='1000'>
                    <i className="fa fa-map box__icon"></i>
                    <h2 className='margin-bottom-medium box__heading'>Voyages & Cruises</h2>
                    <p className="paragraph">Besides regular tours and excursions, we also offer a variety of 
                    of cruises & sea voyages for different customers looking for awesome experiences</p>
                     </div>
            </div>
            <div className="box__container">
                <div className="services__box" data-aos="flip-left" data-aos-mirror='true' data-aos-duration='1000'>
                    <i className="fa fa-hotel box__icon"></i>
                    <h2 className='margin-bottom-medium box__heading'>Hotel Bookings</h2>
                    <p className="paragraph">We offer a wide selection of hotel ranging from 5-star
                    ones to small properties located worldwide so that you could book a hotel you like</p>
                     </div>
                <div className="services__box" data-aos="flip-right" data-aos-mirror='true' data-aos-duration='1000'>
                    <i className="fa fa-umbrella box__icon"></i>
                    <h2 className='margin-bottom-medium box__heading'>Tailored Summer Tours </h2>
                    <p className="paragraph">Our agnecy provides varied tours including tailored summer
                    tours for clients who are searching for an exclusive and memorable vacations</p>
                     </div>
            </div>

            
        </div>
    );
}

export default Services;