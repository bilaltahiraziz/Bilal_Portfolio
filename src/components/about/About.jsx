import React from 'react'
import './about.css'
import ME from '../../assets/Profile Pic 3.jpg'
import { FaAward } from 'react-icons/fa'
import { FaUserGraduate } from 'react-icons/fa'
import { VscFolderActive } from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
    <h2>About Me</h2>

    <div className="container about_container">

      <div className="about_me">
        <div className="about__me-image">
          <img src={ME} alt="About me image"/>
        </div>
      </div>

      <div className="about_content">
        <div className="about__cards">

          <article className='about__card'>
            <FaAward className='about__icon'/>
            <h5>Experience</h5>
            <small>General Assembly: Full-Immersive SEI<br /></small>
            <small>Free Code Camp: Back End Development and API Certification<br /></small>
          </article>

          <article className='about__card'>
            <FaUserGraduate className='about__icon'/>
            <h5>Education</h5>
            <small>General Assembly Bootcamp <br /></small>
            <small>Southern Illinois University Edwardsville <br /></small>
            <small>Ranken Technical College<br /></small>
          </article>

          <article className='about__card'>
            <VscFolderActive className='about__icon'/>
            <h5>Projects</h5>
            <small>20+ Completed Projects</small>
          </article>

          <p><br />A functional department manager and avid member of the PCMasterRace community, with a daily dose of innovation. I enjoy the pursuit of optimal processes that we use every day, creatively finding faster and smoother solutions to our daily problems, everything from cable management to department synergy. Aiming to leverage my academic experience and proven knowledge of programming to help businesses and companies reach their maximum potential through innovation, technology, and SMART Goals.</p>

          <p>Forever living by the quote, “You can't manage, what you don't measure” - Peter Drucker</p>

          <a href='#contact' className='btn btn-primary'>Let's Talk</a>

        </div>
      </div>

    </div>
    </section>
  )
}

export default About