import React from 'react'
import  { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function EmailInquery() {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm(
          'service_8nn87ii', 
          'template_f7vvouj', 
          form.current, 
          'l-khHs50ITrKbUXYc')
          .then((result) => {
              console.log(result.text);
              
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
        }
        
  return (
    <>
    <div className="contact-inquery">
        <h4> Send Inquey By Email</h4>
    <form ref={form} onSubmit={sendEmail}>
            <label>Name</label>
            <input type="text" name="user_name" className='contact-input ' />
            <label>Email</label>
            <input type="email" name="user_email" className='contact-input ' />
            <label>Message</label>
            <textarea name="message" className='contact-message ' />
            <input type="submit" value="Send" className='contact-send ' />
        </form>
    </div>

    </>
  )
}
