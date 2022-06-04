import React from 'react'
import './experience.css'
import { BsPatchCheckFill } from 'react-icons/bs'
import { AiFillStar } from 'react-icons/ai'
import { AiOutlineStar } from 'react-icons/ai'

const Experience = () => {
  return (
    <section id='experience'>
      <h2>My Experience</h2>

      <div className='container experience__container'>
        <div className='experience__frontend'> 
          <h3>Frontend Development</h3>
          <div className='experience__content'>

          <article className='experience__details-icon'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>HTML</h4>
              <small className='text-light'><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/><AiOutlineStar/></small>
              </div>
            </article>

            <article className='experience__details-icon'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>CSS</h4>
              <small className='text-light'><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/><AiOutlineStar/></small>
              </div>
            </article>

            <article className='experience__details-icon'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>  
              <h4>JavaScript</h4>
              <small className='text-light'><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/></small>
              </div>
            </article>

            <article className='experience__details-icon'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>Bootstrap</h4>
              <small className='text-light'><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/><AiOutlineStar/></small>
              </div>
            </article>

            <article className='experience__details-icon'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>ReactJS</h4>
              <small className='text-light'><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/></small>
              </div>
            </article>

            <article className='experience__details-icon'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>ExpressJS</h4>
              <small className='text-light'><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/></small>
              </div>
            </article>

          </div>
        </div>

{/* END of FRONT END PART */}

        <div className='experience__backend'> 
        <h3>Backend Development</h3>
        <div className='experience__content'>

        <article className='experience__details-icon'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>NodeJS</h4>
              <small className='text-light'><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/></small>
              </div>
            </article>

<article className='experience__details-icon'>
  <BsPatchCheckFill className='experience__details-icon'/>
  <div>
  <h4>MongoDB</h4>
  <small className='text-light'><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/></small>
  </div>
</article>

<article className='experience__details-icon'>
  <BsPatchCheckFill className='experience__details-icon'/>
  <div>
  <h4>PostgreSQL</h4>
  <small className='text-light'><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/></small>
  </div>
</article>

<article className='experience__details-icon'>
  <BsPatchCheckFill className='experience__details-icon'/>
  <div>
  <h4>Shell Scripts</h4>
  <small className='text-light'><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/><AiOutlineStar/></small>
  </div>
</article>

<article className='experience__details-icon'>
  <BsPatchCheckFill className='experience__details-icon'/>
  <div>
  <h4>Python</h4>
  <small className='text-light'><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/><AiOutlineStar/></small>
  </div>
</article>

<article className='experience__details-icon'>
  <BsPatchCheckFill className='experience__details-icon'/>
  <div>
  <h4>Django</h4>
  <small className='text-light'><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/><AiOutlineStar/></small>
  </div>
</article>


</div>

        
        </div>

      </div>
    </section>
  )
}

export default Experience