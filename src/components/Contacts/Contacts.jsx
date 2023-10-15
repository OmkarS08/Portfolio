import {Button} from 'react-bootstrap'
import './Contacts.css'
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { ContactLinks } from './ContactLinks/ContactLinks';
import{RiMailSendLine} from "react-icons/ri";
export const Contacts = () => {

  const [name, setName] = useState();
  const [email,setEmail] = useState();
  const [message,setMessage] = useState();

  const form = useRef();

  const sendEmail = (e) => {
    setName('');
    setEmail('');
    setMessage('');
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
  <div className='link-container'  data-aos="fade-up" data-aos-delay="1000" data-aos-duration="3000" data-aos-once="true">
    <ContactLinks/>
  </div>
  <div className='form-container'  data-aos="fade-up" data-aos-delay="1250" data-aos-duration="3000"  data-aos-once="true">
    <form ref={form} onSubmit={sendEmail}>
      <label>Name :</label>
      <input type="text" name="user_name" value={name} />
      <label>Email :</label>
      <input type="email" name="user_email" value={email} />
      <label className='msg'>Message :</label>
      <textarea name="message" rows="4" cols="60"  value={message}/>
      <Button variant='dark' type='submit' value='Send' className='send-button'>Send   <RiMailSendLine size='1.5em'/></Button>
    </form>
    </div>
  </div>
 

  );
};

//* place holder 
//* after submit  remove input from input