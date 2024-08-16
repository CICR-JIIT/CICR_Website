import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './styles/contact.css';
import location from './images/location.svg';
import phone from './images/phone.svg';
import email from './images/email.svg';
import insta from './images/insta.svg';
import linkedin from './images/linkedin.svg';
import discord from './images/discord.svg';

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs 
      .sendForm(
        import.meta.env.VITE_SERVICE_ID, 
        import.meta.env.VITE_TEMPLATE_ID, 
        form.current, 
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(
        () => {
          alert('Message Sent Successfully 👍');x
        },
        (error) => {
          alert('FAILED...👎', error.text);
        }      
      );
  };

  return (
    <>
    <div className='body'>
      <div className="container">
        <div className='form'>
          <form ref={form} onSubmit={sendEmail}>
            <h1 className='title'>Let's Talk</h1>
            <label className='label'>Your Name</label>
            <br />
            <input className='input' type="text" name="user_name" required />
            <br />
            <label className='label'>Your Email</label>
            <br />
            <input className='input' type="email" name="user_email" required />
            <br />
            <label className='label'>Your Message</label>
            <br />
            <textarea className='id' name="message" placeholder='Write your review here' />
            <br />
            <input className='button' type="submit" value="Send Message" />
          </form>
        </div>
        <div className='contact'>
          <h1 className='title'>Contact Us</h1>
          <p className='info'><img src={email} alt="email"  height= "30px"/> cicrjiit128@gmail.com</p> 
          <p className='info'><img src={phone} alt="phone" height="30px" /> +91 xxxxx xxxxx</p> 
          <p className='info'><img src={location} alt="location" height= "30px" /> Room Number: 140, JIIT-128, Noida</p>
          <div className='socials-container'>
            <div className='socials'>
              <a href="https://www.instagram.com/cicr_jiit/" target='_blank'><img src={insta} alt="insta" height= "45px" /></a>
              <a href="https://www.linkedin.com/company/cicrjiit128/" target='_blank'><img src={linkedin} alt="linkedin" height= "45px" /></a>
              <a href="https://discord.gg/3PTKV2bvyJ" target='_blank'><img src={discord} alt="discord" height= "45px" /></a>
            </div>
          </div>
        </div>
        <footer className='footer'>
          <p> 	&#169; CICR JIIT-128, All Rights Reserved </p>
        </footer>
      </div>
    </div>
    </>
  );
};
