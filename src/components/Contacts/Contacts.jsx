import {Button} from 'react-bootstrap'
import './Contacts.css'
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ContactLinks } from './ContactLinks/ContactLinks';
import{RiMailSendLine} from "react-icons/ri";

export const Contacts = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
        process.env.REACT_APP_SERVICE_ID, 
        process.env.REACT_APP_TEMPLATE_ID,
         form.current, 
         process.env.REACT_APP_PUBLIC_ID)
      .then((result) => {
          console.log(result.text);
          alert("Message Sent");
      }, (error) => {
          console.log(error.text);
      });
  };

  return (<div className='contacts-container'>
  <div className='link-container'>
    <ContactLinks/>
  </div>
  <div className='form-container'>
    <form ref={form} onSubmit={sendEmail}>
      <label>Name :</label>
      <input type="text" name="user_name" />
      <label>Email :</label>
      <input type="email" name="user_email" />
      <label className='msg'>Message :</label>
      <textarea name="message" rows="4" cols="60" />
      <Button variant='dark' type='submit' value='Send' className='send-button'>Send   <RiMailSendLine size='1.5em'/></Button>
    </form>
    </div>
  </div>
 

  );
};