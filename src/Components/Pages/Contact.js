import Nav from "../Nav";
import "./Contact.css";
import React, { useRef } from 'react';
import emailjs from 'emailjs-com'
import Swal from 'sweetalert2'

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_o8rxr4b', 'template_5bcocuo', form.current, 'nDTJvYvPcG1YLTepP')
    .then((result) => {
      Swal.fire({
        icon:"success",
        title:'Success',
        text:'You have succesfully send your message'
      })
      console.log(result.text);
  }, (error) => {
    Swal.fire({
      icon:"error",
      title:'Oops...',
      text:'Message not sent'
    })
      console.log(error.text);
  });


      e.target.reset()
  };



  return (
    <div className="contact">
      <Nav />
      <div className="u-center-text">
        <h2 className=" contact__heading heading-tertiary margin-bottom-medium">
          Contact us now
        </h2>
      </div>
      <div className="row">
        <div className="contact__container" data-aos='zoom-in' data-aos-duration='1000'>
          <form ref={form} onSubmit={sendEmail} className="form">
            <div className="form__group">
              <input
                type="text"
                className="form__input"
                id="name"
                placeholder="Full Name"
                required
                name='name'
              />
              <label htmlFor="name" className="form__label contact__label " required>
                Full Name
              </label>
            </div>
            <div className="form__group">
              <input
                type="email"
                className="form__input"
                id="email"
                placeholder="Email"
                required
                email='email'
              />
              <label htmlFor="email" className="form__label contact__label">
                Email
              </label>
            </div>
            <div className="form__group">
              <textarea
                name="message"
                id="comment"
                cols="30"
                rows="10"
                className="form__input"
                placeholder="Give us your feedback......"
              ></textarea>
              <label htmlFor="comment" className="form__label contact__label">
                Comment
              </label>
            </div>
            <div className="form__group">
              <button type="submit" className="btn btn--white btn--contact">
                Submit &rarr;
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
