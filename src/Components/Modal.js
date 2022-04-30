import {useRef} from 'react';
import ReactDOM from 'react-dom'
import './Modal.css'
import Swal from 'sweetalert2'
import emailjs from 'emailjs-com'

const Modal = ({show, close}) => {
    const form = useRef();
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_u4lcbgw', 'template_2vqvw0b', form.current, 'nDTJvYvPcG1YLTepP')
      .then((result) => {
        Swal.fire({
          icon:"success",
          title:'Success',
          text:'You have succesfully booked a space!'
        })
        console.log(result.text);
    }, (error) => {
      Swal.fire({
        icon:"error",
        title:'Oops...',
        text:'Booking not successful, Try again!!!'
      })
        console.log(error.text);
    });
  
  
        e.target.reset()
    };
    
    return  (
        ReactDOM.createPortal(
        <>
            {show ?  
            <div className="modal__container" onClick={close}  >
                <div className="modal" onClick={ e => e.stopPropagation()}>
                    <header className="modal__header">
                        <h5 className="modal__title heading-tertiary margin-bottom-small">BOOK NOW</h5>
                        <i className="fa fa-times modal__icon" onClick={close}></i>
                    </header>
                    <main className="modal__content">
                        <form ref={form} onSubmit={sendEmail} className="form">
                            <div className="form__group">
                                <input type="text" className="form__input" id='name' placeholder='Full Name' required name='name' />
                                <label htmlFor="name" className="form__label">Full Name</label>                                

                            </div>
                            <div className="form__group"> 
                                <input type="email" className="form__input" id='email' placeholder='Email' required name='email' />
                                <label htmlFor="email" className="form__label" >Email</label>
                            </div>
                            <div className="form__group">
                           <button type='submit' className='btn btn--white'>Book Now &rarr;</button>
                       </div>
                        </form>
                    
                    </main>
                   
                </div>
            </div> :null
            
        }
       
        </>
        ,  document.getElementById('modal')
    )
    )
    
};

export default Modal;