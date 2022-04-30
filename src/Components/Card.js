import React from 'react';
import CardItem from './CardItem';
import './Card.css'
import '../App.css'
import tour1 from './images/tour1.jpg'
import tour2 from './images/tour2.jpg'
import tour3 from './images/tour3.jpg'
import tour4 from'./images/tour4.jpg'
import tour5 from './images/bing-hui-yau-y85Tir86Q34-unsplash.jpg'




function Card(props) {
    return (
        <div className='cards'>
            <div className="u-center-text">
            <h1 className='heading-tertiary'>Check out these EPIC Destination!</h1>
            </div>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__item'>
                        <CardItem 
                        src={tour1}
                        text='Explore the waterfall deep inside Amazon jungle'
                        label='Adventure'
                        path='/services'
                        
                        
                        />
                        <CardItem 
                        src={tour2}
                        text='Explore Indian to see the Taj Mahal and some cool Indian temple'
                        label='Entertainment'
                        path='/services'
                      
                        />
                    </ul>
                    
                    <ul className='cards__item'>
                        <CardItem 
                        src={tour3}
                        text='Explore the waterfall deep inside Amazon jungle'
                        label='Adventure'
                        path='/services'
                       
                        
                        />
                        <CardItem 
                        src={tour4}
                        text='Explore the waterfall deep inside the Amazon jungle'
                        label='Entertainment'
                        path='/services'
                       
                        />
                        <CardItem 
                        src={tour5}
                        text='Take a tour to Japan(Tokyo) to see how cool skyscrapers look'
                        label='Entertainment'
                        path='/services'
                       
                        />
                    </ul>
                    
                </div>
                
            </div>
            
        </div> 
    );
}

export default Card;