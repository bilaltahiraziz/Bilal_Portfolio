import React from 'react'
import './contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import { AiOutlinePhone } from 'react-icons/ai'
import { useRef } from 'react'
import emailjs from 'emailjs-com'
// import { TbBrandDiscord } from 'react-icons/tb'


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_bqwb6dy', 'template_qeiddmr', form.current, 'D4G44HTWXPYGZm1m_')

    e.target.reset()
  };



  return (
    <section id='contact'>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">

        <article className='contact__option'>
        <MdOutlineEmail className='contact__option-icon'/>
          <h4>Email</h4>
          <h5>bilal.aziz@live.com</h5>
          <a href="mailto:bilal.aziz@live.com">Send a Message</a>
        </article>

        <article className='contact__option'>
        <AiOutlinePhone className='contact__option-icon' />
          <h4>Phone</h4>
          <h5>Available Upon Request</h5>
          <a href='phone:6189171398'>Call / Text / Leave a Message</a>
        </article>

        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button className='btn btn-primary' type='submit'>Send Message</button>
        </form>

      </div>
    </section>
  )
}

export default Contact