import React, { useEffect, useRef } from 'react';
import { ReactTyped } from 'react-typed';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {

  const form = useRef()


  const sendEmail = function (e) {
    e.preventDefault()
    emailjs
      .sendForm('service_rcoz0wh', 'template_deah67w', form.current, {
        publicKey: 'TIdD3NFeQ7X5p-tGb',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          toast.success("Muraciyetiniz qeyde alindi!")
        },
        (error) => {
          console.log('FAILED...', error.text);
          toast.error("Serverde xeta var. Bir az sonra cehd edin!")
        },
      );

  }

  return (
    <div className=''>
      <div className='text-center h3 my-3'>
        <ReactTyped
          strings={[
            "Ready to bring your idea to life?",
          ]}
          typeSpeed={40}
          backSpeed={50}
          loop
          key={'ReactTyped'}
        />
      </div>

      <div className="contacts-container p-5 position-relative">

<img src="/assets/icons/decor.svg" alt=""  className='footer-left'/>
<img src="/assets/icons/rec.svg" alt=""  className='footer-right'/>
        <div className="container d-flex justify-content-center my-5">
          <form onSubmit={sendEmail} className='bg-dark form p-5' ref={form}>
            <h4 className='h2 text-white'>Get in touch</h4>
            <p className=' text text-secondary'>Describe Your Issue Below. Our Manager Will Contact <br /> You As Soon As Possible.</p>
            <div className='form-group '>
              <input type="text" name='name' placeholder='Name' className='form-control shadow-none text-white' />
            </div>
            <div className='form-group my-4 '>
              <input type="email" name='email' placeholder='Email' className='form-control shadow-none text-white' />
            </div>
            <div className='form-group '>
              <textarea name="message" id="" placeholder='Message' className='form-control shadow-none text-white'></textarea>
            </div>

            <div className="button">
              <button className='mt-5'>Send</button>
            </div>


          </form>
        </div>

        <ToastContainer />

      </div>
    </div>
  );
}

export default Contact;
