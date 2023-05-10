import './Contact.scss'
import { useRef } from 'react';
import emailjs from '@emailjs/browser'

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_eysp83u', 'template_aby0s18', form.current, 'joQSTcLN9fUXb2Sqt')
      .then((result) => {
          console.log(result.text);
          console.log('message succesfull');
          e.target.reset();
      }, (error) => {
          console.log(error.text);
      });
  };



    return(
    <section id='contact' className='contact'>
        <div className='container'>
            <h2 className='contact_title'>contact me </h2>
          <div className='form_box'>
            <form ref={form} className='contact_form' onSubmit={sendEmail}>
                <label htmlFor="name">name</label>
                <input type="text" name='user_name' placeholder='Full Name'/>

                <label htmlFor="phone">phone</label>
                <input type="tel" name='user_phone' placeholder='Phone number'/>

                <label htmlFor="email">e-mail</label>
                <input type="email" name='user_email' placeholder='E-mail' />

                <label htmlFor="msg">message</label>
                <textarea name='message' placeholder='your message'></textarea>
                <button type='submit' value='Send'>send</button>
            </form>
            <p>let's work togheter</p>
          </div>
        </div>
    </section>
    )
}

export default Contact