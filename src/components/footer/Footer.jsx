import React from 'react'
import './footer.css'
import { BsFacebook } from 'react-icons/bs'
import { BsTwitter } from 'react-icons/bs'
import { BsInstagram } from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Bilal Tahir Aziz</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Porfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.facebook.com/bilaltahiraziz/"><BsFacebook /></a>
        <a href="https://twitter.com/bilaltahiraziz"><BsTwitter /></a>
        <a href="https://www.instagram.com/bilaltahiraziz/"><BsInstagram /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Better Call Bilal. All Rights Reserved</small>
      </div>
    </footer>
  )
}

export default Footer