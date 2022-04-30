import React from 'react';
import Avatar1 from '../images/tour1.jpg';
import './Testimonial.css';
import { SwiperSlide } from 'swiper/react/swiper-slide';
import {Swiper} from 'swiper/react/swiper'




import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";




const data =[
    {
        avatar: Avatar1,      
        name: 'John Doe',
        id:1,
        review:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione veritatis quas esse porro minima officiis repellendus ullam laborum nobis in eos quaerat reprehenderit odio minus, ducimus officia harum explicabo quo?'
    },
    {
        avatar: Avatar1,
        name: 'Nurudeen',
        id:2, 
        review:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione veritatis quas esse porro minima officiis repellendus ullam laborum nobis in eos quaerat reprehenderit odio minus, ducimus officia harum explicabo quo?'
    },
    {
        avatar: Avatar1,
        name: 'Jubril',
        id:3,
        review:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione veritatis quas esse porro minima officiis repellendus ullam laborum nobis in eos quaerat reprehenderit odio minus, ducimus officia harum explicabo quo?'
    }
]



function Testimonial(props) {

    return (
        <section className='section-testimonial'> 
        <h1 className="heading-tertiary margin-bottom-medium">Review from client</h1>
        
            
          <Swiper className='container testimonial__container'  data-aos='fade-right'  data-aos-mirror='true' data-aos-duration='1000' >
        {/* //   modules={[Pagination]}
        //   spaceBetween={50}
        //   slidesperView={3}
        //   pagination={{clickable: true}}   */}
          
        
        {data.map(item => {
           return( 
           
            <SwiperSlide  key={item.id} >
                <div className="client__avatar">
                    <img src={item.avatar} alt={item.name} className='avatar' />
 
                </div>
                <h5 className='client__name'>{item.name}</h5>
                <p className='client__review'>
                    {item.review}
                </p>
                
 
            </SwiperSlide>
           
             )
        })
        }
        </Swiper> 
       
        
            
        </section>
    );
}

export default Testimonial;