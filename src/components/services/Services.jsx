import React from 'react'
import './services.css'
import { BiCheck } from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h2>Services</h2>

      <div className='container services__container'>
    <article className='service'>
      <div className='service__head'>
        <h3>Frontend</h3>
      </div>

      <ul className='service__list'>
        <li>
          <BiCheck className='service__list-icon'/>
          <p>Response Designs</p>
        </li>
        <li>
          <BiCheck className='service__list-icon'/>
          <p>CSS3</p>
        </li>
        <li>
          <BiCheck className='service__list-icon'/>
          <p>SASS</p>
        </li>
        <li>
          <BiCheck className='service__list-icon'/>
          <p>Bootstrap</p>
        </li>
      </ul>


    </article>


    <article className='service'>
      <div className='service__head'>
        <h3>Backend</h3>
      </div>

      <ul className='service__list'>
        <li>
          <BiCheck className='service__list-icon'/>
          <p>Testing</p>
        </li>
        <li>
          <BiCheck className='service__list-icon'/>
          <p>Performance Optimizations</p>
        </li>
        <li>
          <BiCheck className='service__list-icon'/>
          <p>API</p>
        </li>
        {/* <li>
          <BiCheck className='service__list-icon'/>
          <p>TESTING</p>
        </li> */}
      </ul>


    </article>



    <article className='service'>
      <div className='service__head'>
        <h3>Databases</h3>
      </div>

      <ul className='service__list'>
        <li>
          <BiCheck className='service__list-icon'/>
          <p>MongoDB</p>
        </li>
        <li>
          <BiCheck className='service__list-icon'/>
          <p>PostgreSQL</p>
        </li>
        <li>
          <BiCheck className='service__list-icon'/>
          <p>SQL</p>
        </li>
        <li>
          <BiCheck className='service__list-icon'/>
          <p>NoSQL</p>
        </li>
      </ul>


    </article>




      </div>


    </section>
  )
}

export default Services