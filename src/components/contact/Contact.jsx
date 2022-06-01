import React from 'react'
import './contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import { AiOutlinePhone } from 'react-icons/ai'
// import { TbBrandDiscord } from 'react-icons/tb'


const Contact = () => {
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

        <form action="">
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